import { useState, useEffect } from 'react'
import axios from 'axios'
import ZipLink from '../models'
import linkIcon from '../assets/link.png'

const removeHttps = (url: string): string => {
    // Using a regular expression to remove 'https://'
    return url.replace(/^https?:\/\//, '')
}

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
            } else {
                alert('Failed to shorten the URL. Please try again.')
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
                } else {
                    alert('Failed to shorten the URL. Please try again.')
                }
            } catch (err) {
                alert(err)
                console.error(err)
            }
        }

        fetchZipLinks()
    }, [])

    return (
        <main className="flex-1 flex flex-col items-center justify-center bg-[#3498db] text-white">
            <div>
                <div className="flex flex-col items-center mt-4 mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Shorten your Long Links
                    </h2>
                    <p className="mt-4 text-sm md:text-base max-w-xs md:max-w-md lg:max-w-xl text-center">
                        Elevate your sharing game, transforming lengthy URLs
                        into sleek links for effortless and stylish
                        communication!
                    </p>
                </div>

                <div className="flex justify-center items-center bg-white rounded-lg p-2">
                    <img src={linkIcon} alt="url" className="w-6 rounded-lg" />

                    <input
                        type="url"
                        placeholder="Enter your URL"
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        required
                        className="flex-1 outline-none rounded-md p-2 caret-transparent text-[#2980b9]"
                    />

                    <button
                        type="submit"
                        className="p-2 px-4 text-white text-lg font-semibold bg-[#3498db] hover:bg-[#2980b9] transition-all duration-300 rounded-md"
                        onClick={handleSubmit}
                    >
                        Zip It
                    </button>
                </div>

                {Boolean(zipLinks.length) && (
                    <div className="hidden sm:block sm:w-full mt-4 shadow-md rounded-md overflow-clip transition-transform transform hover:scale-105">
                        <table className="w-full bg-white">
                            <thead className="bg-[#2980b9] text-white text-left">
                                <tr>
                                    <th className="p-4">Short Link</th>
                                    <th className="p-4 pl-6">Original Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {zipLinks.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`text-sm font-semibold text-[#2980b9] ${
                                            index % 2 === 0
                                                ? 'bg-white'
                                                : 'bg-[#f2f2f2]'
                                        } border-t border-t-[#f2f2f2] transition-all duration-300`}
                                    >
                                        <td className="p-4">
                                            {`${removeHttps(
                                                import.meta.env
                                                    .VITE_APP_API_BASE_URL
                                            )}/${item.zipId}`}
                                        </td>
                                        <td className="p-4 pl-6">
                                            {removeHttps(item.redirectUrl)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Content
