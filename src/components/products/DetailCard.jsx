import { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import useUserRoleState from "../../utils/isLogged";
import Seller from "./utils/Seller";
import Buyer from "./utils/Buyer";
import AddToCartButton from "../../components/cart/AddToCartButton";
import AddToWishList from "../wishlist/AddToWishList";
import CreateReview from "./review/CreateReview";
import Reviewers from "./review/Reviewers";
import StarRating from "./review/StarRatings";
import SimmilarItems from "../SimmilarItems";
import getUserInfo from "../../utils/getUserInfo";

const DetailCard = (props) => {
  const { product } = props;
  const [picImage, setPickImage] = useState(product.images[0]);
  const { userRole } = useUserRoleState();
  const info = getUserInfo();

  const handleImageClick = (img) => {
    setPickImage(img);
  };

  return (
    <div className='flex'>
      <div className='w-11/12 flex flex-col'>
        <div className='flex flex-row justify-evenly font-rubik p-10 xs:flex-col xs:justify-normal'>
          <div className='w-1/2 xs:w-full'>
            <div className='flex xs:flex-col'>
              <div className='w-1/4 xs:hidden'>
                {product.images.map((img, id) => {
                  return (
                    <img
                      src={img}
                      key={id}
                      className='w-[200px] h-24 object-cover rounded border-x-2 xs:hidden mb-3'
                      onMouseEnter={() => handleImageClick(img)}
                    />
                  );
                })}
              </div>
              <AwesomeSlider
                animation='foldOutAnimation'
                organicArrows={true}
                className='md:hidden sm:hidden mb-3'
              >
                {product.images.map((img, id) => (
                  <div key={id} data-src={img} />
                ))}
              </AwesomeSlider>

              <div className='w-full ml-3 xs:hidden'>
                <img
                  src={picImage}
                  className='bg-cover w-full h-96 object-cover'
                />
                {info?.data?.id ? (
                  <>
                    <div className='flex justify-start'>
                      <h3 className='text-slate-700 text-2xl font-bold xs:text-base py-8'>
                        Reviews
                      </h3>
                    </div>
                    <div>
                      <Reviewers productId={product.id} />
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className='w-1/3 mt-6 xs:w-full'>
            <p className='text-2xl text-slate-700 font-semibold xs:text-base'>
              {product.name}
            </p>
            <p className='mt-5 xs:text-sm'>{product.description}</p>
            <div className='flex flex-col xs:flex-row sm:justify-around'>
              <div>
                <p className='mt-6 text-2xl sm:text-base'>
                  {product.price} RWF
                </p>
                <div>
                  <StarRating value={product.averageRating} />
                </div>
              </div>
              {userRole == "seller" ? (
                <Seller />
              ) : (
                <div className='flex xs:mt-7'>
                  <div>
                    <AddToWishList productId={product.id} />
                  </div>
                  <div>
                    <AddToCartButton productId={product.id} />
                  </div>
                </div>
              )}
            </div>
            {userRole === "buyer" && (
              <div className='relative left-[13%]'>
                <CreateReview
                  productId={product.id}
                  isReviewed={product.isReviewed}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {info?.data?.id ? (
        <SimmilarItems categoryId={product.categoryId} id={product.id} />
      ) : (
        ""
      )}
    </div>
  );
};

export default DetailCard;
