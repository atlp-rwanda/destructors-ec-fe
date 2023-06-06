import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import CreateReview from '../components/products/review/CreateReview';
import store from '../redux/store';

describe('CreateReview component', () => {
  it('adds a review to a product', () => {
    render(
      <Provider store={store}>
        <CreateReview productId="product.id" />
      </Provider>
    );
    const starRating = screen.getByRole('button');
    fireEvent.click(starRating);

    const feedbackTextarea = screen.getByPlaceholderText('Enter your feedback');
    fireEvent.change(feedbackTextarea, { target: { value: 'This product is great!' } });
    const submitButton = screen.getByRole('button', { name: 'Send' });
    fireEvent.click(submitButton);
  });
});
