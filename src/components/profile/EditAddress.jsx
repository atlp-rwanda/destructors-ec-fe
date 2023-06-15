/* eslint-disable no-restricted-syntax */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile, updateUserProfileData } from "../../redux/reducers/profileSlice";
import ProfileMenu from "./ProfileMenu";
import { showErrorMessage, showSuccessMessage } from "../../utils/toast";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Spinner from "../Spinner";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email address").required("Email is required"),
  phoneNo: yup.string().required("Phone number is required"),
  province: yup.string().required("Province is required"),
  district: yup.string().required("District is required"),
  street: yup.string().required("Street is required"),
});

export default function UpdateAddress () {
  const dispatch = useDispatch();
  const { user, isLoading, isError } = useSelector(({ profile }) => profile);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const userDetails = user?.payload?.user_details.billingAddress;
      reset(userDetails);
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    const updatedBillingAddress = {
      email: data.email,
      phoneNo: data.phoneNo,
      province: data.province,
      district: data.district,
      street: data.street,
    };

    dispatch(updateUserProfileData(updatedBillingAddress))
      .then(() => {
        showSuccessMessage("User profile updated successfully");
        console.log("User profile updated successfully");
      })
      .catch((error) => {
        showErrorMessage("Error updating user profile");
        console.error("Error updating user profile:", error);
      });
  };

  if (isLoading) {
    return (
      <div>
        <Spinner height={6} width={6}/>
        Loading...
      </div>
    );
  }

  if (isError) {
    return <div>Error occurred while fetching user profile.</div>;
  }

  return (
    <div>
      <main className="relative lg:pl-24 lg:-pr-20 font-poppins">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden ">
            <div className="lg:grid lg:grid-cols-12">
              <ProfileMenu />

              <div className="lg:col-span-9">
                {/* Profile section */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="shadow sm:overflow-hidden sm">
                        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                          <div className="space-y-6 sm:space-y-5">
                            <div className="space-y-6 sm:space-y-5">
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="email"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Email
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="email"
                                    {...register("email")}
                                    className={`mt-1 block w-2/3 border ${
                                      errors.email ? "border-red-500" : "border-gray-300"
                                    } py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
                                  />
                                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="phone-number"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Phone Number
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="phoneNo"
                                    {...register("phoneNo")}
                                    className={`mt-1 block w-2/3 border ${
                                      errors.phoneNo ? "border-red-500" : "border-gray-300"
                                    } py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
                                  />
                                  {errors.phoneNo && <p className="text-red-500">{errors.phoneNo.message}</p>}
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="province"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Province
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="province"
                                    {...register("province")}
                                    className={`mt-1 block w-2/3 border ${
                                      errors.province ? "border-red-500" : "border-gray-300"
                                    } py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
                                  />
                                  {errors.province && <p className="text-red-500">{errors.province.message}</p>}
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="district"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  District
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="district"
                                    {...register("district")}
                                    className={`mt-1 block w-2/3 border ${
                                      errors.district ? "border-red-500" : "border-gray-300"
                                    } py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
                                  />
                                  {errors.district && <p className="text-red-500">{errors.district.message}</p>}
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="street-address"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Street
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="street"
                                    {...register("street")}
                                    className={`mt-1 block w-2/3 border ${
                                      errors.street ? "border-red-500" : "border-gray-300"
                                    } py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm`}
                                  />
                                  {errors.street && <p className="text-red-500">{errors.street.message}</p>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-4 py-3 text-right sm:px-6">
                          <button
                            type="submit"
                            className="inline-flex justify-center border border-transparent bg-[#2D719D] py-2 px-8 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
