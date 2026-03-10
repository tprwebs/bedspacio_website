"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Search from '@/asset/icon/search.svg'

// COMPONENT
import BranchSelection from "@/app/(with_nav)/rentals/BranchesSelection";
import RoomTypeSelection from "@/app/(with_nav)/rentals/RoomTypeSelection";
import BudgetInput from "@/app/(with_nav)/rentals/BudgetInput";

type Branches = {
    id: number,
    name: string
}

type BranchProp = {
    branchData: Branches[]
}

export default function SearchFilterClient ({ branchData }: BranchProp) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [selectedBranch, setSelectedBranch] = useState(searchParams.get("branch") || "")
    const [selectedRoomType, setSelectedRoomType] = useState(searchParams.get("room_type") || "")
    const [budget, setBudget] = useState(searchParams.get("budget") || "")

    const handleSearch = () => {
        const params = new URLSearchParams()

        if (selectedBranch) params.set("branch", selectedBranch)
        if (selectedRoomType) params.set("room_type", selectedRoomType)
        if (budget) params.set("budget", budget)

        router.push(`/rentals?${params.toString()}`)
    }

    return (
        <div className="relative flex flex-col xl:flex-row lg:flex-row md:flex-col items-center justify-center w-full gap-2">
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-col items-center rounded-[10px] xl:rounded-full lg:rounded-full w-full xl:w-auto lg:w-auto gap-1">

                <BranchSelection 
                    branchData={branchData}
                    selectedBranch={selectedBranch}
                    setSelectedBranch={setSelectedBranch}
                />
                <RoomTypeSelection 
                    selectedRoomType={selectedRoomType}
                    setSelectedRoomType={setSelectedRoomType}
                />
                <BudgetInput 
                    budget={budget}
                    setBudget={setBudget}
                />

                <button
                    type="button"
                    onClick={handleSearch}
                    className="flex items-center gap-2 w-full xl:w-auto lg:w-auto rounded-[15px] bg-[#1D242B] cursor-pointer hover:bg-[#0077C0] active:bg-[#0077C0] xl:active:bg-[#1D242B] lg:active:bg-[#1D242B] text-[#FAFAFA] h-full px-3 py-3 text-[16px] font-bold border-2 border-[#FAFAFA] transition-all duration-100"
                    >
                        <Search className="stroke-[#FAFAFA] h-[20px] w-[20px] fill-[#FAFAFA]" />
                        <span className="text-[18px] whitespace-nowrap">Find a Room</span>
                </button>
            </div>
        </div>
    )
}