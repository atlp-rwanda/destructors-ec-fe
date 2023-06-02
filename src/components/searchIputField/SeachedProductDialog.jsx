/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';

const SeachedProductDialog = ({ searchCriteria, handleRemoveSearchMode }) => {
  const categoriesList = useSelector((state) => state.categories.value);
  return (
    <div>
      <div className=' mt-2 w-[424px] text-lg pb-3'>

        <div onClick={handleRemoveSearchMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-red  ml-[95%]">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <div className=' mb-3'>
          {searchCriteria.name &&
                        <div className=' text-sky-900 flex gap-1 ml-9'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                            Product: {searchCriteria.name}
                        </div>}
        </div>

        <div className=' mb-3'>
          {searchCriteria.categoryId &&
                        <div className=' text-sky-900 flex gap-1 ml-9'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                          </svg>

                            Category: {categoriesList.find(( item  => item.id === searchCriteria.categoryId)).name}
                        </div>}
        </div>

        <div className=' my-3'>
          {(searchCriteria.maxPrice || searchCriteria.minPrice) &&
                        <div className=' text-sky-900 flex gap-1 ml-9'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>

                          {searchCriteria.maxPrice && <em className={` text-[16px] ${!searchCriteria.minPrice && " text-lg"}`}>Max: {searchCriteria.maxPrice} RWF</em>}
                          {searchCriteria.minPrice && <em className={` text-lg ${searchCriteria.maxPrice && "px-3 text-[16px]"}`}>Min: {searchCriteria.minPrice} RWF</em>}
                        </div>}
        </div>

        <div className=' my-3'>
          {searchCriteria.bestBefore &&
                        <div className=' text-sky-900 flex gap-1 ml-9'>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                            />
                          </svg>
                            Date: {searchCriteria.bestBefore}
                        </div>}
        </div>

      </div>
    </div>
  );
};

export default SeachedProductDialog;
