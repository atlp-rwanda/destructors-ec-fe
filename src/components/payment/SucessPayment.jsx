/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderedProducts } from '../../redux/actions/orderedProducts';
import paymentStatus from './paymentStatus';
import Spinner from "../Spinner";

const SucessPayment = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const paymentId = urlParams.get('paymentId');
  const { data, isLoading } = useSelector((state) => state.orderedProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderedProducts());
    paymentStatus(paymentId);
  }, []);

  const orderDetails = data?.Orders?.find(item => item.paymentId === paymentId);
  const product = (data.Orders.length > 0 && paymentId) ? orderDetails.products : [];
  return (
    <div>

      <div className="px-10 font-rubik">
        { paymentId ?
          <h3 className="flex justify-center my-5 text-2xl font-semi-bold text-primary">Order Created Successfully</h3> :
          <h3 className="flex justify-center my-5 text-2xl font-semi-bold text-primary">Ordered Products</h3>
        }
        { isLoading &&
          <div className="flex justify-center items-center flex-col">
            <p>Loading...</p>
            <Spinner height={6} width={6}/>
          </div>
        }
        <div className="flex justify-center gap-7 flex-wrap pt-11">
          { (product.length > 0 ) &&
          product.map((product) => (
            <div key={product.id} className="card flex flex-col">
              <div className="h-44 relative">
                <img
                  className="w-full object-cover h-full absolute rounded"
                  src={product.image[0]}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between p-2">
                <h4 className="text-lg font-bold">{product.name}</h4>
                <p className="text-[15px] mb-2">
                    Quantity: {product.quantity} pieces
                </p>
                <div className="flex flex-row justify-between">
                  <p className="text-lg text-[15px]">
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=' w-full flex justify-center items-center flex-col'>
          { paymentId ?
            <p className=' text-xl justify-between py-[100px]  px-[150px] xs:px-[15px] sm:px[20px]'>Thank you for shopping at DESTRUCTORS online shop. We hope that it’s exactly what you were looking for. Let us know how you like it!!</p> :
            <p className=' py-[100px]   text-2xl  xs:mx-auto'>No Order was found!!</p>
          }
        </div>
      </div>
    </div>
  );
};
export default SucessPayment;
