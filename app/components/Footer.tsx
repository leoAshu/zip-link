const Footer = () => {
    return (
        <footer className="py-4 bg-[#B4BFC5] flex flex-col items-center justify-center ">
            <img
                src="/logo/logo-no-background-dark.png"
                alt="logo"
                className="w-36"
            />

            <p className="text-sm font-bold mt-2 text-[#575C5F]">
                Made by{'  '}
                <span className="footer-name text-xl font-normal">
                    Ashutosh Ojha
                </span>
            </p>
        </footer>
    )
}

export default Footer
