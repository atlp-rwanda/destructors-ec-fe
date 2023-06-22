/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-syntax */
/* eslint-disable require-jsdoc */
import { Link, useParams } from "react-router-dom";
import HandleDeleteProduct from "../deleteProduct";

function Seller() {
  const { id } = useParams();
  const { renderLogoutConfirmation, openConfirmation, showConfirmation } =
    HandleDeleteProduct({ productId: id });

  return (
    <div>
      {showConfirmation && renderLogoutConfirmation()}
      <div className='text-white ml-4 xs:text-sm'>
        <div className='flex justify-around xs:flex-col gap-3 xs:mt-6'>
          <button className='border-black hover:bg-secondary bg-primary rounded w-32 xs:w-28'>
            <Link to={`/dashboard/seller/products/${id}/update-product`}>
              Edit Product
            </Link>
          </button>
          <button
            className='border  border-red hover:bg-white hover:text-bgRed text-red bg-white rounded w-32 xs:w-28'
            onClick={openConfirmation}
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default Seller;
