import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { config } from "../../shared/config";

// Actions
const GET_TOP_LISTS = "GET_TOP_LISTS";
const LOADING = "LOADING";

// 초기 state값
const initialState = {
  top_list: [
    {
      shopName: "",
      shopId: "",
      keyword: "",
      star: 0,
      address: "",
      img_url: [],
    },
  ],
  is_loading: false,
};

// Action Creators
const getToplists = createAction(GET_TOP_LISTS, (toplists) => ({ toplists }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// Middleware
// 메인페이지 및 탑리스트 페이지에서 crawling한 상품 조회
const getTopDB = (id) => {
  console.log(id);
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    axios
      .get(config.api + "/api/shops/" + { id })

      .then((res) => {
        let top_lists = [];
        let toplists = [...res.data.shopList];
        dispatch(getToplists(toplists));
      })
      .catch((e) => console.log(e));
  };
};

// Reducer
// redux-actions 및 immer 사용
export default handleActions(
  {
    [GET_TOP_LISTS]: (state, action) =>
      produce(state, (draft) => {
        draft.top_list = action.payload.toplists;
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
  getToplists,
  getTopDB,
};

export { actionCreators };
