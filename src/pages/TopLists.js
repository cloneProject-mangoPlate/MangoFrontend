import React from "react";
import styled from "styled-components";
import HeaderTopList from "../components/HeaderTopList";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mainActions } from "../redux/modules/Main_module";
import { actionCreators as topActions } from "../redux/modules/Toplists_module";
import TopItem from "../components/TopItem";

// 탑리스트 페이지
const TopLists = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  const main_info = useSelector((state) => state.main.main_list);
  const top_list = useSelector((state) => state.shopList);

  // React.useEffect(() => {
  //   dispatch(mainActions.getMainDB());
  // }, []);
  // const keyword = {};

  // for (let i = 0; i < main_info.length; i++) {
  //   const list = main_info[i];
  //   keyword[list.keyword] = list;
  // }

  // const keywordDetail = Object.keys(keyword);

  // console.log(keywordDetail);
  // console.log(id);

  React.useEffect(() => {
    dispatch(topActions.getTopDB(id));
  }, []);

  return (
    <React.Fragment>
      <Main>
        <HeaderTopList />
        <Article>
          <Section>
            <Wrapper>
              <MatjipList>믿고 보는 맛집 리스트</MatjipList>
              <TagContainer>
                <TagItemSet>
                  {/* <TagItemTwo>#전체</TagItemTwo>
                  <TagItemThree>#파스타</TagItemThree>
                  <TagItemFour>#무한리필</TagItemFour>
                  <TagItemThree>#이태원</TagItemThree>
                  <TagItemTwo>#고기</TagItemTwo>
                  <TagItemThree>#데이트</TagItemThree>
                  <TagItemTwo>#강남</TagItemTwo>
                  <TagItemTwo>#홍대</TagItemTwo>
                  <TagItemFour>#스테이크</TagItemFour>
                  <TagItemFour>#가로수길</TagItemFour>
                  <TagItemThree>#디저트</TagItemThree> */}
                </TagItemSet>
              </TagContainer>
              <TopItemSet className="top">
                {main_info.map((l) => {
                  console.log(top_list);
                  return (
                    <TopListItem
                      className="TopListItem"
                      key={l.id}
                      onClick={() => {
                        document.location.href = `/top_lists/${main_info[0].keyword}`;
                        window.scrollTo({ top: 0, left: 0 });
                      }}
                    >
                      <TopItem key={l.id} {...l} />
                    </TopListItem>
                  );
                })}
              </TopItemSet>
            </Wrapper>
          </Section>
        </Article>
        <Footer />
      </Main>
    </React.Fragment>
  );
};

const TagItemSet = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;
const TopListItem = styled.div`
  position: relative;
  max-width: 585px;
  height: 237px;
  flex: 1 0 40%;
  margin: 15px;
  overflow: hidden;
`;

const Main = styled.div`
  display: block;
  margin: 0;
  padding: 0;
`;

const TagContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-left: 40px;
  margin-bottom: 20px;
  padding: 0;
  border: 0 none;
  display: block;
`;

const MatjipList = styled.h1`
  padding-right: 0;
  padding-left: 0;
  font-size: 1.438rem;
  color: #ff792a;
  line-height: 1.2em;
  text-align: left;
  display: block;
  font-weight: normal;
  border: 0 none;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-left: 40px;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
  border: 0 none;
  display: block;
`;

const Section = styled.div`
  background-color: #f7f7f7;
  padding: 38px 0 36px 0;
  position: relative;
  display: block;
`;

const Article = styled.div`
  padding-top: 61px;
  display: block;
`;

const TopItemSet = styled.div`
  color: #6a6a6a;
  display: inline-block;
  margin: 15px 3px 0 3px;
  padding: 0 20px;
  font-size: 0.938rem;
  line-height: 38px;
  letter-spacing: 0em;
  border-radius: 50px;
  border: 1px solid #cbcbcb;
  background-color: #fff;
  cursor: pointer;
`;

const TagItemTwo = styled.button`
  width: 81.31px;
  color: #6a6a6a;
  display: inline-block;
  margin: 15px 3px 0 3px;
  padding: 0 20px;
  font-size: 0.938rem;
  line-height: 38px;
  letter-spacing: 0em;
  border-radius: 50px;
  background-color: #fff;
  border: 1px solid #cbcbcb;
  cursor: pointer;
`;

export default TopLists;
