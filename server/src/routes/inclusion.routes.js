import express from 'express';
import { searchRead } from '../odoo/odoo.service.js';
import { readByIds } from '../odoo/odoo.service.js';

const inclusionRoute = express.Router();

inclusionRoute.get('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err);
    }
});


export default inclusionRoute;