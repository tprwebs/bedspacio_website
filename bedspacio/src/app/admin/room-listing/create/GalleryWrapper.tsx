"use client"

import { useState } from "react";
import Remove from '@/asset/icon/delete.svg'
import UploadImage from '@/asset/icon/upload-image.svg'

const MAX_IMAGES = 6;

export default function GalleryWrapper () {

    const [imageBlob, setImageBlob] = useState<File[]>([]);
    const [imagePreview, setImagePreview] = useState<string[]>([])

    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const remainingSlots = MAX_IMAGES - imageBlob.length;
        if (remainingSlots <= 0) {
            alert("Maximum of 6 images reached");
            return;
        }

        const images = Array.from(files).slice(0, remainingSlots);

        setImageBlob(prev => [...prev, ...images]);
        const newPreviews = images.map(file => URL.createObjectURL(file));
        setImagePreview(prev => [...prev, ...newPreviews])

        e.target.value = "";
    }

    const handleDeleteImage = (index: number) => {
        setImagePreview(prev => prev.filter((_, i) => i !== index));
        setImageBlob(prev => prev.filter((_, i) => i !== index));
    }

    return (
        <div className="flex w-full h-fit">
            <div className="flex flex-col bg-[#1D242B]/10 rounded-[10px] p-[1rem] gap-[1rem] w-full">
                <div className="flex flex-col items-center justify-center w-full rounded-[10px] gap-2">
                    <label htmlFor="add_image" className={`flex items-center justify-center rounded-[10px] w-full py-[2rem] border-2 border-dashed border-[#1D242B]/25  bg-[#C7EEFF]/50 ${imagePreview.length >= 6 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#0077C0]/30 active:bg-[#C7EEFF]/50 cursor-pointer'}`}>
                        <UploadImage className="w-[40px] h-[40px] stroke-[#0077C0] opacity-75" />
                        <input
                            type="file"
                            name="image"
                            id="add_image"
                            accept="image/jpeg, image/png"
                            multiple
                            hidden
                            disabled={imagePreview.length >= 6}
                            onChange={handleImage}
                        />
                    </label>
                    <span className="text-[14px] italic">(Upload up to 6 Images)</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                        {imagePreview.map((img, index) => (
                            <div key={index} className="relative flex items-center justify-center w-full bg-[#1D242B]/25 h-[200px] rounded-[5px] overflow-hidden">
                                <button onClick={() => handleDeleteImage(index)} className="absolute top-2 right-2 cursor-pointer rounded-[10px] bg-[#FAFAFA] hover:bg-[#1D242B]/25 active:bg-[#FAFAFA] p-1">
                                    <Remove className="w-[25px] h-[25px]" />
                                </button>
                                <img src={img} alt="" className="w-full h-full object-contain" />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}