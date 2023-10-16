import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
    return (<header>
        <div className="div_nav">
            <img className="logo_img" src="../images/logo.jpeg" alt="logo" title="Rotiseria" />
        </div>
        <nav className="nav_links">
            <Link to="Mi cuenta.html" >Mi cuenta</Link>
            <Link to="Contacto.html" >Contacto</Link>
            <Link to="/products/crear" >Crear</Link>
            <Link to="/products/listar" >Productos</Link>
            <Link to="Registro.html">Registro</Link>
            <Link to="/" >Inicio</Link>
        </nav>
    </header>
    
    )
}
export default Header;