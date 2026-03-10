"use client"

import { useState } from "react"

export type Inclusions = {
    id: number, 
    name: string
}

export type InclusionProps = {
    inclusionList: Inclusions[]
}



export default function InclusionSelection ({ inclusionList }: InclusionProps ) {
    const [incList, setIncList] = useState<number[]>([]);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        const checked = e.target.checked;

        setIncList((prev) => 
            checked 
                ? [...prev, value] // add selected filter 
                : prev.filter((id) => id !== value) // removes selected filter if its already inside the selected filters
        );
    }
    console.log('List of Inclusion ID: ',incList)

    return (
        <div className="flex flex-wrap items-center justify-center w-full gap-2">
            {inclusionList.map(inc => (
                <label key={inc.id} htmlFor={`inclusion_${inc.id}`} className={`flex items-center justify-center px-4 py-1 rounded-full border-2 border-[#1D242B] cursor-pointer active:bg-[#1D242B] xl:active:bg-[#FAFAFA] ${incList.includes(inc.id) ? 'bg-[#1D242B] text-[#FAFAFA]' : 'bg-[#FAFAFA] text-[#1D242B]'}`}>
                    <input type="checkbox" name="inclusion" id={`inclusion_${inc.id}`} hidden
                    value={inc.id}  onChange={handleFilterChange}/>
                    <span className="font-bold">{inc.name}</span>
                </label>
            ))}
        </div>
    )
}