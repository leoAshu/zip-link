import { useState, useEffect } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'

import ZipLink from '../models'
import linkIcon from '../assets/link.png'
import { cleanURL } from '../utils'

const Content = () => {
    const [urlInput, setUrlInput] = useState('')
    const [zipLinks, setZipLinks] = useState([] as ZipLink[])
    const [isLoading, setIsLoading] = useState(true)

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
                alert(
                    `Here\'s your shortened link:\n${cleanURL(
                        import.meta.env.VITE_APP_API_BASE_URL
                    )}/${newZipLink.zipId}`
                )
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
            } finally {
                setIsLoading(false)
            }
        }

        fetchZipLinks()
    }, [])

    return (
        <main>
            <div>
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Shorten your Long Links
                    </h2>
                    <p className="mt-4 text-sm md:text-base max-w-xs md:max-w-md lg:max-w-xl text-center">
                        Elevate your sharing game, transforming lengthy URLs
                        into sleek links for effortless and stylish
                        communication!
                    </p>
                </div>

                {isLoading ? (
                    <div>
                        <Oval
                            height={60}
                            width={60}
                            strokeWidth={5}
                            strokeWidthSecondary={5}
                            color="#FFF"
                            secondaryColor="#FFF"
                        />
                        <p className="mt-4 font-semibold text-base md:text-xl text-center">
                            Booting Up!
                            <br />
                            <span className="font-normal text-sm md:text-lg">
                                Please be patient!
                            </span>
                        </p>
                    </div>
                ) : (
                    <>
                        <div>
                            <img
                                src={linkIcon}
                                alt="url"
                                className="w-6 rounded-lg"
                            />

                            <input
                                type="url"
                                placeholder="Enter your URL"
                                value={urlInput}
                                onChange={(e) => setUrlInput(e.target.value)}
                                required
                            />

                            <button type="submit" onClick={handleSubmit}>
                                Zip It
                            </button>
                        </div>
                    </>
                )}
            </div>
        </main>
    )
}

export default Content
