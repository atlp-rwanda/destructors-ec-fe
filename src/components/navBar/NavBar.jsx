
import Logo from '../../assets/Logo.svg';

const categoriesList = [
  { label: "All", value: "All" },
  { label: "Shoes", value: "Shoes" },
  { label: "electronics", value: "Electronics" },
];
function NavBar () {
  const handleClick = (event) => {
    const label = event.target.value;
    console.log(label);
  };
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="">
        <img src={Logo} alt='log' />
      </div>
      <div>
        <div className="flex h-9 font-rubik">
          <select
            className="w-32 text-center border-secondary rounded-l border-2 border-r-0"
            onClick={handleClick}
          >
            {categoriesList.map((data, id) => (
              <option key={id}>{data.label}</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="search for products"
            className="border-2 border-secondary border-r-0 rounded-none border-l-slate-400 w-64 text-center outline-none"
          />
          <button className="border-2 rounded-r w-10 flex justify-center cursor-pointer hover:bg-blue-700 items-center bg-secondary text-white border-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex gap-2 cursor-pointer">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 6H18C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6H3C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.31607 7.44129 0 8.20435 0 9L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6H8C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H6V10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10V8H16V10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10V8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V19Z"
            fill="#555555"
          />
        </svg>

        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.0003 19.3348C19.1095 19.3348 21.9357 18.5511 22.2087 15.4054C22.2087 12.2619 20.2382 12.464 20.2382 8.60704C20.2382 5.59432 17.3827 2.1665 13.0003 2.1665C8.61799 2.1665 5.76241 5.59432 5.76241 8.60704C5.76241 12.464 3.79199 12.2619 3.79199 15.4054C4.06602 18.563 6.89225 19.3348 13.0003 19.3348Z"
            stroke="#555555"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5886 22.5952C14.1108 24.2362 11.8054 24.2556 10.3135 22.5952"
            stroke="#555555"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="22"
          height="24"
          viewBox="0 0 22 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6186 11.1284C16.1543 10.0084 17.1544 8.19581 17.1544 6.15384C17.1544 2.76061 14.3937 0 11.0005 0C7.60727 0 4.84666 2.76061 4.84666 6.15384C4.84666 8.19581 5.84665 10.0084 7.38237 11.1284C3.56487 12.5892 0.84668 16.2905 0.84668 20.6154C0.84668 22.4817 2.36501 24 4.23129 24H17.7697C19.636 24 21.1543 22.4817 21.1543 20.6154C21.1543 16.2905 18.4362 12.5892 14.6186 11.1284ZM6.69284 6.15384C6.69284 3.77859 8.62526 1.84617 11.0005 1.84617C13.3758 1.84617 15.3082 3.77859 15.3082 6.15384C15.3082 8.52909 13.3758 10.4616 11.0005 10.4616C8.62526 10.4616 6.69284 8.52909 6.69284 6.15384ZM17.7697 22.1538H4.23129C3.38299 22.1538 2.69285 21.4637 2.69285 20.6153C2.69285 16.0344 6.4196 12.3076 11.0006 12.3076C15.5815 12.3076 19.3083 16.0344 19.3083 20.6153C19.3082 21.4637 18.6181 22.1538 17.7697 22.1538Z"
            fill="#555555"
          />
        </svg>
      </div>
    </div>
  );
}

export default NavBar;