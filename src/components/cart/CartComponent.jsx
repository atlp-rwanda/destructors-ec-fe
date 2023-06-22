import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  clearCart,
  updateCartItemQuantity,
  removeFromCart,
} from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import classes from "./CartComponent.module.css";
import emptyCart from "../../assets/cart.svg";
import { payment } from "../../redux/actions/paymentAction";
import Button from "../forms/Button";
const CartComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const loading = useSelector((state) => state.payment.isLoading);
  const [isCartCleared, setCartCleared] = useState(false);
  const [productId, setProductId] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    dispatch(fetchCart());
    setCurrentCart(cartItems);
  }, [dispatch, isCartCleared, isLoading]);

  const handleClearCart = async () => {
    try {
      const result = await dispatch(clearCart());
      if (result.meta.requestStatus === "fulfilled") {
        alert(result.payload?.message);
        setCartCleared(true);
      } else {
        const errorMessage = result.payload?.message;
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Error while clearing cart:", error);
    }
  };

  const handleEditQuantity = (productId) => {
    setProductId(productId);
  };

  const handleCheckout = async () => {
    const response = await dispatch(payment()).unwrap();
    window.location.href = `${response.payment_link}`;
  };

  const handleUpdateQuantity = async (itemId) => {
    await dispatch(updateCartItemQuantity({ itemId })).then(() => {
      setProductId("");
    });
    dispatch(fetchCart());
  };

  const handleRemoveFromCart = async (itemId) => {
    setLoading(true);
    try {
      await dispatch(removeFromCart(itemId));
      if (cartItems.length === 1) {
        await fetchUpdatedCart();
      }
    } catch (error) {
      console.error("Error while removing item from cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUpdatedCart = async () => {
    try {
      await dispatch(fetchCart());
    } catch (error) {
      console.error("Error while fetching updated cart:", error);
    }
  };

  return (
    <div className='pt-5'>
      <div>
        {isCartCleared || cartItems.length === 0 ? (
          <div>
            <Link to={"/"}>
              <div className='flex items-center justify-center'>
                <p className='text-[#2D719D] underline text-lg font-semibold'>
                  Back to Home
                </p>
              </div>
            </Link>
            <img
              className='flex w-full  justify-center items-center  '
              src={emptyCart}
              style={{ maxWidth: "70rem", maxHeight: "70rem" }}
            />
            <p className='flex w-full  justify-center text-[#CCCCCC]'>
              your cart is empty
            </p>
          </div>
        ) : (
          <div className='flex justify-between m-5 xs:flex-col '>
            <div className={classes.containe}>
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.id} className='flex'>
                    <div className={`xs:m-0 xs:bg-white ${classes.card}`}>
                      {item.images && item.images.length > 0 && (
                        <div className='xs:bg-[#F7FAFC] xs:flex xs:items-center xs:justify-center'>
                          {" "}
                          <img
                            className=' xs:mt-0 xs:p-5 mt-20 '
                            src={item.images[0]}
                            alt={item.name}
                            style={{ maxWidth: "150px", maxHeight: "150px" }}
                          />
                        </div>
                      )}

                      <div className='flex'>
                        <div className={classes.padding}>
                          <p className={classes.p}>{item.name}</p>
                          <p className={classes.p}>
                            Quantity:{" "}
                            {productId === item.id ? (
                              <input
                                type='number'
                                value={item.quantity}
                                className={classes.inputQuantity}
                              />
                            ) : (
                              item.quantity
                            )}
                          </p>
                          {productId === item.id ? (
                            <button
                              className={`m-2 rounded-md border-2 bg-[#2D719D] mt-8 py-1 px-5 text-white ${classes.editButton}`}
                              onClick={() => handleUpdateQuantity(item.id)}
                            >
                              +
                            </button>
                          ) : (
                            <button
                              className={`m-2 rounded-md border-2 bg-[#2D719D] mt-8 py-1 px-5 text-white ${classes.editButton}`}
                              onClick={() => handleEditQuantity(item.id)}
                            >
                              edit
                            </button>
                          )}
                        </div>
                        <div className='mr-10'>
                          <p className={classes.p}>$ {item.price}</p>
                          {cartItems.length > 0 && (
                            <button
                              className='m-2 rounded-md border-2 border-[#37475A] mt-20 py-1 px-3 text-sm text-black'
                              onClick={() => handleRemoveFromCart(item.id)}
                            >
                              remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className={` mt-5 xs:flex${classes.buttons} mdl:w-1/6`}>
              <div className='flex justify-evenly p-3 border-solid border-2 border-gray-200'>
                <p className='md:font-bold'>total:</p>
                <p>
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )}
                </p>
              </div>

              <button
                className='w-full my-2 h-[45px] rounded-md bg-[#FEFCBF] mt-5 py-2 px-3 text-sm font-semibold text-black hover:bg-[#F6E05E]'
                onClick={handleClearCart}
              >
                <p>clear cart</p>
              </button>
              {loading ? (
                <>
                  <Button type='submit' label='' className='' disabled={true}>
                    <svg
                      role='status'
                      className='inline mr-3 w-4 h-4 text-white animate-spin'
                      viewBox='0 0 100 101'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                        fill='#E5E7EB'
                      />
                      <path
                        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                        fill='currentColor'
                      />
                    </svg>
                  </Button>
                </>
              ) : (
                <Button
                  type='submit'
                  label='Checkout'
                  className='w-full my-2 h-[45px] rounded-md bg-[#2D719D] mt-5 py-2 px-3 text-sm font-semibold text-white hover:bg-[#2198e7]'
                  onClick={handleCheckout}
                />
              )}
            </div>
            <div></div>
          </div>
        )}
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default CartComponent;
