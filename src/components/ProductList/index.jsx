import CardProduct from "./CardProduct";

const ProductList = ({ title, products }) => {
  return (
    <div className="container products-wrapper">
      <div className="row">
        <div className="col-12">
          <h2 className="products-title">{title}</h2>
        </div>
        {/* Show the "visited" products */}
        {products.map((product) => (
          <CardProduct 
            key={product._id} 
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;