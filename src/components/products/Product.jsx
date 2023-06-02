/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useProductAll } from "./hooks";
import Spinner from "../Spinner";
import { useEffect } from "react";
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
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mdl:grid-cols-4 gap-10 px-4 md:px-10 font-rubik">
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
