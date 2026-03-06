import express from 'express';
import { searchRead } from '../odoo/odoo.service.js';
import { readByIds } from '../odoo/odoo.service.js';

const roomRoute = express.Router();

/*
    THIS ROUTE WILL BE USED TO RETRIEVE INFORMATION ABOUT:
    > room listings
    > room in-depth information
    > room images
*/


roomRoute.get('/listing' , async (req, res, next) => {
    try {
        const domain = [];

        const rooms = await searchRead({
            model: "bedspacio.room",
            domain,
            fields: [ 
                "room_name", "room_type", "gender", "starting_price", "is_available", 'image_ids', "branch_id", "inclusion_ids" 
            ],
            limit: 20,
            offset: Number(req.query.offset || 0),
            order: "id desc"
        });

        const inclusionIds = [...new Set(rooms.flatMap(room => room.inclusion_ids || []))];

        const inclusions = inclusionIds.length
            ? await readByIds({
                model: "bedspacio.room.inclusion",
                ids: inclusionIds,
                fields: ["name"]
            })
            : [];

        const inclusionMap = Object.fromEntries(inclusions.map(inc => [inc.id, inc]));

        const imageIds = [...new Set(
            rooms
                .flatMap(room => room.image_ids?.[0]) // take the first image [index 0]
                .filter((id) => typeof id === "number")
            )];
        const thumbs = imageIds.length
            ? await readByIds({
                model: "bedspacio.room.image",
                ids: imageIds,
                fields: ["image"]
            })
            : [];
        
        const thumbMap = Object.fromEntries(thumbs.map(thumb => [thumb.id, thumb]))

        res.json(
            rooms.map((room) => {
                const thumbId = room.image_ids?.[0];
                const thumbRecord = typeof thumbId === "number" ? thumbMap[thumbId] : null;

                return {
                    id: room.id,
                    room_name: room.room_name,
                    room_type: room.room_type,
                    gender: room.gender,
                    price: room.starting_price,
                    is_available: room.is_available,
                    branch_id: room.branch_id,
                    inclusions: (room.inclusion_ids || [])
                        .map(id => inclusionMap[id])
                        .filter(Boolean),

                    thumbnail: thumbRecord?.image ?? null,
                    thumbnail_image_id: thumbId ?? null
                }
            })
        );
        
    } catch (err) {
        next(err);
    }
});



roomRoute.get('/details/:id', async (req, res, next) => {
    try {

        const room_id  = Number(req.params.id);

        if (!Number.isInteger(room_id) || room_id <= 0) {
            return res.status(400).json({ message: "Invalid room id" });
        }

        // FETCH
        /* 
            Room name
            Room Type
            Gender
            Description
            Room images
            Inclusions
            Property Manager
            Landmarks
            Branch
            Payment Terms
            Address of the branch via BRANCH model (bedspacio.branch)

            maximum_pax
            available slot
        */

        const domain = [];

        const roomDetail = await searchRead({
            model: "bedspacio.room",
            domain: [["id", "=", room_id]],
            fields: [
                "room_name",
                "room_type",
                "description",
                "gender",
                "starting_price",
                "maximum_pax",
                "available_slot",
                "available_upper",
                "available_lower",
                "branch_address",
                "property_manager_name",
                "property_contact",
                "inclusion_ids",
                "payment_term_ids"
            ],
            limit: 1,
            offset: Number(req.query.offset || 0),
            order: "id asc"
        });

        if (!roomDetail.length) {
            return res.status(404).json({ message: "Room not found" });
        }

        console.log("req.params.id:", req.params.id);
        console.log("roomDetail:", roomDetail);

        const data = roomDetail[0];
        console.log('Data: ', data);

        // GET THE FIELDS ID, NAME FOR INCLUSIONS
        // get the id and name from inlcusionIds
        const inclusions = data.inclusion_ids.length
            ? await readByIds({
                model: "bedspacio.room.inclusion",
                ids: data.inclusion_ids,
                fields: [ "name" ]
            }) : []

        // GET THE FIELDS ID, LABEL, AMOUNT FOR PAYMENT TERMS
        // Map the ids for payment_term_ids
        const paymentTerms = data.payment_term_ids.length
            ? await readByIds({
                model: "bedspacio.payment.term",
                ids: data.payment_term_ids,
                fields: [ "label", "amount" ] 
            }) : []

        res.json({
                id:room_id,
                name: data.room_name,
                type: data.room_type,
                description: data.description,
                gender: data.gender,
                starting_price: data.starting_price,
                maximum_pax: data.maximum_pax,
                available_slot: data.available_slot,
                available_upper: data.available_upper,
                available_lower: data.available_lower,
                branch_address: data.branch_address,
                property_manager: data.property_manager_name,
                property_manager_contact: data.property_contact,
                inclusions: inclusions,
                payment_terms: paymentTerms
            });

    } catch (err) {
        next(err);
    }
})




export default roomRoute;