"use server"

import { BASE_URL } from '@/config/config'
import { InquiryFormValues } from "./InquiryFormClient"
import axios from "axios"


export default async function SubmitInquiry (data: InquiryFormValues) {

    // TODO: SUBMIT FORMDATA TO THIS POST REQUEST ENDPOINT: /room/v1/lead-record`
    // const response = await axios.post(`${BASE_URL}/room/v1/lead-record`, data, {
    //     withCredentials: true
    // });

    const response = data;

    console.log("Submit Inquiry: ", response);
    return response;
}