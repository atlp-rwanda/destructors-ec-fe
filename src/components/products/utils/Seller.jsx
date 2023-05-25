function Seller () {
  return (
    <div className="text-white ml-4 xs:text-sm">
      <div className="flex justify-around xs:flex-col gap-3 xs:mt-6">
        <button className="border-black hover:bg-secondary bg-primary rounded w-32 xs:w-28">Edit Product</button>
        <button className="border-black hover:bg-secondary bg-primary rounded w-32 xs:w-28">Delete Product</button>
      </div>
    </div>
  );
}

export default Seller;
