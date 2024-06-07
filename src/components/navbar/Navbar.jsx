import { useState } from "react";
import "./navbar.scss"
function Navbar(){
    const [open, setOpen]= useState(false)
   return( 
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="imagem da logo" />
                    <span>LamaState</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="rigth">
                <a href="/">Sing in</a>
                <a href="/" className="register">
                    Sing up
                </a>
                <div className="menuIcon">
                    <img 
                    src="/menu.png" 
                    alt="figura do menu" 
                    onClick={()=>setOpen(prev=>!prev)}
                    />
                </div>
                <div className={open ? "menu active": "menu"}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sing in</a>
                    <a href="/">Sing up</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;