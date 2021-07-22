import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { config } from "../../shared/config";
// import { getCookie } from "../../shared/Cookie";
import axios from "axios";

//action
const GET_STORE = "GET_STORE";
const LOADING = "LOADING";

//action creators
const getStore = createAction(GET_STORE, (store_info) => ({ store_info }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  info: [],
  is_loading: false,
};

// middleWare
const getStoreDB = () => {
  const getStoreAPI = "http://13.125.79.33/api/shops/60f81c5697e1952395abef26";

  return function (dispatch, getState) {
    dispatch(loading(true));
    axios
      .get(getStoreAPI)
      .then((res) => {
        const store = res.data.shopOne;
        console.log(store);
        let detail = {
          shopName: store.shopName,
          keyword: store.keyword,
          star: store.star,
          shopId: store.shopId,
          id: store.id,
          views: store.views,
          reviews: store.reviews,
          data: store.data,
          menuList: store.menuList,
          tags: store.tags,
          img_url: store.img_url,
          likes: store.likes,
          rates: store.rates,
        };
        dispatch(getStore(detail));
      })
      .catch((e) => console.error(e));
  };
};

// reducer
export default handleActions(
  {
    [GET_STORE]: (state, action) =>
      produce(state, (draft) => {
        draft.info = action.payload.store_info;
        draft.is_loading = false;
        console.log(draft);
      }),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.detail;
      }),
  },
  initialState
);

const actionCreators = {
  getStore,
  getStoreDB,
};

export { actionCreators };
