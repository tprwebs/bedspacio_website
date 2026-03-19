"use client"

import Quote from '@/asset/icon/quote.svg'
import Star from '@/asset/icon/star.svg'
import ReviewData from '@/data/reviews.json';
import Arrow from '@/asset/icon/circle-arrow.svg'

import { useState, useRef } from 'react';

export default function Reviews () {

    const [currentIndex, setIndex] = useState<number>(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const [direction, setDirection] = useState<string>('');


    const canLeft = currentIndex > 0;
    const canRight = currentIndex < ReviewData.length - 1;

    const moveLeft = () => {
        if (canLeft) {
            setIndex(ind => ind === 0 ? ReviewData.length - 1 : ind - 1)
            setDirection('left')
        }
    }

    const moveRight = () => {
        if (canRight) {
            setIndex(ind => ind === ReviewData.length ? 0 : ind + 1)
            setDirection('right')
        }
    }

    console.log('Index Number: ', currentIndex);

    return (
        <section className="flex flex-col xl:items-center lg:items-center md:items-center w-full bg-[#C7EEFF] py-12 md:py-16 p-3 gap-5">
            <span className="flex text-center text-[32px] md:text-[46px] font-[900] text-[#0077C0] leading-[1]">
                What Our Customers Say
            </span>
            <div className="flex flex-col xl:items-start lg:items-start md:items-start gap-[2rem] w-full xl:w-[1450px] oveflow-x-auto overflow-hidden rounded-[10px]">

                {/* Mobile: horizontal scroll | Desktop: grid */}
                <div ref={containerRef} className={`flex flex-row items-start gap-2 pb-2 rounded-[10px] transition-all duration-300 rounded-[10px]`}
                style={{
                    transform: `translateX(-${currentIndex * 500}px)`
                }}
                >
                    <div className='flex xl:w-[450px] lg:w-[450px] sm:w-[420px]  min-h-[320px]'/>

                    {/* Center Card */}
                    {ReviewData.map((review, index) => (
                        <div key={index} className={`xl:w-[500px] lg:w-[500px] sm:w-[420px] flex flex-col items-start justify-between min-h-[320px] bg-[#FAFAFA] p-5 rounded-[10px] gap-4`}>
                            <div className="flex w-full items-center justify-between">
                                <Quote className="w-[28px] h-auto" />
                                <Quote className="w-[28px] h-auto -rotate-180" />
                            </div>

                            <p className="w-full px-2 leading-relaxed text-center text-[#1D242B] text-base italic">{review.message}</p>

                            <div className="flex flex-col items-center justify-center gap-2 w-full">
                                <span className="font-bold text-[#1D242B] text-lg">{review.name}</span>
                                <div className="flex items-center justify-center gap-1">
                                    <Star className="w-[18px] h-auto" />
                                    <Star className="w-[18px] h-auto" />
                                    <Star className="w-[18px] h-auto" />
                                    <Star className="w-[18px] h-auto" />
                                    <Star className="w-[18px] h-auto" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex w-full items-center justify-center gap-4'>
                <button onClick={() => moveLeft()} className={`${canLeft ? 'opacity-100' : 'opacity-40'} cursor-pointer active:scale-95 transition-all duration-100`}>
                    <Arrow className="w-[40px] h-[40px] -rotate-180" />
                </button>

                <button onClick={() => moveRight()} className={`${canRight ? 'opacity-100' : 'opacity-40'} cursor-pointer active:scale-95 transition-all duration-100`}>
                    <Arrow className="w-[40px] h-[40px]" />
                </button>
            </div>
        </section>
    )
}