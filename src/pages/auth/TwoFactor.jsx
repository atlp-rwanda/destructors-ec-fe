/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import InputField from '../../components/forms/InputField';
import Button from '../../components/forms/Button';
import Union from '../../assets/Union.svg';
import TwoFsct from '../../assets/2fa.svg';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifySeller } from '../../redux/reducers/verifySellerSlice';
import { useForm } from 'react-hook-form';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import Spinner from '../../components/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import { twoAuthSchema } from '../../validations/inputValidation';

function TwoFactor () {
  const {register, handleSubmit, watch, formState: { errors }} = useForm({resolver:yupResolver(twoAuthSchema)});
  const [searchParams] = useSearchParams();
  const {data, isLoading, error} = useSelector((state)=>state.verifySeller);
  const dispatch = useDispatch();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const submitForm = async (data)=>{
    data.token = token;
    try {
      const response = await dispatch(verifySeller(data));
      if (response.payload.error){
        showSuccessMessage('response.payload.error');
      }
      if (response.payload.message){
        showErrorMessage(response.payload.message);
      }
      showSuccessMessage(response.message);
    } catch (error) {
      showErrorMessage(error);
    }
  };
  useEffect(()=>{
    if (data){
      showSuccessMessage(data.message);
      localStorage.setItem('token', data.token);
      navigate('/');
    }
  });
  return (
    <div className='flex justify-around items-center mt-24 xs:flex-col'>
      <div className='font-sanslinear xs:ml-10 xs:hidden'>
        <p className='text-[48px] font-bold xs:text-[32px]'>Two Factor</p>
        <p className='text-[48px] font-bold xs:text-[32px]'>Authentication</p>
        <p>Enter Auth Code We have sent</p>
        <p> you on your email</p>
      </div>
      <div className='font-sanslinear md:hidden sm:hidden lg:hidden'>
        <p className='xs:text-[23px] font-bold'>Two Factor Authentication</p>
        <p>Enter Auth Code We have sent</p>
        <p> you on your email</p>
      </div>
      <div className='flex items-center relative'>
        <img src={Union} className='w-[400px] xs:w-[250px] xs:p-10 relative'/>
        <img src={TwoFsct} className='w-80 absolute'/>
      </div>
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit(submitForm)}>
          <InputField placeholder="Auth code"className="w-[297px] h-8 bg-slate-100 text-left pl-5 text-[14px] rounded border-black xs:w-[260px] xs:mt-10" {...register('otp')} error={errors.otp}/>
          <Button type="submit" className={`w-48 h-6 ${errors.otp || !watch('otp') ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={errors.otp || !watch('otp')}>{isLoading ? <Spinner height={4} width={4}/> : 'verify'}</Button>
        </form>
      </div>
    </div>
  );
}

export default TwoFactor;
