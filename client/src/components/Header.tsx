import logo from '../assets/logo-no-background.png'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" className="w-24 sm:w-36" />
        </header>
    )
}

export default Header
