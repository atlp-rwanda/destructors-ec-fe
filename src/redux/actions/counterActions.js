import { INCREMENT, DECREMENT } from '../constants/actionTypes';

const increment = () => ({
  type: INCREMENT,
});

const decrement = () => ({
  type: DECREMENT,
});

export { increment, decrement };
