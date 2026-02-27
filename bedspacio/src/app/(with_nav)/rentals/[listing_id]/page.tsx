import Footer from "@/components/Footer";
import NavigationBar from "@/components/navigationBar";
import InquiryForm from "./InquiryForm";

import ArrowLong from '@/asset/icon/arrow-long.svg'


type Props = { params: { listing_id: string } };

export default async function ListingInfoPage ({ params }: Props ) {

    // FETCH THE DATA LIKE THIS LATER ON
    /*
        const res = await fetch(
            `http://localhost:5000/api/listings/${params.listingId}`,
            { cache: "no-store" }
        );
    */


    return (
        <div className="flex flex-col items-start w-full min-h-screen">
            <NavigationBar />

            <div className="flex items-center w-full px-[8rem] py-[1rem]">
                <span>{`Rentals > Listings >`}</span>
            </div>

            <section className="flex flex-col items-start justify-start w-full min-h-[800px] px-[8rem] gap-[2rem] box-border">
                <div className="relative grid grid-cols-4 w-full gap-[1rem]">
                    <div className="absolute top-3 left-3 rounded-[10px] p-2 flex items-center gap-2 bg-[#0077C0]">
                        <span className="text-[#FAFAFA] text-[16px]">Bedspace</span>
                        <span className="text-[#FAFAFA] text-[16px]">|</span>
                        <span className="text-[#FAFAFA] text-[16px]">Male Only</span>
                    </div>

                    <div className="flex items-center justify-center bg-[#C7EEFF] min-h-[250px] col-span-2 row-span-2 rounded-[10px]">Image</div>
                    <div className="flex items-center justify-center bg-[#C7EEFF] h-[250px] rounded-[10px]">Image</div>
                    <div className="flex items-center justify-center bg-[#C7EEFF] h-[250px] rounded-[10px]">Image</div>
                    <div className="flex items-center justify-center bg-[#C7EEFF] h-[250px] rounded-[10px]">Image</div>
                    <div className="flex items-center justify-center bg-[#C7EEFF] h-[250px] rounded-[10px]">Image</div>
                </div>

                <div className="relative grid grid-cols-[60%_40%] pb-[4rem] box-border">
                    <div className="flex flex-col items-start justify-start w-full gap-[1.5rem] pr-4">
                        <div className="flex flex-col items-start justify-start w-full gap-[1rem] pb-[1rem]">
                            <span className="text-[28px] text-[#1D242B] font-[900]">ROOM NAME</span>
                            <div className="flex flex-col items-start gap-1">
                                <span className="text-[#0077C0] text-[20px] leading-[1]">Starts at</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-[#0077C0] text-[28px] font-[900] leading-[1]">PHP 1000.00</span>
                                    <span className="text-[#0077C0] text-[28px] font-bold leading-[1] opacity-35">/monthly</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[16px] text-[#FAFAFA] font-[900] leading-[1] bg-[#0077C0] p-2 rounded-full px-4">MAXIMUM PAX: 8</span>
                                <span className="text-[16px] text-[#FAFAFA] font-[900] leading-[1] bg-[#0077C0] p-2 rounded-full px-4">AVAILABLE SLOTS: 2</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-[1rem] w-auto pt-[1rem] border-t border-t-[#1D242B]/50">
                            <span className="text-[20px] text-[#1D242B] font-[900]">Description</span>
                            <p className="text-[18px] text-[#1D242B]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className="flex flex-col items-start gap-2 w-auto">
                            <span className="text-[20px] text-[#1D242B] font-[900]">Inclusion/s</span>
                            <div className="flex flex-col gap-[1rem] items-start">
                                <div className="flex items-center gap-2">
                                    <ArrowLong className="w-[25px] h-auto" />
                                    <span className="text-[18px] text-[#1D242B] leading-[1]">Aircon</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <ArrowLong className="w-[25px] h-auto" />
                                    <span className="text-[18px] text-[#1D242B] leading-[1]">Bed & Mattress</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <ArrowLong className="w-[25px] h-auto" />
                                    <span className="text-[18px] text-[#1D242B] leading-[1]">Steel Locker</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <ArrowLong className="w-[25px] h-auto" />
                                    <span className="text-[18px] text-[#1D242B] leading-[1]">Wi-Fi</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-[1rem] w-auto">
                            <span className="text-[20px] text-[#1D242B] font-[900]">Payment Term/s</span>
                            <div className="flex flex-col gap-[1rem] items-start">
                                <div className="flex items-center gap-2">
                                    <ArrowLong className="w-[25px] h-auto" />
                                    <span className="text-[18px] text-[#1D242B] leading-[1]">2 Months deposit</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <ArrowLong className="w-[25px] h-auto" />
                                    <span className="text-[18px] text-[#1D242B] leading-[1]">Additional Php 1000.00 for utility deposit</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <ArrowLong className="w-[25px] h-auto" />
                                    <span className="text-[18px] text-[#1D242B] leading-[1]">No Advanced Payment</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-[1rem] w-full">
                            <span className="text-[20px] text-[#1D242B] font-[900]">Location</span>
                            <div className="flex flex-col gap-[1rem] items-start w-full">
                                <span className="text-[20px] text-[#1D242B]">Lirio St Pembo , Makati, Philippines, 1218</span>
                                <div className="flex w-full aspect-[16/9] rounded-[10px] overflow-hidden border-2 border-[#1D242B]/50">
                                    <iframe className="w-full h-full border-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4314.530524048516!2d121.05546727557147!3d14.544422785935382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9166b115a33%3A0xfba6d8b32dd2f720!2sBedSpacio!5e1!3m2!1sen!2sph!4v1771987409424!5m2!1sen!2sph"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full items-start">
                        <InquiryForm />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}