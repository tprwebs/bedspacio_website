"use client"

import Link from "next/link"
import BranchIcon from '@/asset/icon/location.svg'

interface CardWrapperProps {
    viewModal: () => void;
}


export default function BranchCardWrapper ({ viewModal }: CardWrapperProps) {

    return (
        <button onClick={viewModal} className='grid grid-rows-[4fr_1fr] h-[400px] bg-[#1D242B]/15 rounded-[10px] overflow-hidden hover:-translate-y-1 active:translate-y-1 border-b-4 border-b-[#FAFAFA] hover:border-b-[#0077C0] transition-all duration-100'>
            <div className='flex items-center justify-center w-full h-full bg-[#1D242B]/50'>
                <img src="/image/BedSpacio.png" alt="bedspacio-branch" className='w-full h-full object-cover' />
            </div>

            <div className='flex flex-col items-start gap-2 p-[1rem]'>
                <div className='flex items-center gap-1'>
                    <BranchIcon className="w-[25px] h-[25px] stroke-[#1D242B] fill-[#1D242B]" />
                    <span className='font-bold text-[20px] text-[#1D242B]'>Pembo</span>
                </div>
                <span className='text-[#1D242B]/75 text-[14px]'>Lot 1b, Block 198, Lirio st, Pembo, Taguig City</span>

                <div className='flex flex-wrap items-center justify-end gap-2 w-full'>
                    <div className='w-[25px] h-[25px] bg-[#1D242B] rounded-full overflow-hidden'>
                        <img src="/image/BedSpacio.png" alt="bedspacio-branch" />
                    </div>
                    <span className='text-[#1D242B]/75 text-[14px]'>Jennifer Sernicula</span>
                </div>
            </div>
        </button>
    )
}