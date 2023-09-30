import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Page, ProductPreviewCard } from "../../components";
import { ServiceAPI } from "../../infrastructure";
import "./Home.style.scss";
import { useCookies } from 'react-cookie';

function Home() {
  const [products, setProducts] = useState([]);
  const [cookies, setCookie] = useCookies(['name']);

  useEffect(() => {
    const fetchData = async () => {
      const json = await ServiceAPI.fetchProducts();
      setProducts(json.data.products);
    };
    fetchData();
  }, []);

  return (
    <Page>
      <div className="home-page">
        <h1 className="home-page__title">Home</h1>
        <h2 style={{marginLeft: "30px"}}>Products</h2>
        <div className="home-page__products">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={`${product.id}`} onClick={() => setCookie(product.title, product.id)}>
              <ProductPreviewCard
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                key={`${product.id}`}
              />
            </Link>
          ))}
        </div>
        <h2 style={{marginLeft: "30px"}}>Recently Viewed Products</h2>
        <div className="home-page__products">
            {products.map((product) => (
              <Fragment key={product.id}>
                {
                  (()=> {
                    if(product.id === cookies[product.title]){
                      return(
                        <Link to={`/products/${product.id}`} key={product.id} onClick={() => setCookie(product.title, product.id)}>
                          <ProductPreviewCard
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            key={`${product.id}`}
                          />
                        </Link>
                      )
                    }
                  })()
                }
              </Fragment>
            ))}
          </div>
      </div>
    </Page>
  );
}

export default Home;
