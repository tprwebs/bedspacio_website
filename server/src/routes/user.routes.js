import express from 'express';
import { db } from '../config/database.js';


const userRoute = express.Router();

userRoute.get('/v1', async (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({
            success: false,
            message: 'Not Authenticated'
        });
    };

    return res.json({
        success: true,
        user: req.session.user
    });

})

export default userRoute;