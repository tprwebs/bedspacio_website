"use client"

import Close from '@/asset/icon/cancel.svg'
import { useState } from 'react'

interface ModalProps {
    isModalOpen: () => void
}

export default function ManageProfileModal ({ isModalOpen }: ModalProps) {

    const [ edit, setEdit ] = useState({
        name: false,
        username: false,
        password: false
    })

    const toggleEdit = (field: 'name' | 'username' | 'password') => {
        setEdit(prev => ({
            ...prev,
            [field]: !prev[field]
        }))
    }

    return (
        <div className="relative flex flex-col w-[600px] h-[auto] bg-[#FAFAFA] rounded-[10px] p-[2rem] gap-[2rem]">
            <button onClick={isModalOpen} className="absolute top-4 right-4 cursor-pointer rounded-full p-2 hover:bg-[#1D242B]/15 active:bg-[#FAFAFA]">
                <Close className="w-[15px] h-[15px]" />
            </button>

            <span className="text-[24px] text-[#1D242B] font-bold whitespace-nowrap">Manage Profile</span>

            <div className='flex flex-col w-full gap-[1rem] items-center justify-center'>
                <div className='flex items-center justify-start w-full gap-[2rem] pb-[1rem]'>
                    <figure className='w-[150px] h-[150px] bg-[#1D242B]/25 rounded-full overflow-hidden'>
                        <img src="" alt="profile-image" />
                    </figure>

                    <div className='flex flex-col gap-[1rem]'>
                        <button className='w-fit bg-[#1D242B] text-[#FAFAFA] px-3 py-2 rounded-[10px] cursor-pointer hover:bg-[#1D242B]/90 active:bg-[#1D242B]'>Change Image</button>
                        <span className='text-[14px] w-[200px] leading-tight'>(Upload a professional image because it will be displayed on the website)</span>
                    </div>
                </div>

                <div className={`flex items-center w-full gap-[1rem] border-2 ${edit.name === false ? 'border-[#1D242B]/25 ' : 'border-[#0077C0]'} rounded-[10px] p-[1rem]`}>
                    <span className='text-[#1D242B]'>Name</span>
                    <input type="text"  className='w-full font-bold focus:outline-none' disabled={edit.name === false}/> {/* CHANGE THIS LATER */}
                    {edit.name === false && (
                        <button onClick={() => toggleEdit('name')} className='text-[14px] hover:text-[#0077C0] active:text-[#1D242B] cursor-pointer'>Edit</button>
                    )}
                </div>

                <div className='group flex items-center w-full gap-[1rem] border-2 border-[#1D242B]/25 rounded-[10px] p-[1rem]'>
                    <span className='text-[#1D242B]'>Role</span>
                    <span className='w-full font-bold'>Property Manager</span> {/* CHANGE THIS LATER */}
                </div>

                <div className={`flex items-center w-full gap-[1rem] border-2 ${edit.username === false ? 'border-[#1D242B]/25 ' : 'border-[#0077C0]'} rounded-[10px] p-[1rem]`}>
                    <span className='text-[#1D242B]'>Username</span>
                    <input type="text"  className='w-full font-bold focus:outline-none' disabled={edit.username === false}/> {/* CHANGE THIS LATER */}
                    {edit.username === false && (
                        <button onClick={() => toggleEdit('username')} className='text-[14px] hover:text-[#0077C0] active:text-[#1D242B] cursor-pointer'>Edit</button>
                    )}
                </div>

                <div className={`flex items-center w-full gap-[1rem] border-2 ${edit.password === false ? 'border-[#1D242B]/25 ' : 'border-[#0077C0]'} rounded-[10px] p-[1rem]`}>
                    <span className='text-[#1D242B]'>Password</span>
                    <input type="password"  className='w-full font-bold focus:outline-none' disabled={edit.password === false}/> {/* CHANGE THIS LATER */}
                    {edit.password === false && (
                        <button onClick={() => toggleEdit('password')} className='text-[14px] hover:text-[#0077C0] active:text-[#1D242B] cursor-pointer whitespace-nowrap'>Change Password</button>
                    )}
                </div>
            </div>
            

            <div className='flex items-center justify-end gap-1'>
                <button className='p-3 bg-[#0077C0] hover:bg-[#0077C0]/90 active:bg-[#0077C0] text-[#FAFAFA] rounded-[10px] cursor-pointer'>Continue</button>
                <button onClick={isModalOpen} className='p-3 hover:bg-[#1D242B]/10 rounded-[10px] active:bg-[#FAFAFA] cursor-pointer'>Cancel</button>
            </div>
        </div>
    )
}