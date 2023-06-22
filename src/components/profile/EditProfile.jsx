/* eslint-disable no-restricted-syntax */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fetchUserProfile, updateUserProfileData } from "../../redux/reducers/profileSlice";
import { showErrorMessage, showSuccessMessage } from "../../utils/toast";
import ProfileMenu from "./ProfileMenu";
import Spinner from "../Spinner";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isError } = useSelector((state) => state.profile);
  const userDetails = user?.payload?.user_details || {};
  const { firstname, lastname } = userDetails;
  const initialDOB = user?.payload?.user_details?.DOB ? user.payload.user_details.DOB.split("T")[0] : "";

  const schema = yup.object().shape({
    prefferedLanguage: yup.string().required("Preferred Language is required"),
    prefferedCurrency: yup.string().required("Preferred Currency is required"),
    gender: yup.string().required("Gender is required"),
    dateOfBirth: yup
      .date()
      .nullable()
      .min(new Date("1950-01-01"), "Date must be between 1-1-1950 and 1-1-2023")
      .max(new Date(Date.now()), `Date must be between 1-1-1950 and ${new Date(Date.now()).toLocaleDateString()}`)
      .required("Date of Birth is required"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const updatedProfile = {
      prefferedCurrency: data.prefferedCurrency,
      prefferedLanguage: data.prefferedLanguage,
      gender: data.gender,
      DOB: data.dateOfBirth,
    };

    dispatch(updateUserProfileData(updatedProfile))
      .then(() => {
        showSuccessMessage("User profile updated successfully");
        console.log("User profile updated successfully");
      })
      .catch((error) => {
        showErrorMessage("Error updating user profile");
        console.error("Error updating user profile:", error);
      });
  };

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const userDetails = user?.payload?.user_details || {};
      reset(userDetails);
    }
  }, [user, reset]);

  const renderProfilePicture = () => {
    if (user?.payload?.user_details?.profilePic) {
      return (
        <img src={user.payload.user_details.profilePic} alt="Profile Picture" className="h-full w-full object-cover" />
      );
    } else {
      return (
        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    }
  };

  // eslint-disable-next-line no-unused-vars
  const renderErrorMessage = (fieldName) => {
    return errors[fieldName] && <p className="mt-2 text-sm text-red-500">{errors[fieldName].message}</p>;
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
    showErrorMessage("Error updating user profile");

    return <div>Error occurred while fetching user profile.</div>;
  }

  return (
    <div>
      <main className="relative lg:pl-24 lg:-pr-20 font-poppins">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden">
            <div className=" lg:grid lg:grid-cols-12 ">
              <ProfileMenu />

              <div className=" lg:col-span-9">
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="shadow sm:overflow-hidden sm">
                        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                          <div className="space-y-6 sm:space-y-5">
                            <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4">
                              <div className="flex items-center">
                                <span className="h-24 w-24 overflow-hidden rounded-full bg-gray-100">
                                  {renderProfilePicture()}
                                </span>
                              </div>
                            </div>

                            <div className="space-y-6 sm:space-y-5">
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="first-name"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  First name
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    defaultValue={firstname}
                                    className="mt-1 block w-2/3 border border-gray-300 py-2 px-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="last-name"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Last name
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    defaultValue={lastname}
                                    className="mt-1 block w-2/3 border border-gray-300 py-2 px-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="preferred-language"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Preferred Language
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="text"
                                    name="preferred-language"
                                    id="preferred-language"
                                    defaultValue={userDetails?.prefferedLanguage}
                                    {...register("prefferedLanguage")}
                                    className="mt-1 block w-2/3 border border-gray-300 py-2 px-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                  />
                                  {errors.prefferedLanguage && (
                                    <p className="mt-1 text-sm text-red">{errors.prefferedLanguage.message}</p>
                                  )}
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="preferred-currency"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Preferred Currency
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="text"
                                    name="preferred-currency"
                                    id="preferred-currency"
                                    defaultValue={userDetails?.prefferedCurrency}
                                    {...register("prefferedCurrency")}
                                    className="mt-1 block w-2/3 border border-gray-300 py-2 px-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                  />
                                  {errors.prefferedCurrency && (
                                    <p className="mt-1 text-sm text-red">{errors.prefferedCurrency.message}</p>
                                  )}
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="gender"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Gender
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <select
                                    id="gender"
                                    name="gender"
                                    defaultValue={userDetails?.gender}
                                    {...register("gender")}
                                    className="block w-2/3 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                                  >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                  </select>
                                  {errors.gender && (
                                    <p className="mt-2 text-sm text-red">{errors.gender.message}</p>
                                  )}
                                </div>
                              </div>
                              <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-gray-200 sm:pt-5">
                                <label
                                  htmlFor="date-of-birth"
                                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                >
                                  Date of Birth
                                </label>
                                <div className="mt-1 sm:col-span-2 sm:mt-0">
                                  <input
                                    type="date"
                                    name="date-of-birth"
                                    id="date-of-birth"
                                    defaultValue={initialDOB}
                                    {...register("dateOfBirth")}
                                    className="mt-1 block w-2/3 border border-gray-300 py-2 px-3 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                                  />
                                  {errors.dateOfBirth && (
                                    <p className="mt-2 text-sm text-red">{errors.dateOfBirth.message}</p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="pt-5">
                            <div className="flex justify-end">
                              <button
                                type="submit"
                                className="inline-flex justify-center border border-transparent bg-[#2D719D] py-2 px-8 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              >
                                Save
                              </button>
                            </div>
                          </div>
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
};

export default UpdateProfile;
