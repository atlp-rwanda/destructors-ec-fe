/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../redux/reducers/deleteProductSlice';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';

const HandleDeleteProduct = ({ productId }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cancelConfirmation = () => {
    setShowConfirmation(false);
  };

  const deleteSingleProduct = async (event) => {
    event.preventDefault();

    try {
      const singleProduct = await dispatch(deleteProduct(productId)).unwrap();
      showSuccessMessage(singleProduct);
    } catch (error) {
      showErrorMessage(error);
    } finally {
      cancelConfirmation();
      navigate('/');
    }
  };

  const openConfirmation = () => {
    setShowConfirmation(true);
  };

  const renderLogoutConfirmation = () => (
    <div className="fixed inset-0 flex top-0 left-0 w-full h-full items-center justify-center bg-gray-700 bg-opacity-75 z-80">
      <div className="w-68 max-w-md p-6 bg-white rounded-lg border shadow" role="alert">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 text-white mr-2 bg-red rounded-full flex items-center justify-center">
            !
          </div>
          <span className="text-lg font-semibold text-red-600">Delete Product</span>
        </div>
        <div className="text-base font-normal mb-4 mt-2">Are you sure you want to delete this product?</div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex w-96">
            <button
              className="w-full px-2 py-1 text-base font-medium  text-white bg-customBlue rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 mr-20 cursor-pointer"
              onClick={cancelConfirmation}
            >
              No
            </button>
            <button
              className=" w-full px-2 py-1 text-base font-medium text-red bg-white border  border-red rounded-lg hover:bg-white hover:text-bgRed focus:ring-4 focus:outline-none focus:ring-red cursor-pointer"
              onClick={deleteSingleProduct}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return {
    cancelConfirmation,
    showConfirmation,
    renderLogoutConfirmation,
    openConfirmation,
  };
};

export default HandleDeleteProduct;
