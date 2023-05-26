/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../Spinner";
import Paginate from './SearchedProductPagination';

function Product () {
  const { products, status } = useSelector((state) => state.searchedProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="px-10 font-rubik">
      <h3 className="flex justify-center my-5 text-2xl font-semi-bold"></h3>
      {status === "loading" && <div className="flex justify-center items-center flex-col">
        <p>Loading...</p>
        <Spinner />
      </div>
      }
      {status === "failed" && <p>Failed to fetch products.</p>}
      {status === "succeeded" && products ? (
        <>
          { (products.length != 0) ? <div>
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mdl:grid-cols-4 gap-10 px-4 md:px-10 font-rubik">
              {currentProducts.map((product) => (
                <div key={product.id} className="card flex flex-col">
                  <Link to={`/products/${product.id}`}>
                    <div className="h-44 relative">
                      <img
                        className="w-full object-cover h-full absolute rounded"
                        src={product.images[0]}
                        alt="" />
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
            <Paginate
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
              page={currentPage}
            />
          </div> :
            <div>
              <p className=" font-bold ... text-primary justify-center">Product Not Found</p>
            </div>
          }
        </>
      ) : <p className="flex justify-center">Waiting for products</p>
      }
    </div>
  );
}

export default Product;
