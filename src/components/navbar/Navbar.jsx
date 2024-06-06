import "./navbar.scss"
function Navbar(){
   return( 
        <nav>
            <div className="left">
                <a href="/">
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
                <a href="/" className="register">Sing up</a>
            </div>
        </nav>
    )
}

export default Navbar;