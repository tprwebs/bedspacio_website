"use client"

import SearchFilter from '@/components/SearchFilter'
import FrequentlyAskedQuestions from '@/components/FrequentlyAskedQuestion'
import HomeInquiry from '@/components/HomeInquiry'

import ArrowRight from '@/asset/icon/arrow-right.svg'
import Quote from '@/asset/icon/quote.svg'
import Star from '@/asset/icon/star.svg'

import Link from 'next/link'

export default function Home() {
    

    return (
        <div className="flex flex-col min-h-screen items-center justify-start w-full">
            

            <section className="flex flex-col w-full items-start justify-start h-[800px] bg-[url(/image/bedspaco-hero-x-large-example.jpg)] bg-cover">
                <div className="flex flex-col items-center justify-center w-full h-full gap-[5rem]">
                    <div className="flex flex-col items-center justify-center">
                        <span className="text-[#0077C0] text-[84px] font-[900] leading-[0.75]">Where Every Bed</span>
                        <span className="text-[#0077C0] text-[84px] font-[900] leading-tight">Feels Like Home</span>

                        <span className="text-[#1D242B] text-[24px] font-bold">Made for students, workers, and everyday city living.</span>
                    </div>

                    <SearchFilter />
                </div>
            </section>

            <section className='flex w-full h-[800px] bg-[#FAFAFA] items-center justify-center'>
                <div className='w-auto h-auto rounded-[10px] overflow-hidden'>
                    <iframe width="1082" height="609" src="https://www.youtube.com/embed/tTx9-kGmGUI" title="Male Capsule Room for rent!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>  

            <section className='flex flex-col w-full min-h-[800px] bg-[#C7EEFF] items-center justify-start px-[8rem] py-[6rem] gap-[6rem]'>
                <div className='flex flex-col items-center justify-center gap-[2rem]'>
                    <span className='text-[42px] font-[900] text-[#1D242B] leading-[0.5]'>Our Branches</span>

                    <div className='flex items-center justify-center gap-[1rem]'>
                        <Link href={""} className='flex items-end justify-start h-[400px] w-[400px] bg-[#FAFAFA] rounded-[10px] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1'>
                            <div className='flex items-center justify-between w-full gap-2 p-3 px-4 cursor-pointer transition-all duration-100'>
                                <div className='flex flex-col items-start gap-1'>
                                    <span className='font-bold text-[20px] leading-[1] text-[#0077C0]'>Branch Name</span>
                                    <span className='text-[16px] leading-[1] text-[#0077C0]'>Branch Name</span>
                                </div>
                            </div>
                        </Link>

                        <Link href={""} className='flex items-end justify-start h-[400px] w-[400px] bg-[#FAFAFA] rounded-[10px] transition-transform duration-200 hover:-translate-y-1 active:translate-y-1'>
                            <div className='flex items-center justify-between w-full gap-2 p-3 px-4 cursor-pointer transition-all duration-100'>
                                <div className='flex flex-col items-start gap-1'>
                                    <span className='font-bold text-[20px] leading-[1] text-[#0077C0]'>Branch Name</span>
                                    <span className='text-[16px] leading-[1] text-[#0077C0]'>Branch Name</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center gap-[2rem]'>
                    <span className='text-[42px] font-[900] text-[#1D242B] leading-[0.5]'>Explore Room Types</span>

                    <div className='flex items-center justify-center gap-[1rem]'>
                        <div className='group relative flex items-center justify-center w-[600px] h-[337.5px] bg-[#1D242B] rounded-[10px] overflow-hidden'>
                            <img src="/asset/bedspace_example.jpg" alt="bedspace" className='absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-all duration-200'/>
                            <Link href="" className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#FAFAFA] rounded-full p-2 px-4 hover:bg-[#C7EEFF] active:bg-[#0077C0] transition-all duration-100 border-2 border-[#1D242B]'>
                                <span className='text-[#1D242B] text-[18px] font-bold'>BedSpace</span>
                                <ArrowRight className="w-[25px] h-auto stroke-[#1D242B]"/>
                            </Link>

                        </div>

                        <div className='group relative flex items-center justify-center w-[600px] h-[337.5px] bg-[#1D242B] rounded-[10px] overflow-hidden'>
                            <img src="/asset/apartment_example.jpg" alt="bedspace" className='absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-all duration-200'/>
                            <Link href="" className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#FAFAFA] rounded-full p-2 px-4 hover:bg-[#C7EEFF] active:bg-[#0077C0] transition-all duration-100 border-2 border-[#1D242B]'>
                                <span className='text-[#1D242B] text-[18px] font-bold'>Apartment</span>
                                <ArrowRight className="w-[25px] h-auto stroke-[#1D242B]"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section className='grid grid-cols-2 px-[8rem] w-full min-h-[800px] bg-[#FAFAFA] px-[8rem] py-[6rem] gap-[1rem]'>
                <div className='grid grid-rows-2 w-full gap-2'>
                    <div className='flex items-center justify-center h-[325px] bg-[#C7EEFF] rounded-[15px] overflow-hidden'>
                        <img src="/asset/why_choose_us_1.jpg" alt="" className='w-full h-full object-cover'/>
                    </div>

                    <div className='grid grid-cols-2 w-full gap-2'>
                        <div className='flex items-center justify-center h-[325px] w-full bg-[#C7EEFF] rounded-[15px] overflow-hidden'>
                            <img src="/asset/why_choose_us_2.jpg" alt="" className='w-full h-full object-cover'/>
                        </div>
                        <div className='flex items-center justify-center h-[325px] w-full bg-[#C7EEFF] rounded-[15px] overflow-hidden'>
                            <img src="/asset/why_choose_us_3.jpg" alt="" className='w-full h-full object-cover'/>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col w-full items-start justify-end p-[2rem] gap-[4rem]'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-[48px] text-[#1D242B] font-[900]'>WHY CHOOSE US</span>

                        <span className='text-[20px] text-[#0077C0] leading-[1.2] font-bold'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </span>
                    </div>

                    <div className='flex flex-col items-center gap-[2rem] w-[600px]'>
                        <div className='flex items-center gap-[2rem] w-full'>
                            <div className="flex items-center justify-center min-w-[90px] min-h-[90px] rounded-full bg-[#0077C0]">
                                Icon
                            </div>
                            <div className='flex flex-col items-start justify-start'>
                                <span className='text-[36px] text-[#1D242B] font-[900]'>Bullet</span>
                                <span className='text-[18px] text-[#0077C0]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                            </div>
                        </div>

                        <div className='flex items-center gap-[2rem]'>
                            <div className="flex items-center justify-center min-w-[90px] min-h-[90px] rounded-full bg-[#0077C0]">
                                Icon
                            </div>
                            <div className='flex flex-col items-start justify-start'>
                                <span className='text-[36px] text-[#1D242B] font-[900]'>Bullet</span>
                                <span className='text-[18px] text-[#0077C0]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                            </div>
                        </div>

                        <div className='flex items-center gap-[2rem]'>
                            <div className="flex items-center justify-center min-w-[90px] min-h-[90px] rounded-full bg-[#0077C0]">
                                Icon
                            </div>
                            <div className='flex flex-col items-start justify-start'>
                                <span className='text-[36px] text-[#1D242B] font-[900]'>Bullet</span>
                                <span className='text-[18px] text-[#0077C0]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='flex flex-col w-full h-[700px] bg-[#0077C0] items-center justify-center gap-[3rem]'>
                <span className='text-[48px] font-[900] text-[#FAFAFA]'>What our customers say</span>

                <div className='grid grid-cols-4 px-[8rem] w-full h-auto gap-2'>
                    <div className='flex flex-col items-center justify-between w-full min-h-[300px] bg-[#FAFAFA] p-4 rounded-[10px] gap-4'>
                        <div className='flex w-full items-center justify-between'>
                            <Quote className="w-[35px] h-auto"/>
                            <Quote className="w-[35px] h-auto -rotate-180"/>
                        </div>

                        <span className='flex w-full px-4 leading-tight text-center text-[#1D242B] text-[18px] italic'>
                            One of the best accomodation I have been. Very clean space and friendly staffs. Place is also safe, near Baranggay Hall, wet market and just 5 mins away from BGC. Place is very convenient to live in specially if working near BGC.
                        </span>

                        <div className='flex flex-col items-center justify-center gap-2 w-full'>
                            <span className='font-bold text-[#1D242B] text-[20px]'>Ayen D.</span>
                            <div className='flex items-center justify-center gap-1'>
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                            </div>
                        </div>
                    </div>
                    
                    <div className='flex flex-col items-center justify-between w-full min-h-[300px] bg-[#FAFAFA] p-4 rounded-[10px] gap-4'>
                        <div className='flex w-full items-center justify-between'>
                            <Quote className="w-[35px] h-auto"/>
                            <Quote className="w-[35px] h-auto -rotate-180"/>
                        </div>

                        <span className='flex w-full px-4 leading-tight text-center text-[#1D242B] text-[18px] italic'>
                            Very worth it and not expensive 5 minutes walk in to market market and SM Aura especially to BGC ..every week to clean the house and all tenant is very friendly ..but one of my favorite to this bedspacio is free water and wifi...
                        </span>

                        <div className='flex flex-col items-center justify-center gap-2 w-full'>
                            <span className='font-bold text-[#1D242B] text-[20px]'>Ernesto P.</span>
                            <div className='flex items-center justify-center gap-1'>
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-between w-full min-h-[300px] bg-[#FAFAFA] p-4 rounded-[10px] gap-4'>
                        <div className='flex w-full items-center justify-between'>
                            <Quote className="w-[35px] h-auto"/>
                            <Quote className="w-[35px] h-auto -rotate-180"/>
                        </div>

                        <span className='flex w-full px-4 leading-tight text-center text-[#1D242B] text-[18px] italic'>
                            The staffs are very accommodating and able to answer all of your questions or queries. The place is also near to bgc and malls which is convenient.
                        </span>

                        <div className='flex flex-col items-center justify-center gap-2 w-full'>
                            <span className='font-bold text-[#1D242B] text-[20px]'>Ray A.</span>
                            <div className='flex items-center justify-center gap-1'>
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-between w-full min-h-[300px] bg-[#FAFAFA] p-4 rounded-[10px] gap-4'>
                        <div className='flex w-full items-center justify-between'>
                            <Quote className="w-[35px] h-auto"/>
                            <Quote className="w-[35px] h-auto -rotate-180"/>
                        </div>

                        <span className='flex w-full px-4 leading-tight text-center text-[#1D242B] text-[18px]'>
                            Very helpful and accomodating staffs. The price is reasonable and affordable. Perfect place for young professionals around metro
                        </span>

                        <div className='flex flex-col items-center justify-center gap-2 w-full'>
                            <span className='font-bold text-[#1D242B] text-[20px]'>Eubert G.</span>
                            <div className='flex items-center justify-center gap-1'>
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                                <Star className="w-[20px] h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FrequentlyAskedQuestions />
            <HomeInquiry />
        </div>
    )
}