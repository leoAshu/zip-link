import type { Metadata } from 'next'
import './ui/globals.css'

export const metadata: Metadata = {
    title: 'ZipLink',
    description: 'A dynamic URL shortener',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" />
            </head>
            <body>{children}</body>
        </html>
    )
}
