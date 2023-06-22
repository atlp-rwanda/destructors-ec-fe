import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductWishilist } from "../../redux/actions/wishListActions";
import { useProductAll } from "../../components/products/hooks";
import Spinner from "../Spinner";
import AddToWishList from "./AddToWishList";
import Footer from "../Footer";

export const WishListComonent = (props) => {
  const dispatch = useDispatch();
  const { page } = props;
  const { products, status } = useProductAll(page);
  const wishlistData = useSelector((state) => state.wishListGet.wishlistData);

  useEffect(() => {
    dispatch(getProductWishilist());
  }, [dispatch]);

  const handleRemoveFromWishlist = async () => {};

  return (
    <>
      <div className='px-10 font-rubik'>
        <h3 className='flex justify-center my-5 text-2xl font-semi-bold'>
          Wished products
        </h3>
        {status === "loading" && (
          <div className='flex justify-center items-center flex-col'>
            <p>Loading...</p>
            <Spinner height={6} width={6} />
          </div>
        )}
        {status === "failed" && <p>Failed to fetch products.</p>}
        {status === "succeeded" && products ? (
          products.products.filter((product) =>
            wishlistData.some((item) => item.productId === product.id)
          ).length === 0 ? (
            <p className='flex w-full  justify-center items-center py-64  text-2xl font-semi-bold'>
              Your Wishlist is empty.
            </p>
          ) : (
            <div className='flex justify-center gap-7 flex-wrap'>
              {products.products
                .filter((product) =>
                  wishlistData.some((item) => item.productId === product.id)
                )
                .map((product) => (
                  <div key={product.id} className='card flex flex-col'>
                    <div className='h-44 relative'>
                      <img
                        className='w-full object-cover h-full absolute rounded'
                        src={product.images[0]}
                        alt=''
                      />
                      <button
                        className='absolute  top-20  h-44 pb-9 pl-48'
                        onClick={() => handleRemoveFromWishlist(product.id)}
                      >
                        <AddToWishList productId={product.id} />
                      </button>
                    </div>

                    <div className='flex flex-col justify-between p-2'>
                      <h4 className='text-lg font-medium'>{product.name}</h4>
                      <div className='flex flex-row'>
                        <div className='flex justify-between w-full'>
                          <p className='text-lg text-[15px]'>
                            $ {product.price}
                          </p>
                          <p className='pl-10'>⭐⭐⭐⭐⭐</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )
        ) : (
          <p className='flex justify-center'>Waiting for products</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default WishListComonent;
