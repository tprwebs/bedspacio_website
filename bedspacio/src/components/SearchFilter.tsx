"use client"

import { useState } from 'react'
import Link from 'next/link'

import FilterIcon from '@/asset/icon/filter.svg'
import Search from '@/asset/icon/search.svg'
import ArrowDown from '@/asset/icon/arrow-down.svg'

export default function SearchFilter() {
    const regex = /^\d*\.?\d*$/;

    const [openBranch, setOpenBranch] = useState<boolean>(false);
    const [openRoomType, setOpenRoomType] = useState<boolean>(false);

    const [selectedBranch, setSelectedBranch] = useState<string>('');
    const [selectedRoomType, setSelectedRoomType] = useState<string>('');
    const [budget, setBudget] = useState<string>('')


    const branches = [{
        branch_1: 'Branch 1',
        branch_2: 'Branch 2',
        branch_3: 'Branch 3'
    }];

    const room_type = [ 'Bedspace', 'Apartment' ];


    return (
        <div className="flex items-center justify-center w-full gap-2">
            <div className="flex items-center rounded-full bg-[#FAFAFA] gap-1 p-2">
                <FilterIcon className="h-auto w-[40px] color-[#0077C0]"/>

                <div className='relative flex flex-col items-start justify-start min-w-[250px] border-l border-[#C7EEFF] pl-1'>
                    <button onClick={() => setOpenBranch(prev => !prev)} className='flex items-center justify-between text-[#1D242B] text-[18px] font-bold p-2 px-4 cursor-pointer hover:bg-[#C7EEFF] rounded-[15px] w-full'>
                        <span>{!selectedBranch ? 'Choose a branch' : selectedBranch}</span>
                        <ArrowDown className={`${openBranch && 'rotate-180'} w-[30px] h-auto transition-all duration-100`} />
                    </button>

                    {openBranch && (
                        <div className='absolute top-13 flex flex-col items-start justify-start bg-[#FAFAFA] w-full rounded-b-[10px] overflow-hidden'>
                            {branches.map((branch, index) => (
                                <div key={index} className='flex flex-col w-full'>
                                    <span onClick={() => {setSelectedBranch(branch.branch_1); setOpenBranch(false) }} className='p-3 text-[#0077C0] text-[16px] font-bold cursor-pointer hover:bg-[#C7EEFF] w-full'>{branch.branch_1}</span>
                                    <span onClick={() => {setSelectedBranch(branch.branch_2); setOpenBranch(false) }} className='p-3 text-[#0077C0] text-[16px] font-bold cursor-pointer hover:bg-[#C7EEFF] w-full'>{branch.branch_2}</span>
                                    <span onClick={() => {setSelectedBranch(branch.branch_3); setOpenBranch(false) }} className='p-3 text-[#0077C0] text-[16px] font-bold cursor-pointer hover:bg-[#C7EEFF] w-full'>{branch.branch_3}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='relative flex flex-col items-start justify-start min-w-[300px] border-l border-[#C7EEFF] pl-1'>
                    <button onClick={() => setOpenRoomType(prev => !prev)} className='flex items-center justify-between text-[#1D242B] text-[18px] font-bold p-2 px-4 cursor-pointer hover:bg-[#C7EEFF] rounded-[15px] w-full'>
                        <span>{!selectedRoomType ? 'Choose nearest branch' : selectedRoomType}</span>
                        <ArrowDown className={`${openRoomType && 'rotate-180'} w-[30px] h-auto transition-all duration-100`} />
                    </button>

                    {openRoomType && (
                        <div className='absolute top-13 flex flex-col items-start justify-start bg-[#FAFAFA] w-full rounded-b-[10px] overflow-hidden'>
                            {room_type.map((type, index) => (
                                <div key={index} className='flex flex-col w-full'>
                                    <span onClick={() => {setSelectedRoomType(type); setOpenRoomType(false) }} className='p-3 text-[#0077C0] text-[16px] font-bold cursor-pointer hover:bg-[#C7EEFF] w-full'>{type}</span>
                                    
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className='relative flex flex-col items-start justify-start min-w-[250px] border-l border-[#C7EEFF] pl-1'>
                    <input type="text" name="budget" id="budget" placeholder="Enter your Budget" value={budget} 
                    onChange={(e) => {
                        if (regex.test(e.target.value)) {
                            setBudget(e.target.value)
                        }
                    }}
                    className='text-[#1D242B] p-2 text-[18px] w-full focus:outline-none'/>
                </div>
            </div>

            <Link href="" className='flex items-center gap-2 rounded-full bg-[#0077C0] cursor-pointer hover:bg-[#1D242B] active:bg-[#0077C0] text-[#FAFAFA] h-full px-6 py-4 text-[16px] font-bold border-2 border-[#FAFAFA] transition-all duration-100'>
                <Search className="stroke-[#FAFAFA] h-[20px] w-[20px] fill-[#FAFAFA] color-[#FAFAFA]"/>
                <span className='text-[18px]'>Find a Room</span>
            </Link>
        </div>
    )
}