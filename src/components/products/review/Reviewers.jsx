import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchProductReviews from '../../../redux/actions/getReviewProduct';
import StarRating from './StarRatings';

const Reviewers = ({ productId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.fetchProductReviews?.reviews);
  const reviewData = reviews && reviews[productId] ? reviews[productId] : {};
  const reviewProduct = reviewData.reviewsProduct || [];

  useEffect(() => {
    dispatch(fetchProductReviews(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {reviewProduct.map((review, index) => (
        <div className='my-5' key={index}>
          <div className='flow-root'>
            <div className='-my-12 divide-y divide-gray-200'>
              <div className='py-12'>
                <div className='flex mt-2 '>
                  <img
                    src='/src/assets/avator.png'
                    alt='User Profile'
                    className='h-6 w-6 bg-gray-50 rounded-full'
                  />

                  <div className='ml-4'>
                    <div className=' flex items-center'></div>
                    <div>
                      <p>Anonymous</p>
                      <div
                        className='mt-4 space-y-6 pb-2 text-base italic text-gray-600'
                        dangerouslySetInnerHTML={{ __html: review.feedback }}
                      />
                      <StarRating value={review.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviewers;
