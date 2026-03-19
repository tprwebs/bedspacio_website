import ReviewsData from '@/data/reviews.json';

import Quote from '@/asset/icon/quote.svg'
import Star from '@/asset/icon/star.svg'

export default function ReviewsMobile () {

    return (
        <div className="flex flex-col xl:items-center lg:items-center md:items-start md:overflow-x-auto  w-full px-[0.5rem] xl:px-[8rem] lg:px-[4rem] md:px-[1rem] py-4 gap-[2rem]">
            <span className="flex text-center text-[32px] md:text-[46px] font-[900] text-[#0077C0] leading-[1]">
                What Our Customers Say
            </span>

            {/* Mobile: horizontal scroll | Desktop: grid */}
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory rounded-[10px] lg:grid lg:grid-cols-4 lg:overflow-visible no-scrollbar">
                {/* Card */}
                <div className="snap-start shrink-0 w-[85%] sm:w-[420px] lg:w-auto flex flex-col items-center justify-between min-h-[320px] bg-[#FAFAFA] p-5 rounded-[10px] gap-4">
                    <div className="flex w-full items-center justify-between">
                        <Quote className="w-[28px] h-auto" />
                        <Quote className="w-[28px] h-auto -rotate-180" />
                    </div>

                    <p className="w-full px-2 leading-relaxed text-center text-[#1D242B] text-base italic">
                    One of the best accomodation I have been. Very clean space and friendly staffs. Place is also safe, near Baranggay Hall, wet market and just 5 mins away from BGC. Place is very convenient to live in specially if working near BGC.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                        <span className="font-bold text-[#1D242B] text-lg">Ayen D.</span>
                        <div className="flex items-center justify-center gap-1">
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                        </div>
                    </div>
                </div>

                {/* Duplicate the same card structure for other reviews */}
                <div className="snap-start shrink-0 w-[85%] sm:w-[420px] lg:w-auto flex flex-col items-center justify-between min-h-[320px] bg-[#FAFAFA] p-5 rounded-[10px] gap-4">
                    <div className="flex w-full items-center justify-between">
                        <Quote className="w-[28px] h-auto" />
                        <Quote className="w-[28px] h-auto -rotate-180" />
                    </div>
                    <p className="w-full px-2 leading-relaxed text-center text-[#1D242B] text-base italic">
                    Very worth it and not expensive 5 minutes walk in to market market and SM Aura especially to BGC ..every week to clean the house and all tenant is very friendly ..but one of my favorite to this bedspacio is free water and wifi...
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                        <span className="font-bold text-[#1D242B] text-lg">Ernesto P.</span>
                        <div className="flex items-center justify-center gap-1">
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                        </div>
                    </div>
                </div>

                <div className="snap-start shrink-0 w-[85%] sm:w-[420px] lg:w-auto flex flex-col items-center justify-between min-h-[320px] bg-[#FAFAFA] p-5 rounded-[10px] gap-4">
                    <div className="flex w-full items-center justify-between">
                        <Quote className="w-[28px] h-auto" />
                        <Quote className="w-[28px] h-auto -rotate-180" />
                    </div>
                    <p className="w-full px-2 leading-relaxed text-center text-[#1D242B] text-base italic">
                    The staffs are very accommodating and able to answer all of your questions or queries. The place is also near to bgc and malls which is convenient.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                        <span className="font-bold text-[#1D242B] text-lg">Ray A.</span>
                        <div className="flex items-center justify-center gap-1">
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                        </div>
                    </div>
                </div>

                <div className="snap-start shrink-0 w-[85%] sm:w-[420px] lg:w-auto flex flex-col items-center justify-between min-h-[320px] bg-[#FAFAFA] p-5 rounded-[10px] gap-4">
                    <div className="flex w-full items-center justify-between">
                        <Quote className="w-[28px] h-auto" />
                        <Quote className="w-[28px] h-auto -rotate-180" />
                    </div>
                    <p className="w-full px-2 leading-relaxed text-center text-[#1D242B] italic">
                    Very helpful and accomodating staffs. The price is reasonable and affordable. Perfect place for young professionals around metro
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2 w-full">
                        <span className="font-bold text-[#1D242B] text-lg">Eubert G.</span>
                        <div className="flex items-center justify-center gap-1">
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                            <Star className="w-[18px] h-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}