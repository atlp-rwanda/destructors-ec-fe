/* eslint-disable no-restricted-syntax */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Rectangle({ backgroundImage, vector, size, title }) {
  const rectangleStyles = 'relative mb-10 w-60 height-40 font-rubik';

  const titleStyles = `flex absolute top-0 left-0 whitespace-nowrap text-white font-sm text-lg p-2 ml-[10px]`;

  return (
    <div className={rectangleStyles}>
      <div
        className={`flex gap-12 items-center bg-gradient-to-r ${backgroundImage} w-56 h-[87%]`}>
        {title && <p className={titleStyles}>{title}</p>}
        <div className='flex'>
          {vector && (
            <img
              src={vector}
              alt='Vector'
              className='mt-6 h-14'
              style={{ marginRight: '5px' }}
            />
          )}
          {size && (
            <p
              className='text-5xl mr-8 mt-4 flex absolute top-0 right-0 whitespace-nowrap font-bold text-white'
              style={{
                textAlign: 'right',
                direction: 'rtl',
                paddingRight: '0',
              }}>
              {size}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Rectangle;
