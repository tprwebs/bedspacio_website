"use server"

import { BASE_URL } from '@/config/config'
import { InquiryFormValues } from "./InquiryFormClient"
import axios from "axios"


export default async function SubmitInquiry (data: InquiryFormValues) {

    try {
        console.log("Submitting payload:", {
            public_room_id: data.public_room_id,
            name: data.fullname,
            email: data.email,
            contact_number: data.contactNumber,
            move_in_date: data.targetMoveIn,
            work_schedule: data.schedule,
            other: data.other
        });
        

        const response = await axios.post(
            `${BASE_URL}/room/v1/${data.public_room_id}/inquiries`, 
            {
                public_room_id: data.public_room_id,
                starting_price: data.starting_price,
                full_name: data.fullname,
                contact_number: data.contactNumber,
                email: data.email,
                work_schedule: data.schedule,
                target_move_in: data.targetMoveIn,
                months_of_stay: data.monthsOfStay,
                other: data.other || "",
            }, 
            {
                withCredentials: true
            }
        );
    
        console.log("Submit Inquiry: ", response.data);

        

        if (!response.data.success) {
            return {
                success: false,
                message: response.data.message,
            };
        };

        return {
            success: true,
            message: response.data.message,
            data: response.data,
        };

    } catch (err) {
        console.error('Something went wrong with the inquiry process: ', err);
        return;
    }
}