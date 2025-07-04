import { Link } from "react-router-dom"
import "./Navbar.css"
import { navbarImages } from "./navbarAssets.ts"
import type { NavbarPropType } from "./navbarTypes.ts"

const Navbar = ({ setSidebar }: NavbarPropType) => {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img className="menu-icon" src={navbarImages.menu_icon} alt="menu" onClick={() => setSidebar(prev => !prev)} />
               <Link to={"/"}><img className="logo" src={navbarImages.logo} alt="logo" /></Link> 
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" name="search" placeholder="Serarch" />
                    <img src={navbarImages.search_icon} alt="search" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={navbarImages.upload_icon} alt="upload" />
                <img src={navbarImages.more_icon} alt="more" />
                <img src={navbarImages.notification_icon} alt="notification" />
                <img src={navbarImages.profile_icon} alt="profile" className="user-icon" />
            </div>

        </nav>
    )
}

export default Navbar