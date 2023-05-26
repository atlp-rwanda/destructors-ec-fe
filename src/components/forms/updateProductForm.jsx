import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";

const ProductUpdate=()=>{
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm({resolver:yupResolver()})

    return (
        <div>
            <form action="">
                <div>
                <InputField 
                    label='Name'
                    styles=' text-slate-500 mt-4 text-sm'
                    placeholder='Name of product'
                    type='text'
                    className=' border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-2  placeholder:text-slate-300 text-slate-600 xs:w-full'
                    {...register('name')}
                    error={errors?.name}
                />
                </div>
                <div className='flex flex-col'>
                    <label className=' text-slate-500 text-sm' >Category</label>
                    <select name="category" defaultValue='' className='border border-gray-200 ... w-[400px] h-[30px] mt-2 text-sm pl-3  text-slate-600 xs:w-full' {...register('categoryId')} >
                        <option disabled hidden value='' className='text-slate-300'> --Select product categories-- </option>
                    </select>
                    <p className=" text-rose-400 text-xs">{errors.categoryId?.message.split(',')[0]}</p>
                </div>
                <div className='mt-4'>
                    <InputField
                        label='Price'
                        styles=' text-slate-500 mt-4 text-sm'
                        placeholder='Product price'
                        type='text'
                        className=' border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-2  text-slate-600 xs:w-full  placeholder:text-slate-300'
                        {...register('price')}
                        error={errors?.price}
                    />
                </div>
                <div>
                    <InputField
                        label='Quantity'
                        styles=' text-slate-500 mt-4 text-sm'
                        placeholder='Product quantity'
                        type='text'
                        className='border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-2  text-slate-600 xs:w-full  placeholder:text-slate-300'
                        {...register('quantity')}
                        error={errors?.quantity}
                    />
                </div>
                <div>
                    <InputField
                        label='Bonus'
                        styles=' text-slate-500 mt-4 text-sm'
                        placeholder='Product bonus'
                        type='number'
                        className='border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-2  text-slate-600 xs:w-full  placeholder:text-slate-300'
                        {...register('bonus')}
                        error={errors?.bonus}
                    />
                </div>
                <div>
                    <InputField
                        label='Expiry date'
                        styles=' text-slate-500 mt-4 text-sm'
                        placeholder='29/06/2023'
                        type='date'
                        className='border border-gray-200 ... w-[400px] h-[30px] text-sm pl-3 mt-2  text-slate-600 xs:w-full  placeholder:text-slate-300'
                        {...register('expiryDate')}
                        error={errors?.expiryDate}
                    />
                </div>
                <div>
                    <InputField
                        label='Product description'
                        styles=' text-slate-500 mt-4 text-sm'
                        placeholder='Add product description'
                        type='text'
                        className='border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-2  text-slate-600 xs:w-full  placeholder:text-slate-300'
                        {...register('description')}
                        error={errors?.description}
                    />
                </div>
                <Button 
                label='Save' 
                type='submit'
                 />

            </form>
        </div>
    )
}
export default ProductUpdate