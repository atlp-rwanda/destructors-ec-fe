/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import {wishedProduct} from "../../redux/actions/wishedProducts";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../utils/Table";

export default function WishedProducts () {
  const dispatch = useDispatch();
  const {data, isLoading, error} = useSelector((state) => state.wishedProducts);
  const today = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const [date, setDate] = useState(today);
  useEffect(()=>{
    dispatch(wishedProduct());
  }, [dispatch]);
  const formatDate = (date)=>{
    const localDate = new Date(date);
    const convertedDate = localDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return convertedDate;
  };
  let arr = [];
  const product = data[0];
  const products = product?.map((data)=>{
    arr.push({
      id:data.productDetails?.item?.id,
      name:data.productDetails?.item?.name,
      price:data.productDetails?.item?.price,
      image:data.productDetails?.item?.images,
      quantity:data?.quantity,
      date: formatDate(data.productDetails?.item?.createdAt),
    });
  });
  const column = [
    {field:"Image", value:"image"},
    {field:'name', value:'name'},
    {field:'unitPrice', value:'price'},
    {field:'quantity', value:'quantity'},
    {field:'date', value:'date'},
  ];
  const titleBlock = [
    {field:"wished Products"},
    {field:`${date}`},
  ];
  return (
    <div className="flex flex-col w-fit">
      {isLoading && <p className="animate-bounce">Loading Please wait</p>}
      {data.length === 0 ? "" : (
        <Table data={arr} columns={column} date={titleBlock}/>
      )}
    </div>
  );
}

