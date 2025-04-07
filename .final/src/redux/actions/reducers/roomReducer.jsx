const initialState = {
    loading: false,
    rooms: [],
    error: null,
  };
  
  export const roomReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ROOMS_LOADING":
        return { ...state, loading: true };
      case "ROOMS_SUCCESS":
        return { ...state, loading: false, rooms: action.payload };
      case "ROOMS_ERROR":
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  