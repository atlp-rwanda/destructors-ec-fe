import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToWishilist } from '../../redux/actions/wishListActions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import addtowishlist from '../../assets/addtowishlist.png';
import { getProductWishilist } from '../../redux/actions/wishListActions';
const AddToWishList = (productId) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = async () => {
    const wishListData = productId;
    const result = await dispatch(addProductToWishilist(productId));
    if (addProductToWishilist.fulfilled.match(result)) {
      await getProductWishilist();
      toast.success(result.payload.message);
    } else {
      const errorMessage =
        result.payload?.message || 'Failed to add to wishlist.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className=' flex justify-end '>
      <img
        className=' '
        src={addtowishlist}
        alt='addtowishlist'
        onClick={handleAddToWishlist}
      />
    </div>
  );
};

export default AddToWishList;
