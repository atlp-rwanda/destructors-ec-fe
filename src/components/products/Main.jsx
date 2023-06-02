/* eslint-disable no-restricted-syntax */
import { useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import { useProductAll } from "./hooks";
function Main () {
  const searchStatus = useSelector((state) => state.searchMode.value);
  const [page, setPage] = useState(0);
  const { products } = useProductAll();
  const totalPages = products.totalPages;
  const Pagenation = () => {
    const buttons = [];

    buttons.push(
      <button
        key="prev"
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
        className={`px-3 py-2 rounded-md ${
          page === 0
            ? "bg-gray-300 text-sm text-gray-500 cursor-not-allowed"
            : "bg-primary text-sm text-white hover:bg-secondary"
        }`}
      >
        Previous
      </button >,
    );

    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          disabled={page === i + 1}
          className={`px-3 py-2 rounded-md ${
            page === i
              ? "bg-gray-300 text-sm text-gray-500 cursor-not-allowed"
              : "bg-primary text-sm text-white hover:bg-secondary"
          }`}
        >
          {i + 1}
        </button>,
      );
    }

    buttons.push(
      <button
        key="next"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages - 1}
        className={`px-3 py-2 rounded-md ${
          page === totalPages - 1
            ? "bg-gray-300 text-sm text-gray-500 cursor-not-allowed"
            : "bg-primary text-sm text-white hover:bg-secondary"
        }`}
      >
        Next
      </button>,
    );

    return buttons;
  };

  return (
    <div>
      <Product page={page} />
      {!searchStatus &&
      <div className="flex justify-center gap-3 mt-16">
        <Pagenation />
      </div>
      }
    </div>
  );
}

export default Main;
