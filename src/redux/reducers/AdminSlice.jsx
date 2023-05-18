
const initialState = {
  users: [],
  isLoading: true,
  user: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_USERS_SUCCESS':
    return { ...state, users: action.payload, isLoading: false };
  case 'UPDATE_USER_STATUS':
    return {
      ...state,
      user: action.payload,
    };
  default:
    return state;
  }
};

export default usersReducer;

