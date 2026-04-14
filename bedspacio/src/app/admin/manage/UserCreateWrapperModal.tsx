"use client"

import { useState } from "react"


interface ModalProp {
    isModalOpen: () => void;
}

export default function UserCreateWrapperModal ({ isModalOpen }: ModalProp) {

    const [isActive, setIsActive] = useState<string>('active');
    const [roleSelected, setRoleSelected] = useState<string>('property_manager');

    return (
        <div className="relative flex flex-col w-[700px] h-auto p-[2rem] bg-[#FAFAFA] rounded-[10px] gap-[2rem]">
            <div className="flex items-center justify-between w-full">
                <span className="text-[#1D242B] text-[24px] font-bold leading-tight">Create New User</span>
                
                <div className="flex items-center gap-1">
                    <span className="text-[#1D242B] text-[14px] font-bold">Account Status</span>
                    <div className="flex items-center rounded-full p-1 bg-[#1D242B] overflow-hidden">
                        <label htmlFor="active" className={`px-2 rounded-full cursor-pointer ${isActive === 'active'? "bg-[#007C00] text-[#FAFAFA] font-bold" : "text-[#FAFAFA] font-bold"}`}>
                            <span className="text-[12px] leading-[1]">Active</span>
                            <input type="radio" name="status" id="active" value={'active'} onChange={() => setIsActive('active')} hidden/>
                        </label>
                        <label htmlFor="inactive" className={`px-2 rounded-full cursor-pointer ${isActive === 'inactive'? "bg-[#7C7C7C] text-[#FAFAFA] font-bold" : "text-[#FAFAFA] font-bold"}`}>
                            <span className="text-[12px] leading-[1]">Inactive</span>
                            <input type="radio" name="status" id="inactive" value={'inactive'} onChange={() => setIsActive('inactive')} hidden/>
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-[1rem]">
                <figure className="w-[150px] h-[150px] rounded-full bg-[#1D242B]/25">
                    <img src="" alt="user-image" />
                </figure>

                <div className="flex items-center w-full p-[1rem] border-2 border-[#1D242B]/25 gap-2 rounded-[10px] focus-within:border-[#0077C0]">
                    <span className="text-[#1D242B]">Name</span>
                    <input type="text" placeholder="Enter name here" className="w-full text-[#1D242B] font-bold focus:outline-none"/>
                </div>

                <div className="flex items-center w-full p-[1rem] border-2 border-[#1D242B]/25 gap-2 rounded-[10px] focus-within:border-[#0077C0]">
                    <span className="text-[#1D242B]">Username</span>
                    <input type="text" placeholder="Enter username here" className="w-full text-[#1D242B] font-bold focus:outline-none"/>
                </div>

                <div className="flex items-center w-full p-[1rem] border-2 border-[#1D242B]/25 gap-2 rounded-[10px] focus-within:border-[#0077C0]">
                    <span className="text-[#1D242B] whitespace-nowrap">Contact #</span>
                    <input type="text" placeholder="Enter contact number here" className="w-full text-[#1D242B] font-bold focus:outline-none"/>
                </div>

                <div className="flex items-center w-full p-[1rem] border-2 border-[#1D242B]/25 gap-2 rounded-[10px] focus-within:border-[#0077C0]">
                    <span className="text-[#1D242B]">Email</span>
                    <input type="text" placeholder="Enter email here" className="w-full text-[#1D242B] font-bold focus:outline-none"/>
                </div>


                {/* TODO: change appearance when one is selected */}
                <div className="grid grid-cols-[1fr_4fr] place-items-center justify-items-start w-full gap-2 px-[1rem] py-[0.5rem] border-2 border-[#1D242B]/25 rounded-[10px]">
                    <span className="text-[#1D242B]">Assign a Role</span>
                    {/* <input type="text" placeholder="Name" className="w-full text-[#1D242B] focus:outline-none"/> */}
                    <div className="flex items-center w-full gap-2">
                        <label htmlFor="property_manager" className={`text-center w-full p-2 rounded-[10px] border cursor-pointer ${roleSelected === 'property_manager' ? "bg-[#1D242B] text-[#FAFAFA]" : "border-[#1D242B]/50 text-[#1D242B] hover:bg-[#1D242B]/15 active:bg-[#FAFAFA]"}`}>
                            <span>Property Manager</span>
                            <input type="radio" name="role" id="property_manager" hidden value={'property_manager'} checked={roleSelected === 'property_manager'} onChange={() => setRoleSelected('property_manager')}/>
                        </label>
                        <label htmlFor="admin" className={`text-center w-full p-2 rounded-[10px] cursor-pointer border ${roleSelected === 'admin' ? "bg-[#1D242B] text-[#FAFAFA]" : "hover:bg-[#1D242B]/15 active:bg-[#FAFAFA] border-[#1D242B]/50 text-[#1D242B]"}`}>
                            <span>Admin</span>
                            <input type="radio" name="role" id="admin" hidden value={'admin'} checked={roleSelected === 'admin'} onChange={() => setRoleSelected('admin')}/>
                        </label>
                    </div>
                </div>

                <div className="flex items-center w-full p-[1rem] border-2 border-[#1D242B]/25 gap-2 rounded-[10px]">
                    <span className="text-[#1D242B]">Password</span>
                    <div className="flex items-center justify-between w-full">
                        <input type="password" name="password" id="user_password" value={'far_sd156s'} className="focus:outline-none"/>
                        <button className="text-[#0077C0] text-[14px] hover:text-[#0077C0]/90 cursor-pointer">Generate Password</button>
                    </div>
                </div>

            </div>

            <div className="flex items-center w-full gap-2">
                <button className="py-[1rem] text-[#FAFAFA] font-bold bg-[#0077C0] hover:bg-[#0077C0]/80 active:bg-[#0077C0] cursor-pointer rounded-[10px] w-full">Create</button>
                <button onClick={isModalOpen} className="py-[1rem] text-[#1D242B] font-bold bg-[#1D242B]/15 hover:bg-[#1D242B]/30 active:bg-[#1D242B]/15 cursor-pointer rounded-[10px] w-full">Cancel</button>
            </div>
        </div>
    )
}