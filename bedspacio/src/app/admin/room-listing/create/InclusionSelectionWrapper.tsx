"use client"

import { useState } from "react"

export default function InclusionSelectionWrapper () {

    const [isSelected, setIsSelected] = useState<string[]>([]);

    const handleInclusionChange = (data: string) => {
        setIsSelected(prev => {
            if (prev.includes(data)) {
                return prev.filter(item => item !== data)
            } else {
                return [...prev, data]
            }
        });
        console.log('Nigga');   
    }

    const inclusion_test = [
        {id: 1, inclusion: 'Free Wi-Fi'},
        {id: 2, inclusion: 'Aircon'}
    ]

    return (
        <div className="flex items-center gap-1 w-full">

            {/* Change text to white and background to black if selected  */}
            {inclusion_test.map(inc => (
                <label key={inc.id} htmlFor={`inc_${inc.id}`} className={`px-3 py-2 rounded-[10px] border-2  ${isSelected.includes(inc.inclusion) ? 'bg-[#1D242B] text-[#FAFAFA]' : 'border-[#1D242B] hover:bg-[#1D242B]/10 active:bg-[#FAFAFA]'} cursor-pointer `}>
                    <span className="font-bold cursor-pointer">{inc.inclusion}</span> 
                    <input type="checkbox" name="inc" id={`inc_${inc.id}`} value={inc.inclusion} checked={isSelected.includes(inc.inclusion)} onChange={() => handleInclusionChange(inc.inclusion)} hidden className="cursor-pointer"/>
                </label>
            ))}
        </div>
    )
}