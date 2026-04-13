"use client"


import Add from '@/asset/icon/add.svg';

import { useState } from 'react';
import BranchCardWrapper from './BranchCardWrapper';
import CreateBranchModal from './CreateBranchModal';
import BranchViewModal from './BranchViewModal';

export default function Branch () {

    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    const [ isViewModalOpen, setIsViewModalOpen ] = useState<boolean>(false);

    return (
        <>
            <div className="flex w-full min-h-screen">
                <div className="flex flex-col w-full h-auto px-[8rem] py-[1rem] gap-[2rem]">
                    
                    <div className="flex items-center justify-between w-full">
                        <span className="text-[28px] text-[#1D242B] font-bold">Branch</span>

                        <button onClick={() => setIsModalOpen(true)} className="flex items-center justify-center rounded-[10px] bg-[#0077C0] p-2 cursor-pointer hover:bg-[#1D242B] active:bg-[#1D242B] xl:active:bg-[#0077C0] transition-all duration-100">
                            <Add className="w-[25px] h-auto stroke-[#FAFAFA]" />
                            <span className="text-[#FAFAFA] text-[16px] px-2">Create</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-5 w-full gap-2">
                        {/* Block */}
                        <BranchCardWrapper viewModal={() => setIsViewModalOpen(true)} />
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <CreateBranchModal 
                            isModalOpen={() => setIsModalOpen(false)}
                        />
                    </div>
                </div>
            )}

            {isViewModalOpen && (
                <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
                    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <BranchViewModal 
                            isModalOpen={() => setIsViewModalOpen(false)}
                        />
                    </div>
                </div>
            )}
        </>

    )
}