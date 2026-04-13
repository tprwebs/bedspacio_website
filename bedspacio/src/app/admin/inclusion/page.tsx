"use client"

import { useState } from 'react';

import Add from '@/asset/icon/add.svg';
import InclusionItem from '@/components/admin/InclusionItem';
import CreateInclusionModal from './CreateInclusionModal';

export default function Inclusions () {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    return (
        <>
            <div className="relative flex flex-col w-full min-h-screen">
                <div className="flex flex-col w-full px-[1rem] xl:px-[8rem] lg:px-[6rem] py-[1rem] gap-[2rem]">
                    <div className="flex items-center justify-between w-full">
                        <span className="text-[28px] text-[#1D242B] font-[900]">Inclusions</span>
                        <button onClick={() => setIsModalOpen(prev => !prev)} className="flex items-center justify-center rounded-[10px] bg-[#0077C0] p-2 cursor-pointer hover:bg-[#1D242B] active:bg-[#1D242B] xl:active:bg-[#0077C0] transition-all duration-100">
                            <Add className="w-[25px] h-auto stroke-[#FAFAFA]" />
                            <span className="text-[#FAFAFA] text-[16px] px-2">Create</span>
                        </button>
                    </div>

                    <div className='flex flex-col w-full gap-1'>
                        <div className='flex items-center justify-between w-full border-b border-b-[#1D242B]/25'>
                            <span>Name</span>
                            <span>Actions</span>
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <InclusionItem />
                        </div>
                    </div>


                </div>

                {/* MODAL */}
                {isModalOpen && (
                    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                        <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <CreateInclusionModal 
                                closeModal={() => setIsModalOpen(false)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}