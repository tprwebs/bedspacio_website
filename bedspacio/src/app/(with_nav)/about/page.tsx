
import Inquire from '@/asset/icon/inquire.svg'

import Link from "next/link"

export default function About() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-auto">

            <div className="flex flex-col w-full gap-[2rem]">
                <div className="relative flex items-center justify-center w-full h-[300px] bg-[#1D242B] overflow-hidden">
                    <div className="flex items-center w-full inset-0 opacity-25">
                        <img src="/asset/Aboutus_header_bg_image.jpg" alt="" />
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                        <span className="text-[24px] text-[#FAFAFA]">About</span>
                        <span className="text-[82px] text-[#FAFAFA] font-[900] leading-[1]">BedSpacio</span>
                    </div>
                </div>

                <section className="grid grid-cols-2 w-full px-[8rem] py-[2rem] h-[500px] gap-[1rem]">
                    <div className="flex flex-col gap-[1rem] w-full items-start justify-center p-[2rem]">
                        <span className="text-[32px] text-[#1D242B] font-bold">Who are we</span>
                        <span className="text-[24px] text-[#1D242B]">
                            BedSpacio is known for it's accomodation services. BedSpacio offers comfortable bedspace and apartment rentals.
                        </span>
                    </div>

                    <div className="flex items-center justify-center bg-[#C7EEFF] rounded-[10px]">

                    </div>
                </section>

                <section className="flex flex-col w-full items-center px-[8rem] py-[2rem] gap-[2rem]">
                    <span className="text-[28px] text-[#1D242B] font-bold">History</span>
                    <span className="text-[42px] text-[#0077C0] font-bold text-center w-[1000px] leading-tight">Our journey began with helping renters find safe, affordable bedspace and grew into offering apartments designed for modern living.</span>

                    <div className="flex items-center gap-[1rem] h-[350px] w-full">
                        <div className="bg-[#C7EEFF] w-full h-full rounded-[15px]">

                        </div>

                        <div className="bg-[#C7EEFF] w-full h-full rounded-[15px]">

                        </div>

                        <div className="bg-[#C7EEFF] w-full h-full rounded-[15px]">

                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-2 w-full px-[8rem] py-[2rem] place-items-center">
                    <div className="flex flex-col items-center justify-center w-full gap-[2rem]">
                        <span className="text-[36px] text-[#1D242B] font-[900]">Our Mission</span>
                        <div className="flex items-center justify-center w-[250px] h-[250px] rounded-full bg-[#C7EEFF]">
                            {/* Image here */}
                        </div>

                        <span className="text-[24px] text-[#0077C0] text-center w-[500px]">
                            To provide safe, comfortable, and affordable bedspace and apartment rentals while making the renting experience simple, transparent, and stress-free for every tenant.
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full gap-[2rem]">
                        <span className="text-[36px] text-[#1D242B] font-[900]">Our Vision</span>
                        <div className="flex items-center justify-center w-[250px] h-[250px] rounded-full bg-[#C7EEFF]">
                            {/* Image here */}
                        </div>

                        <span className="text-[24px] text-[#0077C0] text-center w-[500px]">
                            To become a trusted rental platform where people can easily find a place that feels like home—no matter their budget or stage in life.
                        </span>
                    </div>
                </section>   

                <section className="flex flex-col items-center justify-center gap-[2rem] px-[8rem] py-[4rem]">
                    <span className="text-[36px] text-[#1D242B] font-bold">Our Property Managers</span>

                    <div className="flex items-center justify-start gap-[4rem]">
                        <div className="flex flex-col gap-[1rem] items-center justify-center">
                            <div className="w-[300px] h-[300px] rounded-full bg-[#C7EEFF]">
                                {/* Image here */}
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-[28px] text-[#0077C0] font-bold">Juan dela Cruz</span>
                                <span className="text-[20px] text-[#1D242B]">Branch Name Here</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-[1rem] items-center justify-center">
                            <div className="w-[300px] h-[300px] rounded-full bg-[#C7EEFF]">
                                {/* Image here */}
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <span className="text-[28px] text-[#0077C0] font-bold">Juan dela Cruz also</span>
                                <span className="text-[20px] text-[#1D242B]">Branch Name Here</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col justify-center items-center px-[8rem] py-[8rem] gap-[1rem]">
                    <span className="text-[48px] text-[#1D242B] font-[900] leading-[1]">Want to know more?</span>
                    <span className="text-[28px] text-[#1D242B] font-bold leading-[1]">You can always ask</span>

                    <Link href="/contact-us" className="group flex items-center gap-[1rem] px-[4rem] p-[1rem] bg-[#0077C0] rounded-full hover:scale-104 hover:bg-[#1D242B] active:scale-100 active:bg-[#0077C0] transition-all duration-100">
                        <Inquire className="group-hover:-rotate-25 fill-[#FAFAFA] w-[35px] h-auto transition-all duration-100"/>
                        <span className="text-[24px] text-[#FAFAFA] font-bold">INQUIRE HERE</span>
                    </Link>
                </section>
            </div>
        </div>
    )
}