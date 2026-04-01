"use server"

import { inquiryFormValues } from "./page"

export default async function SubtmitContactInquiry (data: inquiryFormValues ) {

    /*
        > Inquiry form from contact-us
        > not a lead, only pure inquiries
    */

    const payload = {
        full_name: data.fullname,
        contact_number: data.contactnumber,
        email: data.email,
        subject: data.message,
    }
    
}