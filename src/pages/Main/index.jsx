import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";



const Main = () => {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);


  const getProducts = () => {
    fetch('http://localhost:3001/products/listar')
        .then(res => res.json())
        .then(products => {
            setProducts(products);
            const offers = products.filter(product => product.discount >= 1);
            setOffers(offers);
        })
  }

  useEffect(getProducts, []);

  useEffect(() => {
    console.log('El componente se actualizó');
  }, [products])

  return (
    <>
      {/*titulo*/}
      <section id="container">
        <div className="titulo">
          <h1>Lo de Pipo</h1>
        </div>
        <div className="texto">
          <span>
            {" "}
            <strong> Delivery Sin Cargo</strong>{" "}
          </span>
          <p>
            Cualquier <strong>comida del dia</strong>, al alcance de un{" "}
            <mark>Click</mark>!
          </p>
        </div>
      </section>
      {/*Banner*/}
      <div className="container 2">
        <div className="row">
          <div className="col-1">
            <img
              className="banner"
              src="../images/restaurant banner tp.jpg"
              alt="banner"
              title="Banner"
            />
          </div>
        </div>
      </div>
      <hr />
      {/*Productos*/}
      <section className="Products">
      {/* Productos */}
      <ProductList 
        title="¡Ofertas de la Semana!" 
        products={offers} 

      />
      </section>
      {/*Texto*/}
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h2>Nuestra Historia</h2>
            <p>
              Somos una empresa gastronomica dedicada a ofrecer la{" "}
              <strong>mejor calidad de servicio y atencion</strong> a nuestros
              comensales ofreciendo variados platillos elaborados con el sabor{" "}
              <em>tradicional de la cocina Argentina</em> pero con los estandares
              mas altos a nivel mundial
            </p>
          </div>
          <div className="col-2">
            <img src="../images/calidad.png" alt="" />
          </div>
        </div>
      </div>
      {/*sucursales*/}
      <div className="container">
        <h3>Sucursales</h3>
        <p className="zonas">
          contamos con diversas sucursales a lo largo de Buenos Aires, podes
          visitarnos por la zona de:
        </p>
        <div className="row">
          <div className="col-2">
            caballito
            <img
              className="locales"
              src="../images/caballito.jpg"
              alt="caballito"
              title="Caballito"
            />
          </div>
          <div className="col-2">
            Devoto
            <img
              className="locales"
              src="../images/devoto.jpg"
              alt="Devoto"
              title="Devoto"
            />
          </div>
          <div className="col-2">
            {" "}
            Palermo
            <img
              className="locales"
              src="../images/palermo.webp"
              alt="Palermo"
              title="Palermo"
            />
          </div>
          <div className="col-2">
            Retiro
            <img
              className="locales"
              src="../images/retiro.jpg"
              alt="Retiro"
              title="Retiro"
            />
          </div>
          <div className="col-2">
            Alcorta
            <img
              className="locales"
              src="../images/alcorta.jpg"
              alt="Alcorta"
              title="Alcorta"
            />
          </div>
          <div className="col-2">
            Vicente Lopez
            <img
              className="locales"
              src="../images/vicente.jpg"
              alt="Vicente Lopez"
              title="Vicente Lopez"
            />
          </div>
        </div>
      </div>
      <hr />

    </>

  );
};

export default Main;