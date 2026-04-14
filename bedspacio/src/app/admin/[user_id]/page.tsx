"use client"

import Manage from '@/asset/icon/settings.svg'

import { useState } from 'react'
import ManageProfileModal from './ManageProfileModal';

export default function UserProfile () {

    const [ isManageProfileModalOpen, setIsManageProfileModalOpen ] = useState<boolean>(false);

    return (
        <>
            <div className="flex w-full min-h-screen">
                <div className="flex flex-col w-full px-[8rem] py-[4rem] items-center justify-start">

                    <div className="flex flex-col w-[700px] h-auto gap-[1rem] py-[2rem] border border-[#1D242B]/25 rounded-[10px] shadow-sm">
                        <div className="flex flex-col items-center gap-[1rem]">
                            <figure className="w-[150px] h-[150px] bg-[#1D242B]/25 rounded-full">
                                <img src="" alt="profile-image" />
                            </figure>
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-[24px] text-[#1D242B] font-bold">Jennifer Sernicula</span>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-[#1D242B]/75">Property Manager</span>
                                    <span className="opacity-50">|</span>
                                    <span className="text-[#1D242B]/75">Pembo</span>
                                    <span className="opacity-50">|</span>
                                    <span className="text-[#1D242B]/75">Joined on April, 13 2026</span>
                                </div>
                            </div>


                            <button onClick={() => setIsManageProfileModalOpen(true)} className="flex items-center gap-2 bg-[#0077C0] px-4 py-3 rounded-[10px] cursor-pointer hover:bg-[#0077C0]/80 active:bg-[#0077C0] transitional-all duration-100">
                                <Manage className="w-[25px] h-[25px] fill-[#FAFAFA]" />
                                <span className="text-[#FAFAFA]">Manage Profile</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {isManageProfileModalOpen && (
                <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1D242B]/50 flex w-full h-screen items-center justify-center z-50'>
                    <div className='flex w-full h-auto items-center justify-center'>
                        <ManageProfileModal isModalOpen={() => setIsManageProfileModalOpen(false)}/>
                    </div>
                </div>
            )}
        </>
    )
}