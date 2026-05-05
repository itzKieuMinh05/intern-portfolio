
/**
 * NodesModules
 */
import {useState} from "react";
/**
 * Components
 */

import Navbar from './navbar.jsx'

const Header = () => {
    const [navOpen, setNavOpen] = useState(true);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">

            <h1>
                <a href="/" className="logo"><img src="/src/favicon/home.png" width={40} height={40} alt="Kiều Tấn Anh Minh"/></a>
            </h1>
            <div className=""> <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}
                >
                <span className="material-symbols-rounded"> 
                    {navOpen ? 'close' : 'menu'}
                    </span>
                </button>
                <Navbar navOpen={navOpen}/>
            </div>
            <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end"> Contact </a>
        </div>
    </header>
    )
}

export default Header;
