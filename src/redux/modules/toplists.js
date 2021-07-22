import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import config from "../../shared/config";

// Actions
const GET_TOP_LISTS = "GET_TOP_LISTS";
const LOADING = "LOADING";

// 초기 state값
const initialState = {
  top_list: [
    {
      id: "0",
      title: "장어 맛집 베스트 25곳",
      desc: "장어 먹고 폭염도 이겨내야지!",
      img_url:
        "https://www.ui4u.go.kr/depart/img/content/sub03/img_con03030100_01.jpg",
    },
    {
      id: "1",
      title: "찜닭 맛집 베스트 15곳",
      desc: "여기 볶음밥 하나 추가요!",
      img_url:
        "https://static.hubzum.zumst.com/hubzum/2017/12/15/15/83fea0f90f2040539ef5b73886733ae3.jpg",
    },
    {
      id: "2",
      title: "[7월 4주] 이주의 홀릭 리뷰]",
      desc: "이 주의 주목할 만한 리뷰만 모았다!",
      img_url:
        "https://www.go.com/go?sa=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "3",
      title: "광주 동구 맛집 베스트 5",
      desc: "믿고 먹는 광주 동구의 '그' 맛집!",
      img_url:
        "https://www.go.com/url?go=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "4",
      title: "안주가 맛있는 청담 맛집 베스트 15곳",
      desc: "안주파 모여라!",
      img_url:
        "https://www.go.com/url?go=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "5",
      title: "한식 주점 베스트 35곳",
      desc: "여름에 한식주점 생각나는 건 국룰",
      img_url:
        "https://www.go.com/go?sa=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "6",
      title: "한식 주점 베스트 35곳",
      desc: "여름에 한식주점 생각나는 건 국룰",
      img_url:
        "https://www.go.com/go?sa=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "7",
      title: "한식 주점 베스트 35곳",
      desc: "여름에 한식주점 생각나는 건 국룰",
      img_url:
        "https://www.go.com/go?sa=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "8",
      title: "한식 주점 베스트 35곳",
      desc: "여름에 한식주점 생각나는 건 국룰",
      img_url:
        "https://www.google.com/go?sa=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "9",
      title: "한식 주점 베스트 35곳",
      desc: "여름에 한식주점 생각나는 건 국룰",
      img_url:
        "https://www.go.com/go?sa=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "10",
      title: "한식 주점 베스트 35곳",
      desc: "여름에 한식주점 생각나는 건 국룰",
      img_url:
        "https://www.google.com/go?sa=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "11",
      title: "한식 주점 베스트 35곳",
      desc: "여름에 한식주점 생각나는 건 국룰",
      img_url:
        "https://www.go.com/go?sa=i&url=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F190531_3&psig=AOvVaw3XgFhDEkExubnzIuLtjy2U&ust=1626943172042000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCFwOHh8_ECFQAAAAAdAAAAABAO",
    },
    {
      id: "12",
      title: "찜닭 맛집 베스트 15곳",
      desc: "여기 볶음밥 하나 추가요!",
      img_url:
        "https://static.hubzum.zumst.com/hubzum/2017/12/15/15/83fea0f90f2040539ef5b73886733ae3.jpg",
    },
    {
      id: "13",
      title: "찜닭 맛집 베스트 15곳",
      desc: "여기 볶음밥 하나 추가요!",
      img_url:
        "https://static.hubzum.zumst.com/hubzum/2017/12/15/15/83fea0f90f2040539ef5b73886733ae3.jpg",
    },
    
  ],
  is_loading: false,
};

// Action Creators
const getToplists = createAction(GET_TOP_LISTS, (toplists) => ({ toplists }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

// Middleware
// 메인페이지 및 탑리스트 페이지에서 crawling한 상품 조회 
const getTopDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(loading(true));
    axios({
      method: "get",
      url: `${config.api}/api/top_lists`,
    })
      .then((res) => {
        let toplists = [...res.data];
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
  initialState,
);

const actionCreators = {
  getToplists,
  getTopDB,
};

export { actionCreators };
