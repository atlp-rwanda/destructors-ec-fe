/* eslint-disable indent */
/* eslint-disable no-restricted-syntax */
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveCategories } from "../../redux/actions/retreiveCategories";
import {
  searchProducts,
  retrieveAllProducts,
} from "../../redux/actions/searchProducts";
import {
  searchMode,
  removeSearchMode,
} from "../../redux/reducers/searchProductsSlice";
import InputField from "../forms/InputField";
import SearchedProductDialog from "./SeachedProductDialog";

const SearchField = () => {
  const { products } = useSelector((state) => state.filteredProducts);
  const categoriesList = useSelector((state) => state.categories.value);
  const searchStatus = useSelector((state) => state.searchMode.value);
  const [searchCriteria, setSearchCriteria] = useState({});
  const [searchedProductDetails, setSearchedProductDetails] = useState({});
  const [searchOptions, setSearchOptions] = useState(false);
  const [results, setResults] = useState([]);
  const [autoFill, setAutoFill] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveCategories());
    dispatch(retrieveAllProducts());
  }, [dispatch, autoFill]);

  const handleSearch = async () => {
    if (Object.keys(searchCriteria).length != 0) {
      setSearchedProductDetails(searchCriteria);
      dispatch(searchMode());
      await dispatch(searchProducts(searchCriteria));
      setSearchOptions(false);
    }
  };

  const handleSearchOptions = async () => {
    setSearchOptions(!searchOptions);
  };

  const handleRemoveSearchMode = async () => {
    dispatch(removeSearchMode());
    setAutoFill([]);
    setSearchCriteria({});
  };

  const handleSearchFilter = async (e) => {
    setSearchOptions(false);
    setAutoFill(e.target.value);
    setSearchCriteria({ ...searchCriteria, name: e.target.value });

    const results = products.filter((item) => {
      return (
        e.target.value &&
        item &&
        item.name &&
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });

    setResults(results);
  };

  const handleSuggestions = (text) => {
    setAutoFill(text);
    setSearchCriteria({ ...searchCriteria, name: text });
    setResults([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className='flex h-9 xs:hidden font-rubik'>
        <input
          value='Filters'
          type='button'
          onClick={handleSearchOptions}
          className=' w-32 text-center border-secondary rounded-l border-2 border-r-0 hover:bg-slate-200'
        />
        <input
          type='text'
          placeholder='search for products'
          onChange={(e) => handleSearchFilter(e)}
          value={autoFill}
          onBlur={() => {
            setTimeout(() => {
              setResults([]);
              setSearchOptions(false);
            }, 200);
          }}
          onKeyPress={handleKeyPress}
          className='border-2 border-secondary border-r-0 rounded-none border-l-slate-400 w-64 text-center outline-none'
        />
        <button
          className='border-2 rounded-r w-10 flex justify-center cursor-pointer hover:bg-[#2198e7] items-center bg-secondary text-white border-secondary'
          data-testid='searchButton'
          onClick={handleSearch}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </div>
      {searchStatus && (
        <SearchedProductDialog
          searchCriteria={searchedProductDetails}
          handleRemoveSearchMode={handleRemoveSearchMode}
        />
      )}
      <div className=' bg-slate-100 mt-2 absolute z-50 w-[424px] max-h-[300px] overflow-y-auto'>
        {results.map((item) => {
          return (
            <div
              className=' p-3 hover:bg-secondary'
              key={item.id}
              onClick={() => handleSuggestions(item.name)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      {searchOptions && (
        <div className=' bg-slate-100 p-3 absolute z-50'>
          <select
            defaultValue=''
            className='border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-[5px] mb-[10px] text-slate-600 xs  placeholder:text-slate-300'
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                categoryId: e.target.value,
              })
            }
          >
            <option disabled hidden value='' className='text-slate-300'>
              {" "}
              --Select product categories--{" "}
            </option>
            {categoriesList?.map((data) => (
              <option
                value={data.id}
                key={data.id}
                onClick={() =>
                  setSearchCriteria({ ...searchCriteria, category: data.name })
                }
              >
                {data.name}
              </option>
            ))}
          </select>
          <InputField
            placeholder='Minimum price'
            type='text'
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, minPrice: e.target.value })
            }
            className=' border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-[35px]  text-slate-600 xs  placeholder:text-slate-300'
          />
          <InputField
            placeholder='Maximum price'
            type='text'
            onChange={(e) =>
              setSearchCriteria({ ...searchCriteria, maxPrice: e.target.value })
            }
            className=' border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-[35px]  text-slate-600 xs  placeholder:text-slate-300'
          />
          <InputField
            placeholder='2022/06/10'
            type='date'
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                bestBefore: e.target.value,
              })
            }
            className=' border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-[35px]  text-slate-600 xs  placeholder:text-slate-300'
          />
        </div>
      )}
    </div>
  );
};

export default SearchField;
