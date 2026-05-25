// "use server"

// import { getRooms } from "../../../../lib/room"
// import RoomPageWrapper from "./RoomPageWrapper"
// import { requireUser } from "../../../../lib/user"

// type RoomData = {
//     id: number,
//     room_uuid: number,
//     title: string,
//     branch_id: number,
//     type: string,
//     slot: number,
//     price: string,
//     branch: string
// }
// export type AllRoomType = {
//     data: RoomData[],
//     currentPage: number
//     totalPage: number,
// }

// export default async function RoomPage ({ searchParams }: { searchParams: Promise<{ page?: string }> }) {

//     const user = await requireUser();

//     const params = await searchParams;
//     const pageNumber = Number(params.page) || 1;  
//     const rooms = await getRooms(pageNumber);

//     console.log(rooms)

//     return (
//         <RoomPageWrapper 
//             rooms={rooms}
//             pageNumber={pageNumber}
//         />
//     )
// } 



"use server"

import { getRooms } from "../../../../lib/room"
import RoomPageWrapper from "./RoomPageWrapper"
import { requireUser } from "../../../../lib/user"
import { getAllBranches } from "../../../../lib/branch";

type SearchParams = {
    page?: string;
    branch?: string;
    type?: string;
    search?: string;
};

type RoomData = {
    id: number,
    room_uuid: number,
    title: string,
    branch_id: number,
    type: string,
    slot: number,
    price: string,
    branch: string
}


export type BranchesType = {
    id: number,
    branch_name: string
}

export type AllRoomType = {
    data: RoomData[],
    currentPage: number
    totalPage: number,
}

export default async function RoomPage({
    searchParams
}: {
    searchParams: Promise<SearchParams>
}) {

    const user = await requireUser();

    const branches = await getAllBranches();
    const params = await searchParams;
    const pageNumber = Number(params.page) || 1;

    const rooms = await getRooms({
        page: pageNumber,
        branch: params.branch,
        type: params.type,
        search: params.search
    });

    return (
        <RoomPageWrapper
            rooms={rooms}
            pageNumber={pageNumber}
            branch={params.branch || ""}
            type={params.type || ""}
            search={params.search || ""}
            branches={branches}
        />
    );
}