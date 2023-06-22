/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductss } from "../../redux/actions/products";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import AddToCartButton from "../cart/AddToCartButton";
import AddToWishList from "../wishlist/AddToWishList";
import Edit from "../../assets/Edit.svg";
import Delete from "../../assets/Delete.svg";
import Button from "../forms/Button";

function SellerProduct(pages) {
  const { products, status } = useSelector((state) => state.sellerProducts);
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductss(pages));
  }, []);
  return (
    <div className='px-10 font-rubik'>
      <h3 className='flex justify-center my-5 text-2xl font-semi-bold'></h3>
      <Link to={"/dashboard/seller/add-product"}>
        <Button type='submit' label='Add product' className='w-16 right-0' />
      </Link>
      {status === "loading" && (
        <div className='flex justify-center items-center flex-col'>
          <p>Loading...</p>
          <Spinner height={24} width={24} />
        </div>
      )}
      {status === "failed" && <p>Failed to fetch products.</p>}
      {status === "succeeded" && products ? (
        <div className='flex justify-center gap-7 flex-wrap'>
          {products?.items?.map((product) => (
            <div
              key={product.id}
              className='card flex flex-col'
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className='h-44 relative'>
                <img
                  className='w-full object-cover h-full absolute rounded'
                  src={product?.images[0]}
                  alt=''
                />
                {hoveredProductId === product.id && (
                  <div className='absolute right-0 flex   '>
                    <div
                      className='relative'
                      style={{
                        maxWidth: "70px",
                        maxHeight: "170px",
                        bottom: 0,
                      }}
                    >
                      <Link
                        to={`/dashboard/seller/products/${product.id}/update-product`}
                      >
                        <img src={Edit} alt='Edit' />
                      </Link>
                      <Link to={`/dashboard/delete/${product.id}`}>
                        <img src={Delete} alt='Delete' />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to={`/products/${product.id}`}>
                <div className='flex flex-col justify-between p-2'>
                  <h4 className='text-lg font-medium'>{product.name}</h4>
                  <p className='text-sm mb-2'>
                    Quantity: {product.quantity} pieces
                  </p>
                  <div className='flex flex-row justify-between'>
                    <p className='text-lg text-[15px]'>
                      Price: {product.price}RWF
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className='flex justify-center'>Waiting for products</p>
      )}
    </div>
  );
}

export default SellerProduct;
