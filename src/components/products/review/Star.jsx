import React from 'react';

const Star = ({ filled, onClick }) => (
  <span className='text-[#ffd500]'
    style={{ cursor: 'pointer', fontSize: '1.5rem', marginRight: '0.25rem' }}
    onClick={onClick}
  >
    {filled ? '★' : '☆'}
  </span>
);

export default Star;
