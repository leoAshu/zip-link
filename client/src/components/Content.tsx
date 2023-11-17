import { useState, useEffect } from 'react'
import axios from 'axios'
import ZipLink from '../models'

const Content = () => {
    const [urlInput, setUrlInput] = useState('')
    const [zipLinks, setZipLinks] = useState([] as ZipLink[])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_APP_API_BASE_URL}/zip`,
                {
                    url: urlInput,
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            )
            if (response.status === 200) {
                const result = await response.data
                const newZipLink = {
                    zipId: result.zipId,
                    redirectUrl: urlInput,
                }

                // Check if the link is already in zipLinks
                const linkAlreadyExists = zipLinks.some(
                    (link) => link.zipId === result.zipId
                )

                if (!linkAlreadyExists) {
                    setZipLinks([newZipLink, ...zipLinks])
                }
            }
        } catch (err) {
            alert(err)
            console.error(err)
        } finally {
            setUrlInput('')
        }
    }

    useEffect(() => {
        const fetchZipLinks = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_APP_API_BASE_URL}/zip`
                )

                if (response.status === 200) {
                    const result = await response.data
                    setZipLinks(result.data.reverse())
                }
            } catch (err) {
                alert(err)
                console.error(err)
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
                <form
                    onSubmit={handleSubmit}
                    className="flex rounded-lg bg-white p-2 shadow-md overflow-hidden mb-20 transition-transform transform hover:scale-105"
                >
                    <div className="p-2 flex justify-center items-center rounded-md">
                        <img
                            src="src/assets/link.png"
                            alt="url"
                            className="h-6 w-6 text-white"
                        />
                    </div>

                    <input
                        type="url"
                        placeholder="Enter your URL"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        className="w-96 pl-4 outline-none bg-white rounded-md p-2"
                    />

                    <button
                        type="submit"
                        className="w-24 text-white text-lg font-semibold bg-[#3498db] hover:bg-[#2980b9] transition-all duration-300 rounded-md"
                    >
                        Zip It
                    </button>
                </form>

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
                                {zipLinks.map((item, index) => (
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
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Content
