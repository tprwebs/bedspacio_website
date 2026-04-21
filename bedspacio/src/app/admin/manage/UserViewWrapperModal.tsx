"use client"

import { useState } from "react"
import Back from '@/asset/icon/arrow-right.svg';

export type UserInfo = {
    fullname: string,
    role: string, 
    username: string,
    contact_number: string,
    email: string,
    is_active: boolean,
}

interface ModalProp {
    isModalOpen: () => void;
    user: UserInfo;
}

export default function UserViewWrapperModal ({ isModalOpen, user }: ModalProp) {

    const [roleSelected, setRoleSelected] = useState<string>('property_manager');

    const [userInfo, setUserInfo] = useState({
        name: user?.fullname,
        username: user?.username,
        contact_number: user?.contact_number,
        email: user?.email,
        role: user?.role,
        is_active: user?.is_active 
    });

    const [userEditing, setUserEditing] = useState({
        name: false,
        username: false,
        contact_number: false, 
        email: false,
        role: false
    });

    const toggleEditUser = (field: keyof typeof userEditing ) => {
        setUserEditing(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    }

    return (
        <div className="relative flex flex-col w-[700px] h-auto p-[2rem] bg-[#FAFAFA] rounded-[10px] gap-[2rem]">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 ">
                    <button onClick={isModalOpen} className="p-1 rounded-full hover:bg-[#1D242B]/25 active:bg-[#FAFAFA] cursor-pointer">
                        <Back className="-rotate-180 w-auto h-[25px] fill-[#1D242B]"/>
                    </button>
                    <span className="text-[#1D242B] text-[24px] font-bold leading-tight">User Info</span>
                </div>
                
                {/* <div className="flex items-center gap-1">
                    <span className="text-[#1D242B] text-[14px] font-bold">Account Status</span>
                    <div className="flex items-center rounded-full p-1 bg-[#1D242B] overflow-hidden">
                        <label htmlFor="active" 
                            className={`px-2 rounded-full cursor-pointer 
                                ${userInfo.is_active === true 
                                ?  "bg-[#007C00] text-[#FAFAFA] font-bold" 
                                : "text-[#FAFAFA] font-bold"
                                }`
                            }>
                            <span className="text-[12px] leading-[1]">Active</span>
                            <input type="radio" name="status" id="active" hidden checked={userInfo.is_active === true} 
                                onChange={() => 
                                    setUserInfo(prev =>({
                                        ...prev,
                                        is_active: true
                                    }))
                                } 
                            />
                        </label>
                        <label htmlFor="inactive" 
                            className={`px-2 rounded-full cursor-pointer 
                                ${userInfo.is_active === false 
                                    ? "bg-[#7C7C7C] text-[#FAFAFA] font-bold" 
                                    : "text-[#FAFAFA] font-bold"
                                }`
                            }>
                            <span className="text-[12px] leading-[1]">Inactive</span>
                            <input type="radio" name="status" id="inactive" hidden checked={userInfo.is_active === false} 
                                onChange={() => 
                                    setUserInfo(prev => ({
                                        ...prev,
                                        is_active: false
                                    }))
                                }
                            />
                        </label>
                    </div>
                </div> */}

                <div className="flex items-center gap-1">
                    <span className="text-[#1D242B] text-[14px] font-bold">
                        Account Status
                    </span>

                    <div className="flex items-center rounded-full p-1 bg-[#1D242B] overflow-hidden">

                        {/* ACTIVE */}
                        <button
                            type="button"
                            onClick={() =>
                                setUserInfo(prev => ({
                                    ...prev,
                                    is_active: true
                                }))
                            }
                            className={`px-2 rounded-full cursor-pointer ${
                                userInfo.is_active === true
                                    ? "bg-[#007C00] text-[#FAFAFA] font-bold"
                                    : "text-[#FAFAFA] font-bold"
                            }`}
                        >
                            <span className="text-[12px] leading-[1]">Active</span>
                        </button>

                        {/* INACTIVE */}
                        <button
                            type="button"
                            onClick={() =>
                                setUserInfo(prev => ({
                                    ...prev,
                                    is_active: false
                                }))
                            }
                            className={`px-2 rounded-full cursor-pointer ${
                                userInfo.is_active === false
                                    ? "bg-[#7C7C7C] text-[#FAFAFA] font-bold"
                                    : "text-[#FAFAFA] font-bold"
                            }`}
                        >
                            <span className="text-[12px] leading-[1]">Inactive</span>
                        </button>

                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full gap-[1rem] pb-[1rem]">
                <figure className="w-[150px] h-[150px] rounded-full bg-[#1D242B]/25">
                    <img src="" alt="user-image" />
                </figure>

                <div className={`flex items-center w-full p-[1rem] border-2 ${userEditing.name ? 'border-[#0077C0]' : 'border-[#1D242B]/25' } gap-2 rounded-[10px]`}>
                    <span className="text-[#1D242B]/75">Name</span>
                    
                    {userEditing.name ? (
                        <div className="flex items-center justify-center w-full"> 
                            <input type="text" placeholder="Enter name here" value={userInfo.name || ''}
                                onChange={(e) => 
                                    setUserInfo(prev => ({
                                        ...prev,
                                        name: e.target.value
                                    }))
                                }
                                className="w-full text-[#1D242B] font-bold focus:outline-none"
                            />
                            <button onClick={() => toggleEditUser('name')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Cancel</button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-full">
                            <span className="w-full text-[#1D242B] font-bold">{userInfo?.name}</span>
                            <button onClick={() => toggleEditUser('name')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Edit</button>
                        </div>
                    )}
                </div>

                <div className={`flex items-center w-full p-[1rem] border-2 ${userEditing.username ? 'border-[#0077C0]' : 'border-[#1D242B]/25' } gap-2 rounded-[10px]`}>
                    <span className="text-[#1D242B]/75">Username</span>

                    {userEditing.username ? (
                        <div className="flex items-center justify-center w-full">
                            <input type="text" placeholder="Enter username here" value={userInfo.username || ''}
                                onChange={(e) => 
                                    setUserInfo(prev => ({
                                        ...prev,
                                        username: e.target.value
                                    }))
                                }
                                className="w-full text-[#1D242B] font-bold focus:outline-none"
                            />
                            <button onClick={() => toggleEditUser('username')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Cancel</button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-full">
                            <span className="w-full text-[#1D242B] font-bold">{userInfo.username}</span>
                            <button onClick={() => toggleEditUser('username')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Edit</button>
                        </div>
                    )}
                </div>

                <div className={`flex items-center w-full p-[1rem] border-2 ${userEditing.contact_number ? 'border-[#0077C0]' : 'border-[#1D242B]/25' } gap-2 rounded-[10px]`}>
                    <span className="text-[#1D242B]/75 whitespace-nowrap">Contact #</span>
                    

                    {userEditing.contact_number ? (
                        <div className="flex items-center justify-center w-full">
                            <input type="text" placeholder="Enter contact number here" value={userInfo.contact_number || ''}
                                onChange={(e) => 
                                    setUserInfo(prev => ({
                                        ...prev,
                                        contact_number: e.target.value
                                    }))
                                }
                                className="w-full text-[#1D242B] font-bold focus:outline-none"
                            />
                            <button onClick={() => toggleEditUser('contact_number')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Cancel</button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-full">
                            <span className="w-full text-[#1D242B] font-bold">{userInfo.contact_number}</span>
                            <button onClick={() => toggleEditUser('contact_number')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Edit</button>
                        </div>
                    )}
                </div>

                <div className={`flex items-center w-full p-[1rem] border-2 ${userEditing.email ? 'border-[#0077C0]' : 'border-[#1D242B]/25' } gap-2 rounded-[10px]`}>
                    <span className="text-[#1D242B]/75">Email</span>
                    

                    {userEditing.email ? (
                        <div className="flex items-center justify-center w-full">
                            <input type="text" placeholder="Enter email here" value={userInfo.email || ''}
                                onChange={(e) => 
                                    setUserInfo(prev => ({
                                        ...prev,
                                        email: e.target.value
                                    }))
                                }
                                className="w-full text-[#1D242B] font-bold focus:outline-none"
                            />
                            <button onClick={() => toggleEditUser('email')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Cancel</button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-full">
                            <span className="w-full text-[#1D242B] font-bold">{userInfo.email}</span>
                            <button onClick={() => toggleEditUser('email')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Edit</button>
                        </div>
                    )}
                </div>


                {/* TODO: change appearance when one is selected */}
                <div className={`grid grid-cols-[1fr_4fr] place-items-center justify-items-start w-full gap-2  rounded-[10px] ${userEditing.role ? "px-[1rem] py-[0.5rem]" : "p-[1rem]"}  border-2 border-[#1D242B]/25 rounded-[10px]`}>
                    <span className="text-[#1D242B]">{userEditing.role ? 'Assign a Role' : 'Role Assigned'}</span>
                    {/* <input type="text" placeholder="Name" className="w-full text-[#1D242B] focus:outline-none"/> */}

                    {userEditing.role ? (
                        <div className="flex items-center w-full gap-2">
                            <label htmlFor="property_manager" className={`text-center w-full p-2 rounded-[10px] border cursor-pointer ${roleSelected === 'property_manager' ? "bg-[#1D242B] text-[#FAFAFA]" : "border-[#1D242B]/50 text-[#1D242B] hover:bg-[#1D242B]/15 active:bg-[#FAFAFA]"}`}>
                                <span>Property Manager</span>
                                <input type="radio" name="role" id="property_manager" hidden value={'property_manager'} checked={roleSelected === 'property_manager'} onChange={() => setRoleSelected('property_manager')}/>
                            </label>
                            <label htmlFor="admin" className={`text-center w-full p-2 rounded-[10px] cursor-pointer border ${roleSelected === 'admin' ? "bg-[#1D242B] text-[#FAFAFA]" : "hover:bg-[#1D242B]/15 active:bg-[#FAFAFA] border-[#1D242B]/50 text-[#1D242B]"}`}>
                                <span>Admin</span>
                                <input type="radio" name="role" id="admin" hidden value={'admin'} checked={roleSelected === 'admin'} onChange={() => setRoleSelected('admin')}/>
                            </label>

                            <button onClick={() => toggleEditUser('role')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Cancel</button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between w-full">
                            <span className="text-[#1D242B] font-bold">{userInfo.role}</span>
                            <button onClick={() => toggleEditUser('role')} className="text-[#0077C0] text-[14px] font-bold cursor-pointer active:text-[#0077C0]/50">Edit</button>
                        </div>
                    )}

                </div>

                {/* <div className="flex items-center w-full p-[1rem] border-2 border-[#1D242B]/25 gap-2 rounded-[10px]">
                    <span className="text-[#1D242B]">Password</span>
                    <div className="flex items-center justify-between w-full">
                        <input type="password" name="password" id="user_password" value={'far_sd156s'} className="focus:outline-none"/>
                        <button className="text-[#0077C0] text-[14px] hover:text-[#0077C0]/90 cursor-pointer">Generate Password</button>
                    </div>
                </div> */}

            </div>

            {(userEditing.name || userEditing.username || userEditing.contact_number || userEditing.email || userEditing.role) && (
                <div className="flex items-center w-full gap-2">
                    <button className="py-[1rem] text-[#FAFAFA] font-bold bg-[#0077C0] hover:bg-[#0077C0]/80 active:bg-[#0077C0] cursor-pointer rounded-[10px] w-full">Update</button>
                    <button onClick={isModalOpen} className="py-[1rem] text-[#1D242B] font-bold bg-[#1D242B]/15 hover:bg-[#1D242B]/30 active:bg-[#1D242B]/15 cursor-pointer rounded-[10px] w-full">Cancel</button>
                </div>
            )}
        </div>
    )
}