/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import { useState } from "react";
import useUserRoleState from "../../utils/isLogged";
import Seller from "./utils/Seller";
import Buyer from "./utils/Buyer";
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';

function DetailCard (props) {
  const { product } = props;
  const [picImage, setPickImage] = useState(product.images[0]);
  const { userRole } = useUserRoleState();

  const handleImageClick = (img) => {
    setPickImage(img);
  };

  return (
    <div className="w-11/12 flex flex-col items-center justify-center">
      <div className="flex flex-row justify-evenly font-rubik p-10 xs:flex-col xs:justify-normal">
        <div className="w-1/2 xs:w-full">
          <div className="flex xs:flex-col">
            <div className="w-1/4 xs:hidden">
              {product.images.map((img, id) => {
                return (
                  <img
                    src={img}
                    key={id}
                    className="w-[200px] rounded border-x-2 xs:hidden"
                    onClick={() => handleImageClick(img)}
                  />
                );
              })}
            </div>
            <AwesomeSlider animation="foldOutAnimation" organicArrows={true} className="md:hidden sm:hidden mb-3">
              {product.images.map((img, id) => (
                <div key={id} data-src={img} />
              ))}
            </AwesomeSlider>
            <div className="w-full ml-3 xs:hidden">
              <img src={picImage} className="bg-cover w-full h-96" />
            </div>
          </div>
        </div>
        <div className="w-1/3 mt-6 xs:w-full">
          <p className="text-2xl text-slate-700 font-semibold xs:text-base">
            {product.name}
          </p>
          <p className="mt-5 xs:text-sm">{product.description}</p>
          <div className="flex flex-col xs:flex-row sm:justify-around">
            <div>
              <p className="mt-6 text-2xl sm:text-base">{product.price} RWF</p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
            {userRole == "seller" ? (
              <Seller />
            ) : (
              <div className="flex xs:mt-7">
                <Buyer />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h3 className="text-slate-700 text-2xl font-bold xs:text-base">
          Reviews
        </h3>
      </div>
    </div>
  );
}

export default DetailCard;
