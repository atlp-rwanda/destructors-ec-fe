import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSales,
  fetchSalesDetails,
  updateStatus,
} from "../../redux/reducers/saleSlice";
import Rectangle from "./utils/Rectangle";
import vector1 from "../../assets/Vector1.svg";
import vector2 from "../../assets/Vector2.svg";
import vector3 from "../../assets/Vector3.svg";
import { showSuccessMessage, showErrorMessage } from "../../utils/toast";

const SalesList = () => {
  const sales = useSelector((state) => state.sales?.sales?.Sales);
  const salesDetails = useSelector(
    (state) => state.salesDetails?.salesDetails?.Orders
  );

  const error = useSelector((state) => state.sales.error);
  const dispatch = useDispatch();
  const grad1 = "from-blue-300 to-green-300";
  const grad2 = "from-orange-300 to-green-300";
  const grad3 = "from-violet-300 to-green-300";
  let approvedSalesCount = 0;
  let rejectedSalesCount = 0;

  if (sales && sales.length) {
    approvedSalesCount = sales.filter(
      (sale) => sale.status === "approved"
    ).length;
    rejectedSalesCount = sales.filter(
      (sale) => sale.status === "rejected"
    ).length;
  }

  useEffect(() => {
    dispatch(fetchSales());
    dispatch(fetchSalesDetails());
  }, [dispatch]);

  const handleStatusUpdate = async (saleId, status) => {
    try {
      await dispatch(updateStatus({ saleId, status }));
      showSuccessMessage("Sale status updated successfully.");
      dispatch(fetchSales());
      dispatch(fetchSalesDetails());
    } catch (error) {
      showErrorMessage("Failed to update sale status. Please try again.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>
        <div className='flex px-2 justify-evenly xs:flex-col xs:gap-1'>
          <Rectangle
            backgroundImage={grad1}
            vector={vector1}
            size={sales?.length || "0"}
            title={"New Sales"}
          />
          <Rectangle
            backgroundImage={grad2}
            vector={vector2}
            size={approvedSalesCount || "0"}
            title={"Approved"}
          />
          <Rectangle
            backgroundImage={grad3}
            vector={vector3}
            size={rejectedSalesCount || "0"}
            title={"Rejected"}
          />
        </div>
      </div>
      <table className='min-w-full divide-y divide-gray-300 bg-white'>
        <thead>
          <tr className='divide-y text-[#848484] divide-gray-200'>
            <th>
              <h1>Sales</h1>
            </th>
          </tr>
          <tr>
            <th
              scope='col'
              className='py-3.5 pl-4 pr-3 text-left  text-[#848484] sm:pl-6'
            >
              Name
            </th>
            <th scope='col' className='px-3 py-3.5 text-left text-[#848484]'>
              Unit Price
            </th>
            <th scope='col' className='px-3 py-3.5 text-left text-[#848484]'>
              Quantity
            </th>
            <th scope='col' className='px-3 py-3.5 text-left text-[#848484]'>
              Status
            </th>
            <th scope='col' className='px-3 py-3.5 text-left text-[#848484]'>
              Date Created
            </th>
            <th
              scope='col'
              className='relative py-3.5 pl-3 pr-4 sm:pr-6 text-center text-[#848484]'
            >
              <span>Action</span>
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {sales?.map((sale) => {
            const saleDetails = salesDetails?.find(
              (details) => details.id === sale.orderId
            );
            console.log(sale.id);

            if (!saleDetails) {
              return null;
            }

            const product = saleDetails.products[0];
            return (
              <tr key={sale.id}>
                <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6'>
                  <div className='flex items-center'>
                    <div className='h-10 w-10 flex-shrink-0'>
                      <picture>
                        <source
                          media='(min-width: 650px)'
                          srcSet={product.images}
                        />
                        <source
                          media='(min-width: 465px)'
                          srcSet='/products.png'
                        />
                        <img src={product.images} />
                      </picture>
                    </div>
                    <div className='ml-4'>
                      <div className='font-medium text-gray-900'>
                        {product.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  {saleDetails.amount}
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  {product.quantity}
                </td>
                <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                  <span className='inline-flex rounded-full bg-[#F1C40F] px-4 py-1/2 text-xs font-semibold leading-5 text-white'>
                    {sale.status}
                  </span>
                </td>
                <td className='whitespace-nowrap px-3 py-4 py-1/2 text-sm text-gray-500'>
                  {sale.createdAt.split("T")[0]}
                </td>
                <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                  {sale.status === "approved" ? (
                    <button
                      disabled
                      className='mx-2 inline-flex rounded-full bg-[#80d8ee] font-we px-4 py-1/2 text-xs font-semibold leading-5 text-white'
                    >
                      Approve
                    </button>
                  ) : (
                    <button
                      className='mx-2 inline-flex rounded-full bg-[#00A3C6] px-4 py-1/2 text-xs font-semibold leading-5 text-white'
                      onClick={() => handleStatusUpdate(sale.id, "approved")}
                    >
                      Approve
                    </button>
                  )}

                  {sale.status === "rejected" ? (
                    <button
                      disabled
                      className='mx-2 inline-flex rounded-full bg-[#dc8c8c] px-4 py-1/2 text-xs font-semibold leading-5 text-white'
                    >
                      Reject
                    </button>
                  ) : (
                    <button
                      className='mx-2 inline-flex rounded-full bg-red px-4 py-1/2 text-xs font-semibold leading-5 text-white'
                      onClick={() => handleStatusUpdate(sale.id, "rejected")}
                    >
                      Reject
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SalesList;
