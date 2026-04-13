
import Add from '@/asset/icon/add.svg';
import Link from 'next/link';

export default function Dashboard () {

    return (
        <div className="flex w-full min-h-screen">
            <div className="flex flex-col w-full px-[1rem] xl:px-[8rem] lg:px-[6rem] py-[1rem] gap-[2rem]">
                <div className="flex items-center justify-between w-full">
                    <div className='flex items-center gap-[2rem]'>
                        <span className="text-[28px] text-[#1D242B] font-[900]">Room Listings</span>
                    </div>

                    <div className='flex items-center gap-[1rem]'>
                        <input type="search" name="" id="" placeholder='Search for Room ID here' className='w-[300px] border-2 border-[#1D242B]/50 rounded-[5px] p-2 focus:outline-none focus:border-[#0077C0] '/>

                        <div className='flex items-center gap-2'>
                            <span>Branch</span>
                            <select name="branch" id="branch_select" className='min-w-[150px] border-2 border-[#1D242B]/50 rounded-[5px] p-2 focus:outline-none focus:border-[#0077C0] cursor-pointer'>
                                <option hidden>Select branch</option>
                                <option value="branch_1">branch_1</option>
                                <option value="branch_2">branch_2</option>
                            </select>
                        </div>

                        <div className='flex items-center gap-2'>
                            <span>Type</span>
                            <select name="room_type" id="room_type_select" className=' min-w-[150px] border-2 border-[#1D242B]/50 rounded-[5px] p-2 focus:outline-none focus:border-[#0077C0] cursor-pointer'>
                                <option hidden>Select room type</option>
                                <option value="type_1">type_1</option>
                                <option value="type_2">type_2</option>
                            </select>
                        </div>

                        <Link href="/room-listing/create" className="flex items-center justify-center rounded-[10px] bg-[#0077C0] p-2 cursor-pointer border-2 border-[#0077C0] hover:bg-[#1D242B] hover:border-[#1D242B] active:bg-[#1D242B] xl:active:bg-[#0077C0] transition-all duration-100">
                            <Add className="w-[25px] h-auto stroke-[#FAFAFA]" />
                            <span className="text-[#FAFAFA] text-[16px] px-2">Create</span>
                        </Link>
                    </div>
                </div>


                {/* 
                    Display in a list view 
                    > Room list (room_id, title, slot, branch, gender, price)
                */}
                <div className='flex flex-col w-full items-center'>

                    {/* HEADER */}
                    <div className='grid grid-cols-[10%_30%_15%_15%_15%_15%] w-full justify-items-center border-b border-b-[#1D242B] opacity-50'>
                        <span>Room ID</span>
                        <span>Name</span>
                        <span>Branch</span>
                        <span>Type</span>
                        <span>Slot</span>
                        <span>Price</span>
                    </div>
                    
                    {/* TABLE CONTENT*/}
                    <div className='flex flex-col w-full'>
                        <Link href={`/room-listing/1`} className='grid grid-cols-[10%_30%_15%_15%_15%_15%] w-full justify-items-center py-[1rem] cursor-pointer border-b border-b-[#1D242B]/25 hover:bg-[#C7EEFF]/50 active:bg-[#FAFAFA] transition-all duration-100'>
                            <span>123456</span>
                            <span>Female Bedspace Available - Safe, Cozy, and Affordable!</span>
                            <span>Pembo</span>
                            <span className='px-2 bg-[#0077C0] rounded-full text-[#FAFAFA]'>Bedspace</span>
                            <span>1</span>
                            <span>2500</span>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    )
}