/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
const initialState = {
  users: [],
  isLoading: true,
  user: null,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'FETCH_USERS_SUCCESS':
    return {
      ...state, users:action.payload,
      isLoading: false,
    };
  case 'UPDATE_USER_STATUS':
    return { ...state, user: action.payload };
  case 'UPDATE_ROLE_SUCCESS':
    const updatedUserIndex = state.users.findIndex(user => user.id === action.payload.id);
    if (updatedUserIndex !== -1) {
      const updatedUsers = [...state.users];
      updatedUsers[updatedUserIndex] = action.payload;
      return {
        ...state,
        users: updatedUsers,
      };
    }
  default:
    return state;
  }
};

export default usersReducer;
