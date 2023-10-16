import ProductList from "../../components/ProductList";
import { useEffect, useState } from "react";

const Detail = () => {
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);


  const getProducts = () => {
    fetch('http://localhost:3001/products/listar')
        .then(res => res.json())
        .then(products => {
            setProducts(products);
            const offers = products.filter(product => product.discount > 15);
            setOffers(offers);
        })
  }

  useEffect(getProducts, []);

  useEffect(() => {
    console.log('El componente se actualizó');
  }, [products])

  return (
    <>

      {/* Productos */}
      <ProductList 
        title="Productos" 

        products={products} 
      />
    </>
  );
};

export default Detail;