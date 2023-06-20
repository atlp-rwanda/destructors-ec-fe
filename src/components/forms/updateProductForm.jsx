import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import InputField from './InputField';
import { productSchema } from '../../validations/productValidation';
import { updateProduct } from '../../redux/actions/updateProduct';
import { retrieveCategories } from '../../redux/actions/retreiveCategories';
import { fetchSingleProduct } from '../../redux/actions/products';
import { showErrorMessage, showSuccessMessage } from '../../utils/toast';
import clear from '../../assets/clear.png';

const ProductUpdate = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(productSchema) });
  const { isLoading, error } = useSelector((state) => state.productUpdate);
  const [product, setProduct] = useState({
    name: '',
    categoryId: '',
    description: '',
    price: '',
    expiryDate: '',
    bonus: '',
    quantity: '',
    images: [],
  });
  const categories = useSelector((state) => state.categories.value);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageError, setImageError] = useState('');
  const [currentImage, setCurrentImage] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages((prevState) => [...prevState, ...acceptedFiles]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, maxFiles: 4 });
  const styles = useMemo(
    () => ({
      ...(isDragAccept ? { borderColor: '#00e676' } : {}),
      ...(isDragReject ? { borderColor: '#ff1744' } : {}),
    }),
    [isDragAccept, isDragReject]
  );

  useEffect(() => {
    const fetchproductData = async () => {
      try {
        const productData = await dispatch(fetchSingleProduct(id)).unwrap();
        setProduct(productData);
        setCurrentImage(productData.images);
        reset(productData);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchproductData();
  }, [dispatch, fetchSingleProduct, id, reset]);
  useEffect(() => {
    dispatch(retrieveCategories());
  }, [dispatch]);
  const dateObj = product.expiryDate ? new Date(product.expiryDate) : null;
  const formattedDate = dateObj
    ? `${dateObj.getFullYear()}-${(dateObj.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${dateObj.getDate().toString().padStart(2, '0')}`
    : '';
  const onSubmit = async (data) => {
    const { id, ...productData } = data;
    const productUpdates = { ...productData };
    await dispatch(
      updateProduct({ id, product: productUpdates, images: selectedImages })
    );
    reset({
      name: '',
      categoryId: '',
      description: '',
      price: '',
      expiryDate: null,
      bonus: '',
      quantity: '',
    });
    navigate(`/products/${id}`);
  };
  const handleRemoveImage = (index) => {
    setSelectedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  return (
    <div className='flex justify-center'>
      <form
        action=''
        onSubmit={handleSubmit(onSubmit)}
        encType='multipart/form-data'
        className='w-[90%] flex flex-col left-5 mt-[100px] xs:ml-0 px-5 '>
        <div>
          <InputField
            label='Name'
            styles=' text-slate-500 mt-4 text-sm'
            placeholder='Name of product'
            type='text'
            className=' border text-sm pl-3 border-gray-200 ... w-[400px] h-[30px] mt-2  placeholder:text-slate-300 text-slate-600 xs:w-full'
            {...register('name')}
            error={errors?.name}
            value={product.name || ''}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        <div className='flex flex-col'>
          <label className=' text-slate-500 text-sm'>Category</label>
          <select
            name='category'
            defaultValue=''
            className='border border-gray-200 ... w-[400px] h-[30px] mt-2 text-sm pl-3  text-slate-600 xs:w-full'
            {...register('categoryId')}
            value={product.categoryId || ''}
            onChange={(e) =>
              setProduct({ ...product, categoryId: e.target.value })
            }>
            <option disabled hidden value='' className='text-slate-300'>
              {' '}
              --Select product categories--{' '}
            </option>
            {categories.map((data) => {
              return (
                <option value={data.id} key={data.id}>
                  {data.name}
                </option>
              );
            })}
          </select>
          <p className=' text-rose-400 text-xs'>
            {errors.categoryId?.message.split(',')[0]}
          </p>
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
            value={product.price || ''}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
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
            value={product.quantity || ''}
            onChange={(e) =>
              setProduct({ ...product, quantity: e.target.value })
            }
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
            value={product.bonus || ''}
            onChange={(e) => setProduct({ ...product, bonus: e.target.value })}
          />
        </div>
        <div>
          <InputField
            label='Expiry date'
            styles=' text-slate-500 mt-4 text-sm'
            placeholder='2023/06/21'
            type='date'
            className='border border-gray-200 ... w-[400px] h-[30px] text-sm pl-3 mt-2  text-slate-600 xs:w-full  placeholder:text-slate-300'
            {...register('expiryDate')}
            error={errors?.expiryDate}
            value={formattedDate}
            onChange={(e) =>
              setProduct({ ...product, expiryDate: e.target.value })
            }
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
            value={product.description || ''}
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
          />
        </div>
        <div className='inline-grid grid-cols-2 gap-[35px] absolute top-[-10] right-20 xs:static xs:mt-[10px] xs:p-2 laptop:static'>
          {selectedImages.length > 0 &&
            selectedImages.map((image, index) => (
              <div
                className='border border-gray-200 ... w-[200px] h-[225px] text-5xl  text-slate-400 p-[20px] xs:w-[150px] bg-white xs:h-[180px] xs:p-[15px]'
                key={index}>
                <img
                  src={`${URL.createObjectURL(image)}`}
                  alt=''
                  className='w-[100%] object-cover hover:opacity-[0.6]'
                />
                <button onClick={() => handleRemoveImage(index)} className=''>
                  <img src={clear} />
                </button>
              </div>
            ))}
          {selectedImages.length < 4 && (
            <div
              className='border border-gray-200 ... w-[200px] h-[200px] text-5xl  text-slate-400 xs:w-[150px] bg-white xs:h-[150px]'
              {...getRootProps({ styles })}>
              <input data-testid='dropzone' {...getInputProps()} />
              {isDragActive ? (
                <p className='mt-[70px] ml-[55px] text-2xl xs:mt-[45px] xs:ml-[25px]'>
                  Drop it here...
                </p>
              ) : (
                <p className='mt-[70px] ml-[85px] xs:mt-[45px] xs:ml-[55px]'>
                  +
                </p>
              )}
            </div>
          )}
          {currentImage &&
            currentImage.map((image, index) => (
              <div
                className='border border-gray-200 ... w-[200px] h-[200px] text-5xl flex flex-row text-slate-400 p-[20px] xs:w-[150px] bg-white xs:h-[150px] xs:p-[15px]'
                key={index}>
                <img src={image} alt='' className='w-[100%] object-cover' />
              </div>
            ))}

          <em className=' text-rose-400 text-sm p-4'>{imageError}</em>
        </div>
        {isLoading ? (
          <>
            <button
              className='bg-[#2198e7] w-[111px] h-[40px] mt-4 text-slate-50 mb-[30px] xs:ml-[30%] xs:w-[150px]'
              type='submit'
              disabled={true}>
              <svg
                role='status'
                className='inline ml-[5px] w-5 h-5 text-white animate-spin'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
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
          <button
            className=' bg-[#2D719D] hover:bg-[#2198e7] w-[111px] h-[40px] mt-4 text-slate-50 mb-[30px] xs:ml-[30%] xs:w-[150px]'
            type='submit'>
            Save
          </button>
        )}
      </form>
    </div>
  );
};
export default ProductUpdate;
