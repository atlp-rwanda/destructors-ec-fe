import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, clearCart, updateCartItemQuantity, removeFromCart } from '../../redux/actions/cartActions';
import classes from './CartComponent.module.css';
import emptyCart from '../../assets/cart.svg';
import NavBar from '../navBar/NavBar';
const CartComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isCartCleared, setCartCleared] = useState(false);
  const [productId, setProductId] = useState('');
  const [isLoading, setLoading] = useState(false);
const [currentCart,setCurrentCart]=useState([])

  useEffect(() => {
    dispatch(fetchCart());
    setCurrentCart(cartItems)
  }, [dispatch, isCartCleared, isLoading]);

  const handleClearCart = async () => {
    try {
      const result = await dispatch(clearCart());
      if (result.meta.requestStatus === 'fulfilled') {
        alert(result.payload?.message);
        setCartCleared(true);
      } else {
        const errorMessage = result.payload?.message;
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error while clearing cart:', error);
    }
  };

  const handleEditQuantity = (productId) => {
    setProductId(productId);
  };
  

  const handleUpdateQuantity = async (itemId) => {
    await dispatch(updateCartItemQuantity({ itemId,})).then(() => {
      setProductId('');

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
      console.error('Error while removing item from cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUpdatedCart = async () => {
    try {
      await dispatch(fetchCart());
    } catch (error) {
      console.error('Error while fetching updated cart:', error);
    }
  };
;

  return (
    <div className='pt-5'>

      <div >
        {isCartCleared || cartItems.length === 0 ? (
          <div>
            <img className='flex w-full  justify-center items-center  ' src={emptyCart} style={{ maxWidth: '70rem', maxHeight: '70rem' }} />
            <p className='flex w-full  justify-center text-[#CCCCCC]'>your cart is empty</p>
          </div>
        ) : (
          <div className='flex justify-between m-5 xs:flex-col '>
            <div className={classes.containe}>
              {cartItems.map((item) => (
                <div key={item.id} className='flex'>
                  <div className={`xs:m-0 xs:bg-white ${classes.card}`}>
                    {item.images && item.images.length > 0 && (
                      <div className='xs:bg-[#F7FAFC] xs:flex xs:items-center xs:justify-center'> <img className=' xs:mt-0 xs:p-5 mt-20 ' src={item.images[0]} alt={item.name} style={{ maxWidth: '150px', maxHeight: '150px' }} /></div>
                     
                    )}

                    <div className='flex'>
                      <div className={classes.padding}>
                        <p className={classes.p}>{item.name}</p>
                        <p className={classes.p}>
                          Quantity:{' '}
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
                            className={`m-2 rounded-md border-2 bg-[#2D719D] mt-8 py-1 px-5 text-white ${classes.editButton}`} onClick={() => handleUpdateQuantity(item.id)}
                            
                          >+
           
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
                <p>{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
              </div>

              <button className='w-full my-2 h-[45px] rounded-md bg-[#FEFCBF] mt-5 py-2 px-3 text-sm font-semibold text-black hover:bg-[#F6E05E]' onClick={handleClearCart}>
        <p>clear cart</p>
          
        </button>

              <button className='w-full my-2 h-[45px] rounded-md bg-[#2D719D] mt-5 py-2 px-3 text-sm font-semibold text-white hover:bg-[#2198e7]'>
                Checkout
              </button>
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
