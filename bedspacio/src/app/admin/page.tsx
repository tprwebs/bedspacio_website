"use server"

import DashboardPageWrapper from "./(dashboard_components)/DashboardPageWrapper"
import { requireUser } from "../../../lib/user"
import { getBestRooms, getInquiryCounts, getRecentInquiries } from "../../../lib/dashboard";

export type InquiryType = {
    status: string,
    count: number
}

export type RecentInquiryType = {
    id: number,
    room_uuid: string,
    fullname: string,
    target_move_in: string,
    status: string,
    created_at: string
}

export type BestRoomType = {
    id: number,
    room_uuid: string,
    title: string,
    type: string,
    inquiry_count: number
}




export default async function Dashboard () {

    const user = await requireUser();
    const inquiries = await getInquiryCounts();
    const recent = await getRecentInquiries();
    const bestRooms = await getBestRooms('bedspace');

    return <DashboardPageWrapper 
        inquiries={inquiries}
        recentInquiries={recent}
        bestRooms={bestRooms}
    />
}   