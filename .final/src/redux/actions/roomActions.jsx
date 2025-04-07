export const fetchRooms = () => async dispatch => {
    dispatch({ type: "ROOMS_LOADING" });
    try {
      const res = await fetch("http://localhost:5000/rooms");
      const data = await res.json();
      dispatch({ type: "ROOMS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "ROOMS_ERROR", error });
    }
  };
  