import express from 'express';
import { searchRead } from '../odoo/odoo.service.js';
import { readByIds } from '../odoo/odoo.service.js';


const managerRoute = express.Router();

/*
    THIS ROUTE WILL BE USED TO RETRIEVE INFORMATION ABOUT:
    > property manager details
*/

managerRoute.get('/', async (req, res, next) => {
    try {
        const domain = [];

        const propertyManager = await searchRead({
            model: "bedspacio.property.manager",
            domain,
            fields: [
                "name", 
                "contact_number",
                "branch_id"
            ],
            limit: 10,
            offset: Number(req.query.offset || 0),
            order: "id asc"
        });

        if (!propertyManager) throw new Error('Failed to retrieve data fro Property Manager!');

        const branchId = [
            ...new Set(
                propertyManager.map(prop => ({
                    id: prop.id,
                    branch_name: prop.name
                }))
            )
        ]

        console.log('Branch ID: ', branchId)
        
        res.json(
            propertyManager.map(pm => ({
                id: pm.id,
                name: pm.name,
                contact_number: pm.contact_number,
                branch: branchId
            }))
        );
    } catch (err) {
        next(err);
    }
})




export default managerRoute;