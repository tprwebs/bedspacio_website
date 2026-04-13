
import Link from 'next/link'
import Arrow from '@/asset/icon/arrow-right.svg'

export default function Login () {

    return (
        <div className="flex items-center justify-center w-full min-h-dvh overflow-hidden ">
            <div className="flex flex-col w-[500px] h-auto p-[2rem] bg-[#1D242B]/15 rounded-[10px] gap-[1rem]">
                
                <div className="flex items-center justify-between">
                    <Link href={'/'} title="Go to Home" className='hover:scale-95 active:-translate-x-1 transition-all duration-100'>
                        <Arrow className="-rotate-180 w-auto h-[35px]"/>
                    </Link>
                    <span className="text-[28px] text-[#1D242B] font-bold">Login</span>
                </div>

                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col w-full gap-1'>
                        <span className='opacity-75'>Username</span>
                        <input type="text" name="" id="" className='w-full p-2 bg-[#FAFAFA] font-bold rounded-[5px] border border-[#1D242B]/50 focus:outline-none focus:border-[#0077C0]'/>
                    </div>

                    <div className='flex flex-col w-full gap-1'>
                        <span className='opacity-75'>Password</span>
                        <input type="password" name="" id="" className='w-full p-2 bg-[#FAFAFA] font-bold rounded-[5px] border border-[#1D242B]/50 focus:outline-none focus:border-[#0077C0]'/>
                    </div>
                </form>


                <button className='w-full py-3 rounded-[10px] bg-[#1D242B] mt-[1rem] text-[#FAFAFA] font-bold cursor-pointer hover:opacity-90 active:opacity-100'>Continue</button>
            </div>
        </div>
    )
}