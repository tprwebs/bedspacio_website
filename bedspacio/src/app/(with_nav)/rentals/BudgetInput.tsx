"use client"

import { SetStateAction, useState } from "react"

type BudgetProps = {
    budget: string,
    setBudget: React.Dispatch<React.SetStateAction<string>>
}

export default function BudgetInput ({ budget, setBudget }: BudgetProps) {

    const number_regex = /^\d*\.?\d*$/;

    return (
        <div className={`relative flex flex-col items-start justify-between w-full xl:min-w-[250px] lg:min-w-[250px] lg:min-w-[250px] `}>
            <input type="text" name="budget" id="budget" placeholder="Enter your Budget" value={budget} 
            onChange={(e) => {
                if (number_regex.test(e.target.value)) {
                    setBudget(e.target.value)
                }
            }}
            className={`text-[#1D242B] p-3 rounded-[10px] text-[18px] font-bold w-full focus:outline-none ${budget ? 'border-2 border-[#1D242B] bg-[#FAFAFA]' : 'border-2 border-[#FAFAFA] text-[#1D242B] bg-[#FAFAFA]'}`}/>
        </div>
    )
}