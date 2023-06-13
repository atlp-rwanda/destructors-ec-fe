/* eslint-disable no-restricted-syntax */
import DetailCard from "./DetailCard";
import NavBar from "../navBar/NavBar";
import BottomNav from "../navBar/BottomNav";
import Spinner from "../Spinner";
import { useProductDetails } from "./hooks";

function ProductDetails () {
  const {products, status, error} = useProductDetails();
  return (
    <div>
      <NavBar />
      <BottomNav />
      {status === "loading" && <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && products.id ? (
        <DetailCard product={products} />
      ) : (
        <div className="flex justify-center mt-20 flex-col items-center">
          <Spinner />
          <p className="font-rubik">Loading please wait</p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
