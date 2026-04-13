"use client"

import { useState } from "react";

import Remove from '@/asset/icon/delete.svg'
import GalleryViewer from "./GalleryViewer";
import InclusionSelectionWrapper from "../create/InclusionSelectionWrapper";

type PaymentTerms = {
    term: string,
    amount: number
}

export default function Room () {

    const [title, setTitle] = useState<string>('')
    const [typeSelected, setTypeSelected] = useState<string|null>(null);
    const [genderSelected, setGenderTypeSelected] = useState<string|null>(null)
    const [error, setError] = useState<string>('');
    
    const [paymentTermPair, setPaymentTermPair] = useState<PaymentTerms[]>([
        { term: "", amount: 0 }
    ])

    const handleAddPair = () => {
        const lastPair = paymentTermPair[paymentTermPair.length - 1];

        if (lastPair.term === "" || lastPair.amount === 0) {
            setError("Invalid input");
            return;
        }

        setPaymentTermPair(pair => [...pair, {term: '', amount: 0}]);
    }

    const handlePairOnChange = (index: number, field: keyof PaymentTerms, value: string) => {
        setPaymentTermPair(prev => 
            prev.map((item, i) => 
                i === index 
                    ? { ...item, [field]: field === "amount" ? Number(value) : value }
                    : item
            )
        )

        const updatedPair = paymentTermPair[index];
        const updatedTerm = field === "term" ? value : updatedPair.term;
        const updatedAmount = field === "amount" ? Number(value) : updatedPair.amount;

        if (updatedTerm !== "" && updatedAmount !== 0) {
            setError("");
        }
    };
    
    const handleDeletePair = (index: number) => {
        if (paymentTermPair.length === 1) return;
        setPaymentTermPair(pair =>  pair.filter((_, i) => i !== index));
    }


    return (
        <div className="flex w-full min-h-screen">
            <div className="flex flex-col items-start w-full px-[8rem] py-[1rem]">
                <span className="text-[28px] text-[#1D242B] font-[900]">ROOM ID</span>


                <div className="grid grid-cols-[2fr_3fr] w-full h-auto py-[1rem] gap-[1rem]">

                    <GalleryViewer />

                    <div className="flex flex-col items-center gap-4 w-full border-box">
                        <div className="flex flex-col items-start gap-1 w-full">
                            <span>Name</span>
                            <input type="text" placeholder="Enter room name here..." className="w-full p-2 border border-[#1D242B]/25 rounded-[10px] focus:outline-[#0077C0]"/>
                        </div>

                        <div className="flex flex-col items-start gap-1 w-full">
                            <span>Description</span>
                            <textarea name="description" id="room_description" rows={5} placeholder="Enter description here..." className="w-full p-2 border border-[#1D242B]/25 rounded-[10px] focus:outline-[#0077C0]"></textarea>
                        </div>

                        <div className="flex items-center w-full gap-2">
                            <div className="flex flex-col items-start gap-1 w-full whitespace-nowrap">
                                <span>Select Room Type</span>
                                <div className="flex flex-col items-center gap-1 w-full">
                                    <label htmlFor="room_bedspace" className={`p-2 px-3 font-bold border-2 rounded-[10px] w-full cursor-pointer text-[#1D242B]/75 text-center hover:opacity-80 active:bg-[#0077C0]
                                        ${typeSelected === 'bedspace' ? 'bg-[#0077C0] text-[#FAFAFA]/100 border-[#0077C0]' : 'bg-[#1D242B]/15 border-[#1D242B]/10'}`}>
                                        <span>Bedspace</span>
                                        <input type="radio" name="room_type" id="room_bedspace" value={'bedspace'} checked={typeSelected === 'bedspace'} onChange={() => setTypeSelected('bedspace')} hidden/>
                                    </label>

                                    <label htmlFor="room_apartment" className={`p-2 px-3 font-bold border-2 rounded-[10px] w-full cursor-pointer text-[#1D242B]/75 text-center hover:opacity-80 active:bg-[#0077C0]
                                        ${typeSelected === 'apartment' ? 'bg-[#0077C0] text-[#FAFAFA]/100 border-[#0077C0]' : 'bg-[#1D242B]/15 border-[#1D242B]/10'}`}>
                                        <span>Apartment</span>
                                        <input type="radio" name="room_type" id="room_apartment" value={'apartment'} checked={typeSelected === 'apartment'} onChange={() => setTypeSelected('apartment')} hidden />
                                    </label>
                                </div>  
                            </div>

                            <div className="flex flex-col items-start gap-1 w-full whitespace-nowrap">
                                <span>Select Gender</span>
                                <div className="flex flex-col items-center gap-1 w-full">
                                    <label htmlFor="gender_male" className={`p-2 px-3 font-bold border-2 rounded-[10px] w-full cursor-pointer text-[#1D242B]/75 text-center hover:opacity-80 active:bg-[#0077C0]
                                        ${genderSelected === 'male' ? 'bg-[#0077C0] text-[#FAFAFA]/100 border-[#0077C0]' : 'bg-[#1D242B]/15 border-[#1D242B]/10'}`}>
                                        <span>Male</span>
                                        <input type="radio" name="gender" id="gender_male" value={'male'} checked={genderSelected === 'male'} onChange={() => setGenderTypeSelected('male')} hidden/>
                                    </label>

                                    <label htmlFor="gender_female" className={`p-2 px-3 font-bold border-2 rounded-[10px] w-full cursor-pointer text-[#1D242B]/75 text-center hover:opacity-80 active:bg-[#0077C0]
                                        ${genderSelected === 'female' ? 'bg-[#0077C0] text-[#FAFAFA]/100 border-[#0077C0]' : 'bg-[#1D242B]/15 border-[#1D242B]/10'}`}>
                                        <span>Female</span>
                                        <input type="radio" name="gender" id="gender_female" value={'female'} checked={genderSelected === 'female'} onChange={() => setGenderTypeSelected('female')} hidden />
                                    </label>
                                </div>  
                            </div>
                        </div>

                        <div className="flex flex-col w-full items-start gap-1">
                            <span>Price</span>
                            <input type="text" placeholder="Enter starting price" className="w-full p-2 border border-[#1D242B]/50 rounded-[10px] focus:outline-[#0077C0]"/>
                        </div>

                        {typeSelected === 'apartment' && (
                            <>
                                <div className="flex flex-col w-full items-start gap-1">
                                    <span>Capacity</span>
                                    <input type="text" placeholder="Enter maximum capacity" className="w-full p-2 border border-[#1D242B]/25 rounded-[10px] focus:outline-[#0077C0]"/>
                                </div>

                                <div className="flex flex-col w-full items-start gap-1">
                                    <span>Available Slot</span>
                                    <input type="text" placeholder="Enter available slot" className="w-full p-2 border border-[#1D242B]/25 rounded-[10px] focus:outline-[#0077C0]"/>
                                </div>
                            </>
                        )}
                        

                        {typeSelected === 'bedspace' && (
                            <div className="flex flex-col items-center w-full p-[1rem] border-dashed border-2 border-[#1D242B]/25 rounded-[10px] gap-2 bg-[#C7EEFF]/50">
                                <span className="text-[14px] text-[#1D242B] font-bold">Bedspace Configuration</span>

                                <div className="flex items-center gap-4 w-full">
                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="flex items-center gap-1 w-full">
                                            <span className="whitespace-nowrap">Total Upper Decks</span>
                                            <input type="text" placeholder="Enter max number of upper decks" className="w-full p-2 border border-[#1D242B]/25 bg-[#FAFAFA] rounded-[10px] focus:outline-[#0077C0]"/>
                                        </div>

                                        <div className="flex items-center gap-1 w-full">
                                            <span className="whitespace-nowrap">Total Lower Decks</span>
                                            <input type="text" placeholder="Enter max number of lower decks" className="w-full p-2 border border-[#1D242B]/25 bg-[#FAFAFA] rounded-[10px] focus:outline-[#0077C0]"/>
                                        </div>

                                        <div className="flex items-center justify-between gap-2 w-full">
                                            <span className="whitespace-nowrap">Total Capacity</span>
                                            <span className="text-[#1D242B] text-right font-bold bg-[#0077C0]/50 p-2 rounded-[10px] w-full border border-[#0077C0]">8</span>
                                        </div>
                                        {/* Total Capacity display */}
                                    </div>

                                    <div className="flex flex-col gap-2 w-full">
                                        <div className="flex items-center gap-1 w-full">
                                            <span className="whitespace-nowrap">Available Upper Decks</span>
                                            <input type="text" placeholder="Enter available number of upper decks" className="w-full p-2 border border-[#1D242B]/25 bg-[#FAFAFA] rounded-[10px] focus:outline-[#0077C0]"/>
                                        </div>

                                        <div className="flex items-center gap-1 w-full">
                                            <span className="whitespace-nowrap">Available Lower Decks</span>
                                            <input type="text" placeholder="Enter available number of lower decks" className="w-full p-2 border border-[#1D242B]/25 bg-[#FAFAFA] rounded-[10px] focus:outline-[#0077C0]"/>
                                        </div>

                                        <div className="flex items-center justify-between gap-2 w-full">
                                            <span className="whitespace-nowrap">Total Slot</span>
                                            <span className="text-[#1D242B] text-right font-bold bg-[#0077C0]/50 p-2 rounded-[10px] w-full border border-[#0077C0]">8</span>
                                        </div>
                                        {/* Total Slot display */}
                                    </div>
                                </div>
                            </div>
                        )}


                        <div className="flex flex-col items-center w-full p-[1rem] border-dashed border-2 border-[#1D242B]/25 rounded-[10px] gap-2 bg-[#C7EEFF]/50">
                            <span className="text-[14px] text-[#1D242B] font-bold">Payment Term Configuration</span>


                            <div className="flex flex-col gap-2 w-full">

                                <div className="flex flex-col items-start w-full gap-2">
                                    {/* Value Pair block */}
                                    {paymentTermPair.map((pair, index) => (
                                        <div key={index} className="flex items-center w-full gap-2 border border-[#1D242B]/50 p-2 rounded-[10px] bg-[#FFF]">
                                            <div className="flex items-center gap-2 w-full">
                                                <span>Term</span>
                                                <input type="text" name="term" id="term_name" placeholder="Enter term" 
                                                value={pair.term} 
                                                onChange={(e) => handlePairOnChange(index, "term", e.target.value)}
                                                className={`w-full p-2 bg-[#1D242B]/10 rounded-[10px] focus:outline-[#0077C0]`} />
                                            </div>
                                            <div className="flex items-center gap-2 w-full">
                                                <span>Amount</span>
                                                <input type="text" name="term" id="term_amount" placeholder="Enter amount"  
                                                value={Number(pair.amount)}
                                                onChange={(e) => handlePairOnChange(index, "amount", e.target.value)}
                                                className={`w-full p-2 bg-[#1D242B]/10 rounded-[10px] focus:outline-[#0077C0]`} />
                                            </div>

                                            <button onClick={() => handleDeletePair(index)} className={`group cursor-pointer rounded-full  p-2 ${paymentTermPair.length === 1 ? 'opacity-25' : 'hover:bg-[#1D242B]/15 active:bg-[#FAFAFA]'}`} disabled={paymentTermPair.length === 1}>
                                                <Remove className="w-[25px] h-[25px]" />
                                            </button>
                                        </div>  
                                    ))}
                                </div>

                                {error && (
                                    <span className="text-[14px] text-[#FA0845] text-center">{error}</span>
                                )}

                                <div className="flex items-center justify-center w-full gap-1">
                                    <button onClick={handleAddPair} className="flex items-end justify-end px-[2rem] py-2 rounded-[10px] border border-[#1D242B] bg-[#1D242B] text-[#FAFAFA] cursor-pointer hover:opacity-80 active:opacity-100">+ Add</button>
                                </div>
                            </div>
                            {/* Key value pair of Term title + Amount */}
                        </div>

                        <div className="flex flex-col items-center w-full p-[1rem] border-dashed border-2 border-[#1D242B]/25 rounded-[10px] gap-2 bg-[#C7EEFF]/50">
                            <span className="text-[14px] text-[#1D242B] font-bold">Management Configuration</span>

                            {/* Selection of Property Manager and Branch */}
                            <div className="flex flex-col items-center gap-2 w-full">
                                <div className="flex items-center gap-1 w-full">
                                    <span>Branch</span>

                                    {/* Will map all branch later on */}
                                    <select name="branch" id="branch_selection" className="w-full p-2 border border-[#1D242B]/50 bg-[#FAFAFA] rounded-[10px] focus:outline-[#0077C0]">
                                        <option value="branch_1">Pembo</option>
                                        <option value="branch_2">Makati</option>
                                    </select>
                                </div>

                                <div className="flex items-center gap-1 w-full">
                                    <span className="whitespace-nowrap">Assigned Property Manager</span>

                                    {/* Will map all property managers later on */}
                                    <select name="property_manager" id="property_manager_selection" className="w-full p-2 border border-[#1D242B]/50 bg-[#FAFAFA] rounded-[10px] focus:outline-[#0077C0]">
                                        <option value="property_manager_1">PM 1</option>
                                        <option value="property_manager_2">PM 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full p-[1rem] border-dashed border-2 border-[#1D242B]/25 rounded-[10px] gap-2">
                            <span className="text-[14px] text-[#1D242B] font-bold">Inclusions</span>

                            {/* Selection of Property Manager and Branch */}
                            <div className="flex items-center gap-1 w-full">

                                {/* Change text to white and background to black if selected  */}
                                <InclusionSelectionWrapper />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full items-end justify-end gap-1">
                    <button className="flex items-center px-4 py-2 border-2 border-[#0077C0] bg-[#0077C0] text-[#FAFAFA] font-bold rounded-[10px] cursor-pointer">Save Changes</button>
                    <button className="flex items-center px-4 py-2 border-2 border-[#0077C0] text-[#0077C0] font-bold rounded-[10px] cursor-pointer">Cancel</button>
                </div>
            </div>
        </div>
    )
}