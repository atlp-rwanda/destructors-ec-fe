/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useProductAll } from "./hooks";
import Spinner from "../Spinner";
import { useEffect, useState } from "react";
import AddToCartButton from "../cart/AddToCartButton";
import SearchedProducts from "../searchIputField/SearchedProducts";
import ChatApp from "../Chat/Chat.app";
import { getUserProfile } from "../../services/userApi";
import AddToWishList from "../wishlist/AddToWishList";
import getUserInfo from "../../utils/getUserInfo";
import StarRating from "./review/StarRatings";

function Product(props) {
  const { page } = props;
  const { products, status } = useProductAll(page);
  const searchMode = useSelector((state) => state.searchMode.value);
  const [userId, setUser] = useState(null);
  const info = getUserInfo();
  useEffect(() => {
    setUser(info?.data?.id);
  }, []);

  useEffect(() => {
    searchMode;
  }, [searchMode]);

  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };
  return (
    <>
      {searchMode ? (
        <SearchedProducts />
      ) : (
        <div className='px-10 font-rubik'>
          <h3 className='flex justify-center my-5 text-2xl font-semi-bold'></h3>
          {status === "loading" && (
            <div className='flex justify-center items-center flex-col'>
              <p>Loading...</p>
              <Spinner height={24} width={24} />
            </div>
          )}
          {status === "failed" && <p>Failed to fetch products.</p>}
          {status === "succeeded" && products ? (
            <div className='flex justify-center gap-7 flex-wrap'>
              {products?.products?.map((product) => (
                <div
                  key={product.id}
                  className='card flex flex-col'
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className='h-44 relative'>
                    <img
                      className='w-full object-cover h-full absolute rounded'
                      src={product.images[0]}
                      alt=''
                    />
                    {hoveredProductId === product.id && (
                      <div className='absolute right-0 flex   '>
                        <div
                          className='flex flex-col-reverse cursor-pointer  '
                          style={{
                            maxWidth: "70px",
                            maxHeight: "170px",
                            bottom: 0,
                          }}
                        >
                          <AddToCartButton productId={product?.id} />
                          <AddToWishList productId={product.id} />
                        </div>
                      </div>
                    )}
                  </div>
                  <Link to={`/products/${product.id}`}>
                    <div className='flex flex-col justify-between p-2'>
                      <h4 className='font-medium '>{product.name}</h4>
                      <div className='flex flex-row justify-between'>
                        <p className='text-[13px]'>{product.price}RWF</p>
                        <StarRating value={product.averageRating} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
              <div className='fixed top-[90%] xs:right-[100%] right-[80%]'>
                <ChatApp loggedInUser={userId} />
              </div>
            </div>
          ) : (
            <p className='flex justify-center'>Waiting for products</p>
          )}
        </div>
      )}
    </>
  );
}

export default Product;
