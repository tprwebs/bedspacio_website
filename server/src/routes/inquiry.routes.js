import express from 'express';
import axios from 'axios'
import { searchRead, readByIds, executeKw, createInquiryRecord, createCrmRecord } from '../odoo/odoo.service.js';
import { getOdooClient } from '../odoo/session.js';
import { extractOdooError } from '../utils/errorExtract.js';
import { rateLimitMiddleware } from '../middleware/rateLimit.js';

const ODOO_URL = process.env.ODOO_URL;
const inquiryRoutes = express.Router();


/*
    1. Creates an record of type="opportunity" in ODOO
    2. Inquiry comming from /rentals/[listing_id]
*/

// inquiryRoutes.post('/v1/:public_room_id/inquiries', async (req, res, next) => {
//     try {
//         const {
//             public_room_id,
//             starting_price,
//             full_name,
//             contact_number,
//             email,
//             work_schedule,
//             target_move_in,
//             months_of_stay,
//             other
//         } = req.body;


//         const result = await createInquiryRecord({
//             model: "bedspacio.inquiry",
//             values: {
//                 public_room_id: Number(public_room_id),
//                 form_type: 'room',
//                 starting_price: Number(starting_price),
//                 full_name: full_name,
//                 contact_number: contact_number,
//                 email: email,
//                 work_schedule: work_schedule,
//                 target_move_in: new Date(target_move_in).toISOString().split('T')[0],
//                 months_of_stay: Number(months_of_stay),
//                 others: other,
//             }
//         })


//         if (!result) {
//             console.log("Post request result: ", result);
//             return res.status(500).send({
//                 success: false,
//                 message: 'Internal server error!'
//             })
//         }

//         if (result?.name === 'odoo.exceptions') {
//             return res.status(400).json({
//                 success: false,
//                 message: result.message,
//                 error: result
//             });
//         }

//         return res.json({
//             success: true,
//             data: result,
//             message: 'Inquiry submitted sucessfully!'
//         });
        
//     } catch (err) {
//         next(err);

//         console.error('Error creating lead record: ', err);
//         return res.status(500).json({
//             success:false,
//             message: "Error creating Lead Record!"
//         })
//     }
// });


inquiryRoutes.post('/v1/crm-record/opportunity', rateLimitMiddleware, async (req, res, next) => {
    try {
        const {
            public_room_id,
            starting_price,
            fullname,
            contactNumber,
            email,
            schedule,
            targetMoveIn,
            monthsOfStay,
            other
        } = req.body;


        const inquiry_result = await createInquiryRecord({
            model: "bedspacio.inquiry",
            values: {
                public_room_id: Number(public_room_id),
                form_type: 'room',
                starting_price: Number(starting_price),
                full_name: fullname,
                contact_number: contactNumber,
                email: email,
                work_schedule: schedule,
                target_move_in: new Date(targetMoveIn).toISOString().split('T')[0],
                months_of_stay: Number(monthsOfStay),
                others: other,

                ip_address: req.ipAddress
            }
        });

        if (!inquiry_result?.length) {
            return res.status(50).json({
                success: false,
                message: "Failed to create inquiry record"
            })
        };

        const inquiryId = inquiry_result[0];

        if (inquiry_result) {
            const result = await createCrmRecord({
                model: "crm.lead",
                values: {
                    name: `Opportunity - ${fullname} (${public_room_id})`,
                    type: 'opportunity',
                    contact_name: fullname,
                    email_from: email,
                    phone: contactNumber,
                    date_deadline: targetMoveIn,
                    expected_revenue: `${monthsOfStay * starting_price}`,
                    description:`
                        <strong>Work Schedule: </strong> ${schedule}, <br/>
                        <strong>Target Move-In: </strong> ${targetMoveIn}, <br/>
                        <strong>Month/s of Stay: </strong> ${monthsOfStay}, <br/>
                        <strong>Other: </strong> ${other}
                    `
                }
            });
    
            const new_id = Array.isArray(result) && result.length > 0 ? result[0] : null;
            console.log('[CreateCrmRecord] New ID: ', new_id);

            try {
                if (new_id) {
                    await executeKw({
                        model: "bedspacio.inquiry",
                        method: "update_crm_status",
                        kwargs: {
                            record_id: inquiryId,
                            status: "sent",
                            crm_id: new_id
                        }
                    });
                }
            } catch (e) {
                console.error("Failed to update CRM status:", e);
            }
            
            return res.json({
                success: true,
                data: result,
                message: '[Opportunity] Form submitted successfully'
            });
        }


    } catch (err) {
        console.error('Error creating crm record: ', err);

        const odooMessage = extractOdooError(err)

        return res.status(500).json({
            success: false,
            message: odooMessage
        })
    }
});



inquiryRoutes.post('/v1/crm-record/lead', rateLimitMiddleware, async (req, res) => {
    try {
        const {
            fullname, 
            contactNumber,
            email,
            subject,
            message
        } = req.body;

        const check_inquiry = await createInquiryRecord({
            model: "bedspacio.inquiry", 
            values: {
                form_type: 'contact',
                full_name: fullname,
                contact_number: contactNumber,
                email: email,
                others: message,
                ip_address: req.ipAddress
            }
        })

        if (!check_inquiry?.length) {
            return res.status(50).json({
                success: false,
                message: "Failed to create inquiry record"
            })
        }

        const inquiryId = check_inquiry[0];

        if (check_inquiry) {
            const result = await createCrmRecord({
                model: "crm.lead",
                values: {
                    name: `Lead - ${fullname} (${subject})`,
                    type: "lead",
                    contact_name: fullname,
                    email_from: email,
                    phone: contactNumber,
                    description: message
                }
            });

            const new_id = Array.isArray(result) && result.length > 0 ? result[0] : null;
    
            if (!new_id) {
                throw new Error("[lead] CRM record creation failed");
            }

            try {
                if (new_id) {
                    await executeKw({
                        model: "bedspacio.inquiry",
                        method: "update_crm_status",
                        kwargs: {
                            record_id: inquiryId,
                            status: "sent",
                            crm_id: new_id
                        }
                    });
                }
            } catch (e) {
                console.error("Failed to update CRM status:", e);
            }
            
            console.log('[CreateCrmRecord] New ID: ', new_id);
    
            return res.json({
                success: true,
                data: result,
                message: '[Lead] Form submitted successfully'
            });
        }
        
    } catch (err) {
        console.error('Error creating crm record: ', err);

        const odooMessage = extractOdooError(err)

        return res.status(500).json({
            success: false,
            message: odooMessage
        })
    }
});



export default inquiryRoutes;