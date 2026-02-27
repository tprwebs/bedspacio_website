"use client"

import Footer from "@/components/Footer"
import NavigationBar from "@/components/navigationBar"
import SearchFilter from "@/components/SearchFilter"

import Link from "next/link"

// MAKE THIS an "async" function later when fetching data

/*
    ----- THIS IS AN EXAMPLE ----- 

    export default async function ListingsPage() {
        const res = await fetch("http://localhost:5000/api/listings", {
            cache: "no-store",
        });

        const listings = await res.json();

        return (
            <div>
            {listings.map((listing: any) => (
                <Link
                key={listing.id}
                href={`/listings/${listing.id}`}
                >
                <div>{listing.name}</div>
                </Link>
            ))}
            </div>
        );
    }

    ----- THIS IS AN EXAMPLE ----- 
*/

export default function Rentals() {
    return (
        <div className="flex flex-col items-center justify-start min-h-scree w-auto">
            <NavigationBar />

            <section className="relative flex flex-col items-center justify-center w-full h-[350px] bg-[#C7EEFF] overflow-hidden">
                <img src="/asset/rentas_bg_image.jpg" alt=""  className="inset-0 w-full h-full object-cover opacity-50"/>

                <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex w-full h-full items-center justify-center px-[8rem]">
                    <SearchFilter />
                </div>
            </section>


            <section className="flex flex-col items-start justify-start w-full min-h-[800px] px-[8rem] py-[1rem]">
                <div className="flex items-center justify-start py-[0.3rem] border-b border-b-[#0077C0]/50 w-full">
                    <span className="text-[#1D242B] text-[24px] font-bold">Explore Listings</span>
                </div>

                <div className="grid grid-cols-4 w-full gap-[0.5rem] py-[2rem]">
                    <Link href="/rentals/1" className="group flex flex-col items-center bg-[#FAFAFA] rounded-[10px] p-3 gap-2 border-1 border-[#1D242B]/25 cursor-pointer hover:border-[#1D242B] hover:-translate-y-1 transition-all duration-100">
                        <div className="relative flex items-center justify-center w-full h-[300px] bg-[#C7EEFF] rounded-[5px]">
                            <div className="absolute top-2 left-2 flex items-center px-2 py-1 rounded-[5px] bg-[#1D242B] gap-1">
                                <span className="text-[12px] text-[#FAFAFA]">Bedspace</span>
                                <span className="text-[12px] text-[#FAFAFA]">|</span>
                                <span className="text-[12px] text-[#FAFAFA]">Male</span>
                            </div>

                            <span className="text-[#FAFAFA]">Item</span>
                        </div>

                        <div className="flex flex-col items-start justify-start w-full gap-2">
                            <span className="text-[20px] text-[#1D242B] font-bold leading-[1]">
                                Room Title
                            </span>

                            <div className="flex flex-col items-start">
                                <span className="text-[#0077C0] text-[16px]">Starts at</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#0077C0] text-[20px] font-[900] leading-[1]">PHP 1000.00 </span>
                                    <span className="text-[#0077C0]/40 text-[20px] font-[900] leading-[1]">/monthly</span>
                                </div>
                                <span className="text-[#1D242B] text-[16px] pt-2">Branch: Taguig</span>
                            </div>

                            <div className="flex items-center justify-start w-full gap-1">
                                <span className="bg-[#0077C0] rounded-full text-[#FAFAFA] text-[12px] px-2">Wi-Fi</span> 
                                <span className="bg-[#0077C0] rounded-full text-[#FAFAFA] text-[12px] px-2">Aircon</span>
                                <span className="bg-[#0077C0] rounded-full text-[#FAFAFA] text-[12px] px-2">Locker / Cabinet</span>
                            </div>
                        </div>
                    </Link>

                </div>
            </section>


            <Footer />
        </div>
    )
}