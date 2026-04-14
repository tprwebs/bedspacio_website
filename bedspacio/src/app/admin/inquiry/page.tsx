export default function Inquiry () {

    return (
        <div className="flex w-full min-h-screen">
            <div className="flex flex-col w-full px-[8rem] py-[2rem] gap-[2rem]">

                <div className="flex items-center justify-between w-full">
                    <span className="text-[28px] text-[#1D242B] font-bold leading-tight">Inquiry</span>
                </div>

                <div className="flex flex-col w-full">

                    <div className="grid grid-cols-5 border-b border-b-[#1D242B]/45 px-[1rem] py-1">
                        <span className="text-[14px] text-[#1D242B]/75">Inqiury Type</span>
                        <span className="text-[14px] text-[#1D242B]/75">Public Room ID</span>
                        <span className="text-[14px] text-[#1D242B]/75">Name of Inquirer</span>
                        <span className="text-[14px] text-[#1D242B]/75">Status</span>
                        <span className="text-[14px] text-[#1D242B]/75">Submitted at</span>
                    </div>

                    <div className="flex flex-col w-full">
                        <button className="grid grid-cols-5 border-b border-b-[#1D242B]/15 py-3 place-items-center justify-items-start hover:bg-[#C7EEFF]/50 active:bg-[#FAFAFA] cursor-pointer px-[1rem] transition-all duration-100">
                            <span>Tenant Inquiry</span>
                            <span>123456</span>
                            <span>Angelo Cabangal</span>
                            <span className="px-2 py-1 text-[14px] font-bold text-[#007C00] bg-[#007C00]/15 w-fit rounded-full">Accepted</span>
                            <span>04-13-2026</span>
                        </button>

                        <button className="grid grid-cols-5 border-b border-b-[#1D242B]/15 py-3 place-items-center justify-items-start hover:bg-[#C7EEFF]/50 active:bg-[#FAFAFA] cursor-pointer px-[1rem] transition-all duration-100">
                            <span>Contact Inquiry</span>
                            <span>123456</span>
                            <span>Angelo Cabangal</span>
                            <span className="px-2 py-1 text-[14px] font-bold text-[#E70C0E] bg-[#E70C0E]/15 w-fit rounded-full">Rejected</span>
                            <span>04-13-2026</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}