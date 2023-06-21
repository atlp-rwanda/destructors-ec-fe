/* eslint-disable no-restricted-syntax */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import 'tailwindcss/tailwind.css';
import { updatePassword } from "../../redux/reducers/userSlice";
import { updatePasswordSchema } from "../../validations/inputValidation";
import InputField from "./InputField";
import { showErrorMessage } from "../../utils/toast";

export const UpdatePassword = () => {
  const [currentOpenEye, setOpenEye] = useState(false);
  const [newOpenEye, setNewOpenEye] = useState(false);
  const [confirmOpenEye, setConfirmOpenEye] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentToggle = () => {
    setOpenEye(!currentOpenEye);
  };

  const newToggle = () => {
    setNewOpenEye(!newOpenEye);
  };

  const confirmToggle = () => {
    setConfirmOpenEye(!confirmOpenEye);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePasswordSchema),
  });

  const loading = useSelector((state) => state.user.loading);
  // eslint-disable-next-line no-unused-vars
  const error = useSelector((state) => state.user.error);

  const onSubmit = (data) => {
    dispatch(updatePassword(data))

      .then((data) => {
        if (data.error) {
          console.log(data.error);
          showErrorMessage("The current passward is incorrect!");
        } else {
          console.log(data);
          navigate('/profile');
        }
      })
      .catch((error) => {
        console.log(error);
        showErrorMessage(error.message);
      });
  };

  return (
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="xs:flex-col xs:pl-12px xs:m-auto xs:w-[100vw] xs:h-fit xs:gap-0 xs:justify-center justify-center xs:relative xs:top-[80px] border-[none]  flex relative items-start px-[25px] xs:px-[0px]font-poppins flex-col w-[60vw] min-w-fit h-[250px] border rounded-xs ml-[30%] xs:overflow-hidden"
          >
            <div>
              <div className="current xs:flex-col flex flex-row gap-3 justify-center items-start w-[100%] xs:right-[20px] relative top-[20%]">
                <label htmlFor="currentPassword" className="text-base font-poppins font-normal text-[16px] text-[#565656]">Current Password</label>
                <div>
                  <InputField
                    id="currentPassword"
                    placeholder=""
                    type={currentOpenEye ? 'text' : 'password'}
                    className={`xs:w-[100vw] xs:rounded-xl xs:h-[58.77px] self-center text-[gray] xs:bg-[#EAF0F7] lg:w-[250%] border focus:outline-none focus:ring-2`}
                    {...register("currentPassword")}
                    error={errors?.currentPassword}
                  />
                  <div className="absolute lg:left-[163%] sm:left-[93%] xs:text-[35px] xs:top-[55%] xs:left-[83%] text-[gray] top-[15.5%] transform -translate-y-1/2">
                    {currentOpenEye ? (
                      <AiOutlineEye  onClick={currentToggle} />
                    ) : (
                      <AiOutlineEyeInvisible onClick={currentToggle} />
                    )}
                  </div>
                </div>
              </div>
              <div className="newPassword xs:flex-col mb-4 flex flex-row gap-8 xs:gap-3 items-start xs:right-[20px] relative top-[10%]">
                <label htmlFor="newPassword" className="text-base font-poppins text-[16px] font-normal text-[#565656]">New Password</label>
                <div>
                  <InputField
                    id="newPassword"
                    type={newOpenEye ? 'text' : 'password'}
                    placeholder=""
                    className={`xs:w-[100vw] xs:m-auto xs:rounded-xl xs:bg-[#EAF0F7] text-[gray] xs:h-[58.77px] lg:w-[235%] border ml-[10px] focus:outline-none focus:ring-2`}
                    {...register("newPassword")}
                    error={errors?.newPassword}
                  />
                  <div className="absolute lg:left-[163%] sm:left-[93%] xs:text-[35px] xs:top-[55%] xs:left-[83%] text-[gray] top-[16%]  transform -translate-y-1/2">
                    {newOpenEye ? (
                      <AiOutlineEye  onClick={newToggle} />
                    ) : (
                      <AiOutlineEyeInvisible onClick={newToggle} />
                    )}
                  </div>
                </div>
              </div>
              <div className="confirmPassword items-start xs:right-[20px] mb-4 flex flex-row gap-2 xs:flex-col justify-center relative top-[-5%]">
                <label htmlFor="confirmPassword" className="text-base text-[16px] font-poppins font-normal text-[#565656]">Confirm Password</label>
                <div>
                  <InputField
                    id="confirmPassword"
                    type={confirmOpenEye ? 'text' : 'password'}
                    placeholder=""
                    className={`xs:w-[100vw] xs:rounded-xl xs:h-[58.77px] text-[gray] xs:bg-[#EAF0F7] lg:w-[250%] border`}
                    {...register("confirmPassword")}
                    error={errors?.confirmPassword}
                  />
                  <div className="absolute lg:left-[163%] sm:left-[93%] xs:text-[35px] xs:top-[55%] xs:left-[83%] text-[gray] top-[15.5%] transform -translate-y-1/2">
                    {confirmOpenEye ? (
                      <AiOutlineEye  onClick={confirmToggle} />
                    ) : (
                      <AiOutlineEyeInvisible onClick={confirmToggle} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="lg:left-[10%] xs:self-center xs:bottom-[30px] xs:shadow-xl xs:font-semibold shadow-[#85B839] lg:bottom-[37%] sm:l-[70%] sm:mr-[10%]  xs:mr-[0%] xs:h-[61.38px] xs:mt-[20%] xs:rounded-[12px] xs:w-[195px] w-[133px] h-[51px] self-end py-1 relative sm:bottom-[35%] mt-4 mr-36 bg-[#2D719D] text-white text-base font-poppins leading-[24px] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? 'Loading...' : 'Save'}
            </button>
          </form>
  );
};
