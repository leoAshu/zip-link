import logo from '../assets/logo-no-background.png'

const Header = () => {
    return (
        <header className="px-4 sm:px-10 py-6 bg-[#2980b9]">
            <img src={logo} alt="logo" className="w-24 sm:w-36" />
        </header>
    )
}

export default Header
