import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import ProductList from "../../components/ProductList";


const Results = () => {

  const [products, setProducts] = useState([]);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const word = query.get("word");

  const getProducts = () => {
    fetch(`http://localhost:3001/products/results/?name=${word}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  };
  useEffect(getProducts, [word]);

  return (
    <>
      {
        products.length > 0 ?
          <ProductList
            title={`Resultado de la busqueda de: ${word}`}
            products={products}
          />
          :
          <div className="container">
            <div className="col-12">
              <h2 className="products-title" style={{ color: "black" }}>
                No hay productos que coincidan con esa búsqueda
              </h2>
            </div>
          </div>
      }
    </>

  );
};

export default Results;
