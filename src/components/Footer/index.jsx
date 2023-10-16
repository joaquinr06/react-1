import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Footer() {
    return (<footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h5>Oficinas Centrales</h5>
                    <div style={{ width: '100%' }}><iframe width={200} height={200} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=200&height=200&hl=en&q=palermo,%20buenos%20aires+(My%20Business%20Name)&t=&z=16&ie=UTF8&iwloc=B&output=embed">&lt;a
                        href="https://www.maps.ie/distance-area-calculator.html"&gt;distance maps&lt;/a&gt;</iframe></div>
                </div>
                <div className="col-4">
                    <ul>
                        <h5>contactanos</h5>
                        <li>lodepipo@gmail.com</li>
                        <li>reclamos@gmail.com</li>
                        <li>11 1234-5678</li>
                        <li>Lunes a viernes de 10:00 a 18:00 hs</li>
                    </ul>
                </div>
                <div className="col-4">
                    <ol>
                        <Link To="Mi cuenta.html" target="_blank">Mi cuenta</Link>
                        <br />
                        <Link To="Contacto.html" target="_blank">Contacto</Link>
                        <br />
                        <Link To="Empresa.html" target="_blank">Empresa</Link>
                        <br />
                        <Link To="Productos.html" target="_blank">Productos</Link>
                        <br />
                        <Link To="Registro.html">Registro</Link>
                        <br />
                        <Link To="index.html" target="_blank">Inicio</Link>
                    </ol>
                    <em> © 2023 Joaquin copyright reserved</em>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;