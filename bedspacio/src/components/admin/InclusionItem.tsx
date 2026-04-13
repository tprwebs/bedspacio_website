"use client"

import { useState } from 'react';

import Edit from '@/asset/icon/edit.svg';
import Delete from '@/asset/icon/delete.svg'
import Save from '@/asset/icon/save.svg'
import Cancel from '@/asset/icon/cancel.svg'

export default function InclusionItem () {

    const [name, setName] = useState<string>('');
    const [renameVisible, setRenameVisible] = useState<boolean>(false);

    const handleSave = async () => {
        // Save changes after renaming inclusion name
    }

    const handleDelete = async () => {
        // Delete inclusion, super straight-forward
    }

    return (
        <div className='group flex items-center justify-between w-full p-2 bg-[#C7EEFF] rounded-[5px] px-[1rem] gap-4'>
            <div className='flex items-center gap-2 w-full'>
                {renameVisible ? (
                    <input type="text" className='border border-[#1D242B]/25 p-1 bg-[#FAFAFA] font-bold rounded-[5px] focus:outline-none focus:border-[#1D242B] w-full'/> 
                ) : (
                    <span className='text-[#1D242B] font-bold'>Free Wi-Fi</span>
                )}
            </div>

            <div className='invisible opacity-0 group-hover:opacity-100 group-hover:visible flex items-center gap-1'>
                {!renameVisible ? (
                    <div className='flex items-center gap-1'>
                        <button onClick={() => setRenameVisible(true)} className='flex items-center justify-center cursor-pointer size-9 rounded-[15px] hover:bg-[#0077C0]/50 active:bg-[#C7EEFF]' title="Rename">
                            <Edit className="w-[22px] h-[22px]" />
                        </button>

                        <button className='flex items-center justify-center cursor-pointer size-9 rounded-[15px] hover:bg-[#0077C0]/50 active:bg-[#C7EEFF]' title="Delete">
                            <Delete className="w-[22px] h-[22px]" />
                        </button>
                    </div>
                ) : (
                    <div className='flex items-center gap-1'>
                        <button className='flex items-center justify-center cursor-pointer size-9 rounded-[15px] hover:bg-[#0077C0]/50 active:bg-[#C7EEFF]' title="Save changes">
                            <Save className="w-[22px] h-[22px]" />
                        </button>

                        <button onClick={() => setRenameVisible(false)} className='flex items-center justify-center cursor-pointer size-9 rounded-[15px] hover:bg-[#0077C0]/50 active:bg-[#C7EEFF]' title="Cancel rename">
                            <Cancel className="w-[15px] h-[15px]" />
                        </button>
                    </div>
                )}
            </div>
        </div> 
    )
}