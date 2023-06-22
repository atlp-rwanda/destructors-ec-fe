import React, { useEffect, useState } from "react";
import { GetAllOrders } from "../../components/orders/getAllOrders";
import getUserInfo from "../../utils/getUserInfo";

const OrdersPage = () => {
  const [user, setUser] = useState();
  const info = getUserInfo();

  useEffect(() => {
    setUser(info);
  }, []);
  return (
    <div className='flex'>
      <div className='flex flex-col bg-[#F8F7FC] flex-grow mb-8'>
        <div>
          {user?.data?.role === "buyer" && (
            <div className='flex justify-center'>
              <GetAllOrders />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
