"use client"

import Link from "next/link"

export default function NonNavigationBar () {
    return (
        <div className="grid grid-cols-3 place-items-center justify-items-center w-full h-[75px] bg-[#FAFAFA] box-border">
                <Link href="/">
                    <img src="/asset/bedspacio_logo.jpg" alt="bedspacio-logo" className="w-[70px] h-auto"/>
                </Link>
        </div>
    )
}