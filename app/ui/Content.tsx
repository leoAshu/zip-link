const Content = () => {
    return (
        <section className="py-96 flex items-center justify-center">
            <div className="flex rounded-lg border overflow-hidden">
                <input
                    type="text"
                    placeholder="Enter your URL"
                    className="w-96 p-2 pl-4 outline-none"
                />
                <button className="w-24 p-2 font-semibold bg-[#b4bfc5]/50 hover:bg-[#b4bfc5] transition-all duration-500">
                    Zip It
                </button>
            </div>
        </section>
    )
}

export default Content
