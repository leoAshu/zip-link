const urls = [
    {
        originalUrl: 'https://example.com/page1',
        shortUrl: 'https://zip.link/abc123',
        createdAt: '2023-11-09T12:30:00Z',
    },
    // {
    //     originalUrl: 'https://example.com/page2',
    //     shortUrl: 'https://zip.link/def456',
    //     createdAt: '2023-11-09T13:45:00Z',
    // },
    // {
    //     originalUrl: 'https://example.com/page3',
    //     shortUrl: 'https://zip.link/ghi789',
    //     createdAt: '2023-11-09T15:20:00Z',
    // },
    // {
    //     originalUrl: 'https://example.com/page4',
    //     shortUrl: 'https://zip.link/jkl012',
    //     createdAt: '2023-11-09T16:40:00Z',
    // },
    // {
    //     originalUrl: 'https://example.com/page5',
    //     shortUrl: 'https://zip.link/mno345',
    //     createdAt: '2023-11-09T17:55:00Z',
    // },
    {
        originalUrl: 'https://example.com/page6',
        shortUrl: 'https://zip.link/pqr678',
        createdAt: '2023-11-09T19:10:00Z',
    },
    // {
    //     originalUrl: 'https://example.com/page7',
    //     shortUrl: 'https://zip.link/stu901',
    //     createdAt: '2023-11-09T20:25:00Z',
    // },
    // {
    //     originalUrl: 'https://example.com/page8',
    //     shortUrl: 'https://zip.link/vwx234',
    //     createdAt: '2023-11-09T21:40:00Z',
    // },
    // {
    //     originalUrl: 'https://example.com/page9',
    //     shortUrl: 'https://zip.link/yza567',
    //     createdAt: '2023-11-09T22:55:00Z',
    // },
    // {
    //     originalUrl: 'https://example.com/page10',
    //     shortUrl: 'https://zip.link/bcd890',
    //     createdAt: '2023-11-09T23:59:00Z',
    // },
]

const Content = () => {
    return (
        <section className="flex flex-1 flex-col items-center justify-start bg-gray-100 py-24">
            <div className="mt-4 mb-20 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#575C5F]">
                    Shorten your Long Links
                </h2>
                <p className="mt-4 max-w-md text-sm md:text-base md:max-w-lg text-[#575C5F]">
                    Elevate your sharing game, transforming lengthy URLs into
                    sleek links for effortless and stylish communication!
                </p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="flex rounded-lg border border-[#575C5F] shadow-md overflow-hidden mb-20">
                    <div className="p-2 bg-[#575C5F] flex justify-center items-center">
                        <img
                            src="/icons/url.png"
                            alt="url"
                            className="h-6 w-6"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Enter your URL"
                        className="w-96 pl-4 outline-none"
                    />

                    <button className="w-24 text-white text-lg font-semibold bg-[#575C5F]/50 hover:bg-[#575C5F] transition-all duration-300">
                        Zip It
                    </button>
                </div>

                <div className="shadow-md rounded-md overflow-hidden min-w-[75%] lg:min-w-[45%]">
                    <table className="min-w-full">
                        <thead className="bg-[#575C5F] text-[#DEDAD7] text-left">
                            <tr>
                                <th className="p-3 pl-6">Short Link</th>
                                <th className="p-3 pl-6">Original Link</th>
                                <th className="p-3 pl-6">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {urls.map((item, index) => (
                                <tr
                                    key={index}
                                    className="text-sm font-semibold text-[#575C5F] bg-white border-t border-t-[#575C5F]"
                                >
                                    <td className="p-4 pl-6">
                                        {item.shortUrl}
                                    </td>
                                    <td className="p-4 pl-6">
                                        {item.originalUrl}
                                    </td>
                                    <td className="p-4 pl-6">
                                        {item.createdAt}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Content
