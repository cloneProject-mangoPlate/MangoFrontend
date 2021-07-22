import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// Actions
const GET_MAIN = "GET_MAIN";
const LOADING = "LOADING";

// Action Creators
const getMain = createAction(GET_MAIN, (mainLists) => ({ mainLists }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// 초기 state값
const initialState = {
  main_list: [
    {
      imgUrl: "",
      keyword: "",
    },
  ],
  is_loading: false,
};

// Middleware
// 메인페이지 및 탑리스트 페이지에서 crawling한 상품 조회
const getMainDB = () => {
  const mainAPI = "http://13.125.79.33/api/shops/";

  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    axios
      .get(mainAPI)
      .then((res) => {
        console.log(res);
        let toplists = res.data.mainlist;
        dispatch(getMain(toplists));
      })
      .catch((e) => console.log(e));
  };
};

// Reducer
// redux-actions 및 immer 사용
export default handleActions(
  {
    [GET_MAIN]: (state, action) =>
      produce(state, (draft) => {
        draft.main_list = action.payload.mainLists;
        draft.is_loading = false;
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  getMain,
  getMainDB,
};

export { actionCreators };
