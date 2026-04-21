import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.development' }) 
// dotenv.config({ path: '.env' })

const baseURL = process.env.ODOO_URL;
const USER_API_KEY = process.env.USER_API_KEY;


export async function getOdooClient() {
    const client = axios.create({
        baseURL,
        headers: {
            Authorization: `Bearer ${USER_API_KEY}`,
            "Content-Type": "application/json",
            "X-Odoo-Database": process.env.ODOO_DB
        },
        validateStatus: () => true
    });

    return {
        call: async (path, body) => {
            const response = await client.post(path, body);

            console.log("ODOO RESPONSE STATUS:", response.status);
            console.log("ODOO RESPONSE DATA:", response.data);  

            if (response.status >= 400) {
                throw new Error(`HTTP ${response.status}: ${JSON.stringify(response.data)}`);
            }

            if (response.data?.error) {
                throw new Error(
                    `Odoo API error: ${JSON.stringify(response.data.error)}`
                );
            }

            return response;
        }
    }
}

