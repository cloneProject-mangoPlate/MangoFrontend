import config from "../../shared/config";

// Action
const LOG_IN = "LOG_IN";

// Action Creator
const logInAction = (userInfo) => ({ type: LOG_IN, userInfo });

// Initialstate
const initialState = {
  userinfo: {},
};

// Middleware
const logInActionDB = () => {
  return function (dispatch) {
      console.log(1);
    config
      .get("/api/social/user")
      .then((res) => {
        console.log(2);
        dispatch(logInAction(res.data));
      })
      .catch((error) => {
          console.log(3);
        console.error(error);
      });
  };
};

// Reducer
export default function user(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return { userInfo: action.userInfo };
    default:
      return state;
  }
}

export const userActions = {
    logInActionDB,
};