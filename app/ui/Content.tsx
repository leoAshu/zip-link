const Content = () => {
    return (
        <section className="py-96 flex items-center justify-center">
            <div className="flex">
                <input
                    type="text"
                    placeholder="Enter your URL"
                    className="w-96 p-2 pl-4 mr-2 rounded-md border border-none outline-none placeholder:font-semibold"
                />
                <button className="w-24 p-2 font-semibold rounded-md bg-[#b4bfc5] border border-[#b4bfc5] hover:bg-white">
                    Zip It
                </button>
            </div>
        </section>
    )
}

export default Content
