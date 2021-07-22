import React, { useEffect } from "react";
import styled from "styled-components";
import HeaderMain from "../components/HeaderMain";
import MultipleItems from "../components/MultipleItems";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/users";

// 메인 페이지 방문하자마자 ajax 요청 실행
// import axios from "axios";

const Main = (props) => {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  React.useEffect(()=>{
    console.log(1);
    if (path.includes('/auth')) {
      console.log(2);
      dispatch(userActions.logInActionDB());
    } 
    console.log(3);
  },[]);

  return (
    <React.Fragment>
      <HeaderMain />
      <div>
        <MainImg>
          <Container>
            <Title>
              <p>솔직한 리뷰, 믿을 수 있는 평점!</p>
              <p>망고플레이트</p>
            </Title>
            <MainSearch>
              <Input type="text" placeholder=" 지역, 식당 또는 음식"></Input>
              <Button>검색</Button>
            </MainSearch>
          </Container>

          <DownloadBtn>
            <a href="https://play.google.com/store/apps/details?id=com.mangoplate">
              <GooglePlay />
            </a>
            <a href="https://apps.apple.com/kr/app/id628509224">
              <AppStore />
            </a>
          </DownloadBtn>
        </MainImg>
      </div>

      <Section>
        <TitleWrap>
          <MatjipList>믿고 보는 맛집 리스트</MatjipList>
          <Link to="/top_lists">
            <ListMore>리스트 더보기</ListMore>
          </Link>
        </TitleWrap>
        <ToplistSlider />
        <SlickSlider>
          <MultipleItems />
        </SlickSlider>
      </Section>

      <Footer></Footer>
    </React.Fragment>
  );
};
Main.defaultProps = {};

const SlickSlider = styled.div`
  margin-bottom: 30px;
  position: relative;
  display: block;
  box-sizing: border-box;
  /* user-select: none; */
  /* touch-action: pan-y; */
  border: 0 none;
  padding: 0;
`;

const ToplistSlider = styled.div`
  margin: 0px auto;
  position: relative;
  border: 0 none;
  display: flex;
  padding: 0;
`;

const Section = styled.div`
  padding: 38px 0 36px 0;
  position: relative;
  border-top: 1px solid #dbdbdb;
  display: block;
  margin: auto;
  width: 85vw;
`;

const TitleWrap = styled.div`
  /* clear: both; */
  overflow: hidden;
  border: 0 none;
  display: block;
`;

const ListMore = styled.text`
  float: right;
  color: #cbcbcb;
  line-height: 1.5;
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
  border: 0 none;
  cursor: pointer;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const MatjipList = styled.h2`
  float: left;
  display: block;
  /* padding-right: 15px;
  padding-left: 15px; */
  font-size: 1.438rem;
  color: #ff792a;
  line-height: 1.35em;
  text-align: left;
  font-weight: normal;
  border: 0 none;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const MainSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  margin-bottom: 15px;
  position: relative;
`;

const DownloadBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: right;
  margin-left: 68%;
`;

const GooglePlay = styled.img`
  width: 154px;
  height: 45px;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/googleplay_btn.png");
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;
  cursor: pointer;
`;

const AppStore = styled.img`
  width: 153px;
  height: 46px;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/appstore_btn.png");
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 8px;
  margin-left: 25px;
  cursor: pointer;
`;

const Button = styled.button`
  background: #ff7100;
  border: 5px solid #ff7100;
  box-sizing: border-box;
  width: 180px;
  height: 58px;
  border-radius: 50px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  margin-left: 630px;
  /* margin: 0 auto; */
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 115px auto;
`;

const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 35.2px;
  text-align: center;
  line-height: 35%;
`;

const Input = styled.input`
  font-size: 20px;
  width: 715px;
  height: 54px;
  border-radius: 50px;
  border: 2px solid #ff7100;
  margin: 0 auto;
  display: flex;
  text-align: left;
  padding-left: 90px;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/498683_search-icon-small-search-icon-png-png-download-removebg-preview.png");
  background-repeat: no-repeat;
  background-size: 35px;
  background-position: 5%;
  position: absolute;
  ::placeholder {
    color: lightgrey;
    text-align: left;
    font-size: 20px;
    font-weight: bold;
  }
`;

const MainImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 499px;
  background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/mainimage.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
`;

export default Main;