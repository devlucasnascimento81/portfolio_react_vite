import logo from "../assets/LNLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"
const Navbar = () => {
    return (
        <nav className= "mb-20 flex items-center justify-between px-4 py-8">
            <div className="flex items-center">
                <img className=" ml-0 w-20" src={logo} alt="logo"/>
            </div>
            <div className="flex items-center gap-4 text-white text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </nav>
    )
    
}

export default Navbar