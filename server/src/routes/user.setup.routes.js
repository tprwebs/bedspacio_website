import express from 'express';
import { db } from '../config/database.js';
import bcrypt from 'bcrypt';

const userSetupRoute = express.Router();

userSetupRoute.post('/v1/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const response = await db.oneOrNone(
            `SELECT 
                id, fullname, contact_number, email, role, password, is_active 
                FROM users 
                WHERE username = $1
            `, [username]
        );

        if (!response) {
            return res.json({
                message: 'Invalid login credentials',
                success: false
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            response.password
        )

        if (!passwordMatch) {
            return res.json({
                message: 'Invalid login credentials',
                success: false
            });
        }

        req.session.user = {
            id: response.id,
            fullname: response.fullname,
            username: username,
            contact_number: response.contact_number,
            email: response.email,
            role: response.role
        };

        console.log('User logged in: ', req.session.user);

        return res.json({
            message: 'Login successful!',
            sucess: true,
            user: req.session.user
        })
        
    } catch (err) {
        console.error('Login Error: ', err);
    }
});




// userSetupRoute.post()



export default userSetupRoute;