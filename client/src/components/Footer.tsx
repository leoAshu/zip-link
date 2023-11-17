const Footer = () => {
    return (
        <footer className="py-4 bg-[#2980b9] flex flex-col items-center justify-center">
            <img
                src="src/assets/logo-no-background-dark.png"
                alt="logo"
                className="w-36"
            />

            <p className="text-sm font-bold mt-2 text-white">
                Made by{'  '}
                <span className="footer-name text-xl font-normal">
                    Ashutosh Ojha
                </span>
            </p>
        </footer>
    )
}

export default Footer
