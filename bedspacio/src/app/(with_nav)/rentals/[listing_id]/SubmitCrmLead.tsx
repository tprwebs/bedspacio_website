"use server"

import { BASE_URL } from '@/config/config'
import { InquiryFormValues } from "./InquiryFormClient"
import axios from "axios"

export default async function SubmitCrmLead (data: InquiryFormValues) {
    try {
        const crm_response = await axios.post(
            `${BASE_URL}/inquiry/v1/crm-record/opportunity`, {
                public_room_id: data.public_room_id,
                starting_price: data.starting_price,
                fullname: data.fullname,
                contactNumber: data.contactNumber,
                email: data.email,
                schedule: data.schedule,
                targetMoveIn: data.targetMoveIn,
                monthsOfStay: data.monthsOfStay,
                other: data.other
            }, {
                withCredentials: true
            });

            console.log("Submit Inquiry: ", crm_response.data);


            if (!crm_response.data.success) {
                return {
                    success: false,
                    message: crm_response.data.message,
                };
            };

            return {
                success: true,
                message: crm_response.data.message,
                data: crm_response.data,
            };

    } catch (err) {
        console.error('Something went wrong with the inquiry process: ', err);
        return;
    }
}