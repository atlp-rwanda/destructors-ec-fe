/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { Link } from "react-router-dom";
import { useProductAll } from "./products/hooks";
import Spinner from "../components/Spinner";
import { useEffect, useState } from 'react';
import AddToCartButton from './cart/AddToCartButton';
import AddToWishList from './wishlist/AddToWishList';

function SimmilarItems ({ page, categoryId, id } ) {
  const { products, status } = useProductAll(page);
  const filteredProducts = products ? products.products.filter((product) => product.categoryId === categoryId && product.id !== id)
    : [];
  
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleShowMore = () => {
    setShowAllProducts(true);
  };

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center flex-col">
        <p>Loading...</p>
        <Spinner />
      </div>
    );
  }

  if (status === "failed") {
    return <p>Failed to fetch products.</p>;
  }

  return (
    <div className="px-10 font-rubik">
      {filteredProducts.length > 0 ? (
        <div className="flex-col xs:w-32 px-10 border border-grey-500">
          <h3 className="flex justify-center my-5 text-2xl font-semi-bold">Similar items.</h3>
          {filteredProducts.slice(0, showAllProducts ? filteredProducts.length : 3).map((product) => (
            <div key={product.id} className="mb-10 w-44 rounded-md border border-grey-500" onMouseEnter={() => handleMouseEnter(product.id)} onMouseLeave={handleMouseLeave}>
              <div className="h-16 relative">
                <img className="absolute mb-10" style={{ objectFit: 'cover', width: '100%', height: '200%', }} src={product.images[0]} alt="" />
                {hoveredProductId === product.id && (
                  <div className="absolute right-0 flex">
                    <div className="flex flex-col-reverse" style={{ maxWidth: '70px', maxHeight: '170px', bottom: 0 }}>
                      <AddToCartButton productId={product.id} />
                      <AddToWishList productId={product.id} />
                    </div>
                  </div>
                )}
              </div>
              <Link to={`/products/${product.id}`}>
                <div className="flex flex-col justify-between pl-4 pt-16">
                  <h4 className="text-lg xs:text-sm font-medium">{product.name}</h4>
                  <p className="text-sm xs:text-xs mb-2">
                    {product.description.slice(0, 15)}...
                  </p>
                  <div className="flex flex-row justify-between">
                    <p className="text-lg xs:text-xs text-[15px]">
                      Price: {product.price}RWF
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
null 
      )}
    </div>
  );
}

export default SimmilarItems;