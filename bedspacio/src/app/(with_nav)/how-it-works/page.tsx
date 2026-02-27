
export default function HowItWorks() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-full">

            <div className="relative flex w-full h-[350px] items-center justify-center bg-[#1D242B] overflow-hidden">
                <div className="flex items-center justify-center w-full inset-0 opacity-50">
                    <img src="/asset/how_it_works.jpg" alt="how-it-works" className="w-full h-full object-cover" />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                    <span className="text-[24px] text-[#0077C0]">How It Works</span>
                    <span className="text-[56px] text-[#FAFAFA] text-center font-[900] leading-[1] w-[800px]">Finding Your Next BedSpace, Made Simple</span>
                </div>
            </div>

            <div className="flex flex-col items-center min-h-[800px] w-full px-[8rem] py-[4rem] gap-[4rem]">
                <div className="grid grid-cols-2 w-full gap-[2rem] h-[400px]">
                    <div className="flex flex-col items-start justify-center p-[2rem] gap-[2rem]">
                        <span className="text-[36px] text-[#0077C0] font-[900]">Step 1. Browse</span>
                        <span className="text-[28px] text-[#1D242B] leading-[1.2]">Explore verified listings that fit your budget, location, and lifestyle. Find your next space in just a few clicks.</span>
                    </div>
                    <div className="flex items-center justify-center bg-[#C7EEFF] w-full h-full rounded-[10px] overflow-hidden">Image</div>
                </div>

                <div className="grid grid-cols-2 w-full gap-[2rem] h-[400px]">
                    <div className="flex items-center justify-center bg-[#C7EEFF] w-full h-full rounded-[10px] overflow-hidden">Image</div>
                    <div className="flex flex-col items-start justify-center p-[2rem] gap-[2rem]">
                        <span className="text-[36px] text-[#0077C0] font-[900]">Step 2. Inquire</span>
                        <span className="text-[28px] text-[#1D242B] leading-[1.2]">Interested in a listing? Send a quick inquiry directly through BedSpacio and get connected with the property manager.</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 w-full gap-[2rem] h-[400px]">
                    <div className="flex flex-col items-start justify-center p-[2rem] gap-[2rem]">
                        <span className="text-[36px] text-[#0077C0] font-[900]">Step 3. Schedule</span>
                        <span className="text-[28px] text-[#1D242B] leading-[1.2]">Set a viewing date or let us know your preferred move-in schedule whichever works best for you.</span>
                    </div>
                    <div className="flex items-center justify-center bg-[#C7EEFF] w-full h-full rounded-[10px] overflow-hidden">Image</div>
                </div>

                <div className="grid grid-cols-2 w-full gap-[2rem] h-[400px]">
                    <div className="flex items-center justify-center bg-[#C7EEFF] w-full h-full rounded-[10px] overflow-hidden">Image</div>
                    <div className="flex flex-col items-start justify-center p-[2rem] gap-[2rem]">
                        <span className="text-[36px] text-[#0077C0] font-[900]">Step 4. Move-In</span>
                        <span className="text-[28px] text-[#1D242B] leading-[1.2]">Finalize the details, pack your bags, and settle into your new space comfortably and confidently.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}