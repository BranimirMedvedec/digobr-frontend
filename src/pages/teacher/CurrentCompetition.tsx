import Title from "@/components/title.tsx";

export default function CurrentCompetition() {
    return (<div className="min-h-screen w-screen flex flex-col items-center justify-start">
            <div className="flex justify-between items-center w-full pr-5">
                <Title
                    showSmallTitle={true}
                    showFrog={false}
                />
                <p className="uppercase font-bold text-[#9775FF] font-alumni text-3xl">učilica 6258</p>
            </div>
            <div className="w-full px-10 flex gap-5">
                <div className="flex items-end gap-4 h-[78vh] w-2/3">
                    <div
                        className="relative w-1/3 h-2/3 bg-white bg-opacity-60 rounded-3xl flex flex-col items-center border-white border-2">
                        <div className="absolute -top-12 flex animate-bounce">
                            <img
                                src="/star.png"
                                alt="Star"
                                className="w-14"
                            />
                            <img
                                src="/star.png"
                                alt="Star"
                                className="w-14"
                            />
                        </div>
                        <div
                            className="relative h-28 bg-[#25BDFC] border-white border-4 w-full rounded-t-2xl flex flex-col items-center">
                            <div
                                className="absolute top-2 bg-white px-2 font-bold font-alumni text-2xl rounded-2xl">{5625}</div>
                        </div>
                        <div className="relative font-bold font-alumni flex flex-col items-center mt-2">
                            <p className="absolute top-0 text-[#E127E7] text-lg">BODOVI</p>
                            <p className="absolute top-4 text-3xl">67367</p>
                        </div>
                        <div
                            className="absolute bottom-5 left-5 bg-white text-black font-extrabold font-alumni text-3xl px-4 py-2 rounded-xl">
                            2
                        </div>
                    </div>
                    <div className="relative w-1/3 h-5/6 bg-white bg-opacity-60 rounded-3xl">
                        <div
                            className="absolute h-28 bg-[#00FF1A] top-0 border-white border-4 w-full rounded-t-2xl"></div>
                    </div>
                    <div className="relative w-1/3 h-1/2 bg-white bg-opacity-60 rounded-3xl">
                        <div
                            className="absolute h-28 bg-[#FF0404] top-0 border-white border-4 w-full rounded-t-2xl"></div>
                    </div>
                </div>
                <div className="flex items-end h-[78vh] w-1/3 bg-red-500">
                </div>
            </div>
        </div>

    );
}