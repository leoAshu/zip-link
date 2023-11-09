const Content = () => {
    return (
        <section className="py-36 flex items-center justify-center">
            <div className="flex rounded-lg border border-[#575C5F] shadow-xl overflow-hidden">
                <div className="p-2 w-10 bg-[#575C5F] flex justify-center items-center">
                    <img src="/icons/url.png" alt="url" className="h-6 w-6" />
                </div>

                <input
                    type="text"
                    placeholder="Enter your URL"
                    className="w-96 pl-4 outline-none"
                />

                <button className="w-24 text-[#DEDAD7] text-lg font-semibold bg-[#575C5F]/50 hover:bg-[#575C5F] transition-all duration-300">
                    Zip It
                </button>
            </div>
        </section>
    )
}

export default Content
