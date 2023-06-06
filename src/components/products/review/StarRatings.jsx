import React from 'react';
import Star from './Star';

const StarRating = ({ value, onChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <div>
      {stars.map((star) => (
        <Star
          key={star}
          filled={star <= value}
          onClick={() => onChange(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
