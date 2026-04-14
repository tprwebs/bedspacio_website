"use client"


import Link from 'next/link'
import Arrow from '@/asset/icon/arrow-right.svg'

import { useState } from 'react'
import { PassThrough } from 'stream';

export default function Login () {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordShow, setPasswordShow] = useState<boolean>(false)
    
    return (
        <div className="flex items-center justify-center w-full min-h-dvh overflow-hidden ">
            <div className="flex flex-col w-[500px] h-auto p-[2rem] border-2 border-[#1D242B]/25 rounded-[10px] gap-[1rem]">
                
                <div className="flex items-center justify-between">
                    <Link href={'/'} title="Go to Home" className='hover:scale-95 active:-translate-x-1 transition-all duration-100'>
                        <Arrow className="-rotate-180 w-auto h-[35px]"/>
                    </Link>
                    <span className="text-[28px] text-[#0077C0] font-bold">Login</span>
                </div>

                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col w-full gap-1'>
                        <span className='opacity-75'>Username</span>
                        <input type="text" name="account" id="username" placeholder='Enter username here' value={username} onChange={(e) => setUsername(e.target.value)} className='w-full p-2 bg-[#FAFAFA] font-bold rounded-[5px] border border-[#1D242B]/50 focus:outline-none focus:border-[#0077C0]'/>
                    </div>

                    <div className='flex flex-col w-full gap-1'>
                        <div className='flex items-center justify-between w-full'>
                            <span className='opacity-75'>Password</span>
                            
                            <label htmlFor="toggle_password" className='flex items-center gap-1'>
                                <input type="checkbox" name="toggle_password" id="toggle_password" checked={passwordShow} onChange={() => setPasswordShow(prev => !prev)}/>
                                <span className='text-[14px] text-[#0077C0]'>Show Password</span>
                            </label>
                        </div>

                        <input type={`${passwordShow ? "text" : "password"}`} placeholder='Enter password here' name="account" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className='w-full p-2 bg-[#FAFAFA] font-bold rounded-[5px] border border-[#1D242B]/50 focus:outline-none focus:border-[#0077C0]'/>
                    </div>
                </form>


                <button className='w-full py-3 rounded-[10px] bg-[#0077C0] mt-[1rem] text-[#FAFAFA] font-bold cursor-pointer hover:opacity-90 active:opacity-100'>Continue</button>
            </div>
        </div>
    )
}