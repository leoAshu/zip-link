import { useState, useEffect } from 'react'

const Content = () => {
    const [zipLinks, setZipLinks] = useState([])

    useEffect(() => {
        const fetchZipLinks = async () => {
            try {
                const response = await fetch('http://localhost:3000/zip', {
                    method: 'GET',
                })

                if (response.ok) {
                    const result = await response.json()
                    setZipLinks(result.data.reverse())
                }
            } catch (error) {
                alert(error)
                console.error(error)
            }
        }

        fetchZipLinks()
    }, [])

    return (
        <section className="flex flex-1 flex-col items-center justify-start bg-[#3498db] py-24">
            <div className="mt-4 mb-20 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Shorten your Long Links
                </h2>
                <p className="mt-4 max-w-md text-sm md:text-base md:max-w-lg text-white">
                    Elevate your sharing game, transforming lengthy URLs into
                    sleek links for effortless and stylish communication!
                </p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="flex rounded-lg bg-white p-6 shadow-md overflow-hidden mb-20 transition-transform transform hover:scale-105">
                    <div className="p-2 flex justify-center items-center rounded-md">
                        <img
                            src="src/assets/link.png"
                            alt="url"
                            className="h-6 w-6 text-white"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Enter your URL"
                        className="w-96 pl-4 outline-none bg-white rounded-md p-2"
                    />

                    <button className="w-24 text-white text-lg font-semibold bg-[#3498db] hover:bg-[#2980b9] transition-all duration-300 rounded-md">
                        Zip It
                    </button>
                </div>

                {Boolean(zipLinks.length) && (
                    <div className="shadow-md rounded-md overflow-clip w-full max-w-3xl transition-transform transform hover:scale-105">
                        <table className="w-full bg-white">
                            <thead className="bg-[#3498db] text-white text-left">
                                <tr>
                                    <th className="p-3 pl-6">Short Link</th>
                                    <th className="p-3 pl-6">Original Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {zipLinks.map(
                                    (
                                        item: {
                                            zipId: string
                                            redirectUrl: string
                                        },
                                        index
                                    ) => (
                                        <tr
                                            key={index}
                                            className={`text-sm font-semibold text-[#3498db] ${
                                                index % 2 === 0
                                                    ? 'bg-white'
                                                    : 'bg-[#f2f2f2]'
                                            } border-t border-t-[#f2f2f2] transition-all duration-300`}
                                        >
                                            <td className="p-4 pl-6">
                                                {`${
                                                    import.meta.env
                                                        .VITE_APP_API_BASE_URL
                                                }/${item.zipId}`}
                                            </td>
                                            <td className="p-4 pl-6">
                                                {item.redirectUrl}
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Content
