/* eslint-disable no-restricted-syntax */
import InputField from './InputField';
import 'react-toastify/dist/ReactToastify.css';
import {
  useCallback, useMemo, useState, useEffect,
} from 'react';
import { useDropzone } from 'react-dropzone';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../redux/actions/createProduct';
import { retrieveCategories } from '../../redux/actions/retreiveCategories';
import { productSchema } from '../../validations/productValidation';
import { showSuccessMessage } from '../../utils/toast';

const CreateProductForm = () => {
  const resolverForm = { resolver: yupResolver(productSchema) };
  const {
    register, handleSubmit, reset, formState,
  } = useForm(resolverForm);
  const { errors } = formState;

  const [product, setProduct] = useState({});
  const [imageError, setImageError] = useState('');
  const [error, setError] = useState(false);
  const categories = useSelector((state) => state.categories.value);
  const { isLoading } = useSelector((state) => state.createProduct);
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file]);
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, maxFiles: 2 });
  const styles = useMemo(
    () => ({
      ...(isDragAccept ? { borderColor: '#00e676' } : {}),
      ...(isDragReject ? { borderColor: '#ff1744' } : {}),
    }),
    [isDragAccept, isDragReject],
  );

  useEffect(() => {
    dispatch(retrieveCategories());
  }, [dispatch]);

  const createItem = async (e) => {
    const productInfo = new FormData();
    productInfo.append('name', e.name);
    productInfo.append('description', e.description);
    productInfo.append('categoryId', product.categoryId);
    productInfo.append('price', e.price);
    productInfo.append('expiryDate', e.expiryDate);
    productInfo.append('quantity', e.quantity);
    productInfo.append('bonus', e.bonus);
    selectedImages.forEach((file) => {
      productInfo.append('image', file);
    });

    try {
      if (selectedImages.length > 0) {
        const res = await dispatch(createProduct(productInfo)).unwrap();
        if (res.response) {
          return setError(res.response);
        }
        showSuccessMessage('Product created succefully');
        reset({
          name: '',
          categoryId: '',
          description: '',
          price: '',
          expiryDate: '',
          bonus: '',
          quantity: '',
        });
        setSelectedImages([]);
        return setImageError('');
      }
      (imageError == '') ? setImageError('Upload product image') : setImageError('');
    } catch (error) {

    }
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit(createItem)} className='w-4/5 flex flex-col mt-[80px] xs:ml-0 px-5 '>

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
          <select name="category" defaultValue='' className='border border-gray-200 ... w-[400px] h-[30px] mt-2 text-sm pl-3  text-slate-600 xs:w-full' {...register('categoryId')} onChange={(e) => setProduct({ ...product, categoryId: e.target.value })}>
            <option disabled hidden value='' className='text-slate-100'> --Select product categories-- </option>
            {
              categories.map((data) => <option value={data.id} key={data.id}>{data.name}</option>)
            }
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
            min='0'
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
        <div className='inline-grid grid-cols-2 gap-[35px] absolute top-[200px] right-20 xs:static xs:mt-[10px] xs:p-2 laptop:static'>
          {
            (selectedImages.length > 0)
                        && selectedImages.map((image, index) => (
                          <div className='border border-gray-200 ... w-[200px] h-[200px] text-5xl  text-slate-400 flex justify-center p-2 xs:w-[150px] bg-white xs:h-[150px] xs:p-[15px]' key={index}>
                            <img src={`${URL.createObjectURL(image)}`} alt="" className='w-[100%] object-cover' />
                          </div>
                        ))
          }
          {selectedImages.length < 4
                        && <div className='border border-gray-200 ... w-[200px] h-[200px] text-5xl  text-slate-400 xs:w-[150px] bg-white xs:h-[150px]' style={{ zIndex: 50 }}{...getRootProps({ styles })}>
                          <input data-testid="dropzone" {...getInputProps()} />
                          {isDragActive ? (
                            <p className='mt-[70px] ml-[55px] text-2xl xs:mt-[45px] xs:ml-[25px]'>Drop it here...</p>
                          ) : (
                            <p className='mt-[70px] ml-[85px] xs:mt-[45px] xs:ml-[55px]'>+</p>
                          )}
                        </div>}
          <em className=" text-rose-400 text-sm p-4">{imageError}</em>
        </div>
        {isLoading ? (
          <>
            <button className='bg-[#2198e7] w-[111px] h-[40px] mt-4 text-slate-50 mb-[30px] xs:ml-[30%] xs:w-[150px]' type='submit' disabled={true}>
              <svg
                role='status'
                className='inline ml-[5px] w-5 h-5 text-white animate-spin'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='#E5E7EB'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </>
        ) : (
          <button className=' bg-[#2D719D] hover:bg-[#2198e7] w-[111px] h-[40px] mt-4 text-slate-50 mb-[30px] xs:ml-[30%] xs:w-[150px]' type='submit'>Save</button>
        )}
      </form>
      {
        error
                && <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#F8F7FC] bg-opacity-60 z-50">
                  <div className="bg-white p-9 border-[0.5px] border-slate-300 ... h-36 xs:m-5 xs:p-5">
                    <p className='text-slate-600 xs:w-full mb-6'>{error.data.message}</p>
                    <div className="flex justify-end mt-4">
                      <button
                        className="py-1 w-[70px] bg-gray-500 text-white mr-2 text-sm"
                        onClick={() => setError(false)}
                      >
                        {(error.status == 404) ? 'Cancel' : 'Try Again'}
                      </button>
                      {error.status == 404
                                && <button className="py-2 w-[70px] bg-[#2D719D] hover:bg-[#2198e7] text-white text-sm">
                                    Update
                                </button>}
                    </div>
                  </div>
                </div>
      }
    </div>
  );
};

export default CreateProductForm;
