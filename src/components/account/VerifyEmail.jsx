import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyAccount, resetState } from "../../redux/reducers/verifySlice";
import { extractTokenFromURL } from "../../utils/tokenUtils";
import { showErrorMessage, showSuccessMessage } from "../../utils/toast";
import Spinner from "../Spinner";

const VerifyEmailPage = () => {
  const dispatch = useDispatch();
  const token = extractTokenFromURL();
  const { loading, error, message } = useSelector((state) => state.verify);

  useEffect(() => {
    dispatch(verifyAccount(token));
  }, [dispatch, token]);

  useEffect(() => {
    if (message) {
      showSuccessMessage(message.message);
    }
    console.log(message);
  }, [message]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      showErrorMessage(error);
    }
  }, [error]);

  return (
    <>
      {loading && (
        <p>
          {" "}
          <Spinner height={6} width={6}/> Loading...
        </p>
      )}
      {!loading && !error && (
        <div className="fixed inset-0 z-10 flex items-center justify-center">
          <div className="bg-gray-500 bg-opacity-75">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"></div>
                <div className="mt-3 text-center sm:mt-5">
                  <div className="text-lg font-medium leading-6 text-gray-900">Account Verified Successful!</div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      You have successfully verified your account! You can now log in to your account.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  onClick={() => (window.location.href = "/auth/login")}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-sm"
                >
                  Go back to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyEmailPage;
