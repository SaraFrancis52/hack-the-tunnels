import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Page } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Product.style.scss";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProduct(id);
      if (json.error !== null) {
        setMessage(json.error);
        return;
      }

      setProduct(json.data.product);
    };

    fetchData();
  }, []);

  return (
    <Page>
      <div className="product-page">
        
        {message && <p>{message}</p>}
        {product && (
          <>
            <div className="product-column">
              <img src={product.imageUrl} alt="product image" className="product-image"></img>
            </div>
            <div className="product-column">
              <h2>Title: {product.title}</h2>
              <p>Description: {product.description}</p>
              <h4>Price: ${product.price}</h4>
              <Link to={`/checkout/${product.id}`}>
                <button className="buy-button">Buy Now</button>
              </Link>
            </div>
          </>
        )}
      </div>
      
    </Page>
  );
}

export default Product;
