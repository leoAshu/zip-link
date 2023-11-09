const Footer = () => {
    return (
        <header className="py-10 bg-[#B4BFC5] absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center">
            <img
                src="/logo/logo-no-background-dark.png"
                alt="logo"
                className="w-36"
            />

            <p className="text-sm font-bold mt-4 text-[#575C5F]">
                Made by{'  '}
                <span className="footer-name text-xl font-normal">
                    Ashutosh Ojha
                </span>
            </p>
        </header>
    )
}

export default Footer
