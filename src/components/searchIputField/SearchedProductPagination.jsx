/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React from 'react';

const Paginate = ({ productsPerPage, totalProducts, paginate, page, previousPage, nextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <ul className=" flex justify-center   mt-16 gap-[20px]">
        <li
          onClick={previousPage}
          className={`px-3 py-2 rounded-md ${
            page === 1
              ? "bg-gray-300 text-sm text-gray-500 cursor-not-allowed hidden"
              : "bg-primary text-sm text-white hover:bg-secondary"
          }`}>
              Previous
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 py-2 rounded-md ${
              page === number
                ? "bg-gray-300 text-sm text-gray-500 cursor-not-allowed"
                : "bg-primary text-sm text-white hover:bg-secondary"
            }`}
          >
            {number}
          </li>
        ))}
        <li
          onClick={nextPage}
          className={`px-3 py-2 rounded-md ${
            page === Math.ceil(totalProducts / productsPerPage)
              ? "bg-gray-300 text-sm text-gray-500 cursor-not-allowed hidden"
              : "bg-primary text-sm text-white hover:bg-secondary"
          }`}>
               Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
