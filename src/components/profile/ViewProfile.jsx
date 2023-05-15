import React from "react";
import ProfileDetails from "./ProfileDetails";
import AddressDetails from "./BillingAddress";

export default function ViewProfile () {
  return (
    <div>
      <main className="relative font-poppins">
        <div className=" px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
          <div className="overflow-hidden rounded-lg ">
            <div className="lg:ml-24 lg:pl-20 lg:-mr-20 divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <div className="divide-y  divide-gray-200 lg:col-span-9 bg-white shadow">
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                  <ProfileDetails />
                  <AddressDetails />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
