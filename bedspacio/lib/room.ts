import { cache } from "react"
import axios from 'axios'
import { BASE_URL } from "@/config/config";

export const getRoomListings = cache(async () => {
    const response = await axios.get(`${BASE_URL}/room/listing`, { withCredentials: true })
    return response.data ?? [];
})

export const getInclusions = cache(async () => {
    const response = await axios.get(`${BASE_URL}/inclusion`, { withCredentials: true });
    return response.data ?? [];
})