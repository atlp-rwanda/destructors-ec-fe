/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import submitProductReview from "../../../redux/actions/ratingAndFeebackActions";
import fetchProductReviews from "../../../redux/actions/getReviewProduct";
import StarRating from "./StarRatings";
import useUserRoleState from "../../../utils/isLogged";

const CreateReview = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const reviews = useSelector((state) => state.fetchProductReviews?.reviews);
  const reviewData = reviews && reviews[productId] ? reviews[productId] : {};
  const [isReviewed, setIsReviewed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { userId } = useUserRoleState();
  const [reviewVisible, setReviewVisible] = useState(false);

  useEffect(() => {
    const checkReview = async () => {
      const reviewExists =
        reviewData.reviewsProduct &&
        reviewData.reviewsProduct.some((review) => review.buyerId === userId);
      setIsReviewed(reviewExists);
    };

    checkReview();
  }, [productId, userId, reviewData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(submitProductReview({ productId, rating, feedback }));
    if (rating !== 0 && feedback !== "" && feedback.length > 4) {
      setRating(0);
      setFeedback("");
      setSubmitted(true);
      dispatch(fetchProductReviews(productId));
    }
  };
  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  if (isReviewed) {
    return (
      <div className='w-full'>
        <p>You have already reviewed this product.</p>
      </div>
    );
  }
  const handleVisible = () => {
    setReviewVisible(!reviewVisible);
  };
  return (
    <div className='w-full'>
      <button
        onClick={handleVisible}
        className=' bg-[#2D719D] rounded-[10px] px-4 py-2 text-white font-[500]'
      >
        {reviewVisible ? "Hide Review" : "add Review"}
      </button>
      {reviewVisible && (
        <>
          <p>Add your review</p>
          <br />
          <form className='border-2 p-4 w-full' onSubmit={handleSubmit}>
            <div className='flex items-center mb-4'>
              <h2 className='mr-4'>Rate product</h2>
              <StarRating value={rating} onChange={handleRatingChange} />
            </div>

            <div>
              <textarea
                className='border-2 w-full h-40 p-2 mb-4'
                placeholder='Enter your feedback'
                value={feedback}
                onChange={handleFeedbackChange}
              ></textarea>
            </div>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-gray-200 px-4 py-2 text-black'
              >
                Send
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default CreateReview;
