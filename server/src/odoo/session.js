import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' }) 
// dotenv.config({ path: '.env' })

const baseURL = process.env.ODOO_URL;

export async function getOdooClient() {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: `Bearer ${process.env.USER_API_KEY}`,
            "Content-Type": "application/json",
            "X-Odoo-Database": process.env.ODOO_DB
        },
        validateStatus: () => true
    });

    return {
        call: async (path, body) => {
            const response = await client.post(path, body);

            if (response.data?.error) {
                throw new Error(
                    `Odoo API error : ${JSON.stringify(response.data.error)}`
                )
            }

            return response;
        }
    }
}

