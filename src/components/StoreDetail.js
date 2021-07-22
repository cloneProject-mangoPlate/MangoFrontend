import React, { useEffect } from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ShopInfo from "./ShopInfo";
import Review from "./Review";
import ReviewHeader from "./ReviewHeader";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as ShopActions } from "../redux/modules/Shop_module";

const StoreDetail = (props) => {
  const dispatch = useDispatch();
  const one_info = useSelector((state) => state.shop.one_info);

  useEffect(() => {
    dispatch(ShopActions.getStoreDB());
  }, []);
  console.log(one_info);

  return (
    <React.Fragment>
      <Outer>
        <Storebox>
          <StoreHead>
            <StoreTitle>
              <Title>
                <StoreName>{props.shopName} </StoreName>
                <RateOuter>
                  <RateNumber>{props.star}</RateNumber>
                </RateOuter>
              </Title>
              <StoreActionButtonWrap>
                <ReviewWriteButton
                  onClick={() => {
                    document.location.href = "/reviews/:shop_name";
                  }}
                >
                  <ReviewWriteButtonIcon />
                  <ReviewWriteButtonText>리뷰쓰기</ReviewWriteButtonText>
                </ReviewWriteButton>
                <WannaGo>
                  <WannaGoBtn />
                  <WannaGoTxt>가고싶다</WannaGoTxt>
                </WannaGo>
              </StoreActionButtonWrap>
            </StoreTitle>
            <StatusWrap>
              <CntWrap>
                <VisibilityIcon fontSize="small" />
                <Cnt>8,842</Cnt>
              </CntWrap>
              <CntWrap>
                <CreateIcon fontSize="small" />
                <Cnt>21</Cnt>
              </CntWrap>
              <CntWrap>
                <StarOutlineIcon fontSize="small" />
                <Cnt>336</Cnt>
              </CntWrap>
            </StatusWrap>
          </StoreHead>
          <ShopInfo />
          <UpdateDate>업데이트: {props.update_Date}</UpdateDate>
          <Section>
            <SectionLine />
          </Section>
          <ReviewHeader />
          <Review />
          <Review />
          <Review />
          <Review />
          <Review />
        </Storebox>
      </Outer>
    </React.Fragment>
  );
};

const Outer = styled.div`
  margin-top: 40px;
  padding: 0;
`;

const Storebox = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const StoreHead = styled.div`
  border-bottom: 1px solid #e9e9e9;
  position: relative;
  padding-bottom: 10px;
  min-height: 74px;
  margin: 0;
`;

const StoreTitle = styled.div`
  display: flex;
  flex-direction: row;
  direction: normal;
  box-orient: horizontal;
`;

const Title = styled.span`
  padding-right: 50px;
  max-width: 75%;
  font-size: 1rem;
  line-height: 35px;
`;

const StoreName = styled.h1`
  display: inline-block;
  max-width: 100%;
  word-break: break-all;
  border: 0 none;
  margin-bottom: 0;
`;

const RateOuter = styled.strong`
  font-weight: 500;
`;

const RateNumber = styled.span`
  color: #ff792a;
  margin-left: 8px;
  font-size: 2rem;
`;

const Branch = styled.p`
  font-size: 1.1rem;
  color: #888;
  line-height: 1.2rem;
  margin-top: 0;
  font-weight: 700;
`;

const StoreActionButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  box-direction: normal;
  box-orient: horizontal;
  margin-left: auto;
  margin-top: 14px;
`;
const ReviewWriteButton = styled.div`
  display: flex;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
  align-items: center;
  box-align: center;
  margin: 0 19px 0 0;
  border: none;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const ReviewWriteButtonIcon = styled.i`
  display: block;
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/review_writing_icon.png);
`;

const ReviewWriteButtonText = styled.span`
  margin-top: 12px;
  font-size: 0.8rem;
  line-height: 1.3;
  color: #9b9b9b;
`;

const WannaGo = styled.div`
  display: flex;
  flex-direction: column;
  box-direction: normal;
  box-orient: vertical;
  align-items: center;
  box-align: center;
  border: none;
  height: 100%;
`;

const WannaGoBtn = styled.div`
  display: block;
  width: 32px;
  height: 32px;
  background-image: url(https://mp-seoul-image-production-s3.mangoplate.com/web/resources/2018022864551sprites_desktop.png);
  background-position: -935px -583px;
  &:hover {
    cursor: pointer;
  }
`;

const WannaGoTxt = styled.span`
  margin-top: 12px;
  font-size: 0.8rem;
  line-height: 1.3;
  color: #9b9b9b;
`;

const StatusWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  font-size: 0.7rem;
  margin-left: 2px;
  color: #9b9b9b;
`;
const CntWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cnt = styled.span`
  margin-right: 15px;
  font-size: 15px;
`;

const UpdateDate = styled.p`
  padding: 4px 0 20px 0;
  font-size: 12px;
  text-align: right;
  color: rgba(79, 79, 79, 0.6);
`;

const Section = styled.div`
  width: 800px;
  margin: 0 auto;
`;
const SectionLine = styled.div`
  border-bottom: 1px solid #e9e9e9;
`;

/* StoreDetail.defaultProps = {
  address: "서울특별시 용산구 대사관로 20",
  oldAddress: "서울시 용산구 한남동 686-63",
  phoneNumber: "02-792-0628",
  food: "닭/오리 요리",
  price: "만원-2만원",
  parking: "주차공간없음",
  openTime: "11:30 - 23:00",
  webSite: "https://www.instagram.com/hyodochicken/",
  menu: "효도 꽈리멸 치킨",
  priceWon: "19,000원",
  rate: "4.5",
  branch: "한남점",
}; */

StoreDetail.defaultProps = {
  shopName: "중앙찜닭",
  keyword: "759_jjimdak",
  star: 3.7,
  shopId: "60f6d2ed905aa213046cff17",
  branch: "광주 동구점",
  parking: "주차공간 없음",
  /* website: "https://www.mangoplate.com/restaurants/TKb98SN3qdOr", */
  update_Date: "2020.02.04",
  views: 0, //number
  reviews: 0,
  likes: 0,
  data: [
    //Array
    ["주소", "광주광역시 동구 동명로25번길 4-1"],
    ["지번", " 광주시 동구 동명동 200-107"],
    ["전화번호", "070-8563-2569"],
    ["음식 종류", "카페 / 디저트"],
    ["가격대", "만원 미만"],
  ],
  menuList: [
    ["데일리 생선구이", "28,000원"],
    ["채끝스테이크", "36,000원"],
  ],
  tags: ["광주", "술집"],
  img_url: [
    "https://mp-seoul-image-",
    "https://mp-seoul-image-production-",
    "https://mp-seoul-image-production-",
    "https://mp-seoul-image-production-",
  ],
};

export default StoreDetail;
