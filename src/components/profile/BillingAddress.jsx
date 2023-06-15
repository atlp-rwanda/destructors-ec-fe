/* eslint-disable no-restricted-syntax */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../../redux/reducers/profileSlice";

const BillingAddress = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isError } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (isLoading) {
    return <div className="flex justify-center mt-5">
      <div className="animate-bounce">
        <span>Loading...</span>
      </div>
    </div>;
  }

  if (isError) {
    return <div>Error occurred while fetching user profile.</div>;
  }

  const address = user?.payload?.user_details.billingAddress || {};

  return (
    <>
      <div className="flex h-full font-poppins">
        <div className="relative z-0 flex flex-1 overflow-hidden">
          <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-[18px] font-bold leading-6 text-gray-900">Address Details</h3>
                </div>
                <div>
                  <table>
                    <tbody>
                      <tr>
                        <td className=" px-4 py-2 ">Email:</td>
                        <td className=" px-4 py-2 text-[#8F8F8F] text-[16px] ">{address.email || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2 ">Phone Number:</td>
                        <td className=" px-4 py-2 text-[#8F8F8F] text-[16px] ">{address.phoneNo || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2 ">Province:</td>
                        <td className=" px-4 py-2 text-[#8F8F8F] text-[16px]">{address.province || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2 ">District:</td>
                        <td className=" px-4 py-2 text-[#8F8F8F] text-[16px]">{address.district || "N/A"}</td>
                      </tr>
                      <tr>
                        <td className=" px-4 py-2 ">Street:</td>
                        <td className=" px-4 py-2 text-[#8F8F8F] text-[16px] ">{address.street || "N/A"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
};

export default BillingAddress;
