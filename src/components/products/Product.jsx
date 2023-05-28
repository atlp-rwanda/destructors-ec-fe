/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useProductAll } from "./hooks";
import Spinner from "../Spinner";import { useEffect } from "react";
import AddToCartButton from "../cart/AddToCartButton";
import SearchedProducts from "../searchIputField/SearchedProducts";
function Product (props) {
  const { page } = props;
  const { products, status } = useProductAll(page);
  const searchMode = useSelector((state) => state.searchMode.value);

  useEffect ( () => {
    searchMode;
  }, [searchMode]);
  console.log(products);
  return (
    <>
    { searchMode ?
      < SearchedProducts /> :
    <div className="px-10 font-rubik">
      <h3 className="flex justify-center my-5 text-2xl font-semi-bold"></h3>
      {status === "loading" && <div className="flex justify-center items-center flex-col">
        <p>Loading...</p>
        <Spinner />
      </div>
      }
      {status === "failed" && <p>Failed to fetch products.</p>}
      {status === "succeeded" && products ? (
        <div className="flex justify-center gap-7 flex-wrap">
          {products.items.map((product) => (
            <div key={product.id} className="card flex flex-col">
              <Link to={`/products/${product.id}`}>
                <div className="h-44 relative">
                  <img
                    className="w-full object-cover h-full absolute rounded"
                    src={product.images[0]}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between p-2">
                  <h4 className="text-lg font-medium">{product.name}</h4>
                  <p className="text-sm mb-2">
                      Quantity: {product.quantity} pieces
                  </p>
                  <div className="flex flex-row justify-between">
                    <p className="text-lg text-[15px]">
                        Price: {product.price}RWF
                    </p>
                  </div>
                </div>
                <div><AddToCartButton productId={product.id} /> </div>
              </Link>
            </div>
          ))}
        </div>
      ) : <p className="flex justify-center">Waiting for products</p>
      }
    </div>
          }
          </>
  );
}

export default Product;