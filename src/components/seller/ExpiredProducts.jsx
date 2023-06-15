import React, { useState } from 'react';
import { useExpiredProducts } from '../products/hooks';
import Table from '../../utils/Table';
import Spinner from '../Spinner';

function ExpiredProducts () {
  const products = useExpiredProducts();
  const today = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const [date,setDate] = useState(today);
  const column = [
    {field:"Image", value:"images"},
    {field:"Name", value:"name"},
    {field:"price", value:"price"},
    {field:"quantity", value:"quantity"},
  ];
  const titleBlock = [
    {field:"expired products"},
    {field:`${date}`},
  ];
  return (
    <div>
      {products.isLoading && <Spinner height={6} width={6} />}
      {!products.products ? <p>No products found</p> : (
        <Table data={products.products} columns={column} date={titleBlock}/>
      )}
    </div>
  );
}

export default ExpiredProducts;
