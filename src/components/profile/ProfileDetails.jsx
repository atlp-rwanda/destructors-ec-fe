/* eslint-disable no-restricted-syntax */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../../redux/reducers/profileSlice";
import Spinner from "../Spinner";
const ProfileDetails = () => {
  const dispatch = useDispatch();
  const { user, isLoading, isError } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  if (isLoading) {
    return <div className="flex justify-center align-middle items-center mt-20"><Spinner height={10} width={10}/></div>;
  }

  if (isError) {
    return <div>Error occurred while fetching user profile.</div>;
  }

  const userDetails = user?.payload?.user_details || {};
  const { firstname, lastname, email, profilePic } = userDetails;
  const fullName = `${firstname || "Not specified"} ${lastname || "Not specified"}`;
  return (
    <>
      <div className="flex h-full font-poppins">
        <div className="relative z-0 flex flex-1 overflow-hidden">
          <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              <section aria-labelledby="profile-overview-title">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <h2 className="sr-only" id="profile-overview-title">
                    Profile Overview
                  </h2>
                  <div className="bg-white p-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                      <div className="sm:flex sm:space-x-5">
                        <div className="flex-shrink-0">
                          <img className="mb-10 mx-auto h-24 w-24 rounded-full" src={profilePic} alt="" />
                        </div>
                        <div className="mt-4 text-center sm:pt-1 sm:text-left">
                          <p className="text-[18px] font-bold text-gray-900">{fullName}</p>
                          <p className="text-[16px] text-[#8F8F8F]">{email}</p>
                        </div>
                      </div>
                      <div className="mt-5 flex justify-center sm:mt-0">
                        <a
                          href="/profile/update-profile"
                          className="flex items-center justify-center px-8 bg-[#2D719D] px-4 py-2 text-sm font-medium text-white shadow-sm"
                        >
                          Edit Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
