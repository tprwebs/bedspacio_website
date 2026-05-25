import express from 'express';
import { db } from '../config/database.js';
import { rateLimitMiddleware, inquiryLimiter } from '../middleware/rateLimit.js';
import { requireAuth } from '../middleware/auth.js';


const dashboardRoute = express.Router();


dashboardRoute.get('/v1/inquiry/pending', async (req, res) => {
    try {

        const result = await db.manyOrNone(
            `SELECT 
                id,
                room_uuid,
                fullname,
                status,
                target_move_in,
                created_at
            FROM inquiries 
            WHERE 
                is_archived = false AND
                status = 'pending' AND
                type = 'room_inquiry'
            ORDER BY created_at ASC`
        )

        return res.status(200).json(result);

    } catch (err) {
        console.error('Error retrieving room inquiries: ', err);
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
});


dashboardRoute.get('/v1/inquiries', async (req, res) => {
    try {

        const result = await db.manyOrNone(
            `SELECT
                status,
                COUNT(*) AS count
            FROM inquiries
            WHERE
                is_archived = false
                AND type = 'room_inquiry'
            GROUP BY status`
        );

        const stats = [
            { status: 'pending', count:  0 },
            { status: 'contacted', count:  0 },
            { status: 'converted', count:  0 },
            { status: 'closed', count:  0 }
        ];

        result.forEach((item) => {
            const stat = stats.find(s => s.status === item.status);

            if (stat) {
                stat.count = Number(item.count);
            }
        });

        return res.status(200).json(stats);

    } catch (err) {
        console.error('Error retrieving dashboard stats:', err);

        return res.status(500).json({
            message: 'Internal server error'
        });
    }
});


dashboardRoute.get('/v1/rooms/best', async (req, res) => {
    try {

        const bestRoom = await db.manyOrNone(
            `SELECT
                r.room_uuid,
                r.title,
                r.type,
                COUNT(i.id) AS inquiry_count
            FROM rooms r
            INNER JOIN inquiries i
                ON r.room_uuid = i.room_uuid
            GROUP BY r.room_uuid, r.title, r.type
            ORDER BY inquiry_count DESC;`
        );

        return res.status(200).json(bestRoom);

    } catch (err) {
        console.error('Error retrieving room stats:', err);

        return res.status(500).json({
            message: 'Internal server error'
        });
    }
})

export default dashboardRoute;