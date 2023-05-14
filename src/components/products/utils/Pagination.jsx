/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
function Pagination ({ totalProducts, productsPerPage }) {
  let pages = [];
  for (let i = 1 ; i <= Math.ceil(totalProducts / productsPerPage); i++){
    pages.push(i);
  }
  console.log(totalProducts);
  console.log(productsPerPage, '------');
  return (
    <div>
      {pages.map((page, index)=>{
        return <button key={index}>{page}</button>;
      })}
    </div>
  );
}

export default Pagination;
