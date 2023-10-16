import { Link } from 'react-router-dom';

const CardProduct = ({ product }) => {
 

  return (
    <div className="col-12 col-sm-6 col-lg-3">
      <section className="product-box">
        <Link to={`/products/${product._id}`}>
          <figure className="product-box_image">
          <div className="col-12 col-lg-8">
            <img
              src={product.image}
              alt="product"
              className="product-detail-img"
            />
          </div>
          </figure>
          <article className="product-box_data">
            <h2>${product.price}</h2>
            <span>%{product.discount}</span>
            <p>{product.name}</p>
          </article>
        </Link>
      </section>
    </div>
  );
};

export default CardProduct;