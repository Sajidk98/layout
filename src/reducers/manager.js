import type from "../actions/constant";

const initialState = { isLoading: false, error: false, data: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_REPOSITORY:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
