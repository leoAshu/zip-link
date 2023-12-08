import logo from '../assets/logo-no-background-dark.png'

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" className="w-24 sm:w-36" />

            <p className="text-xs sm:text-sm font-normal mt-2 text-white">
                Made by{'  '}
                <span className="text-base sm:text-xl font-semibold">
                    Ashutosh Ojha
                </span>
            </p>
        </footer>
    )
}

export default Footer
