import React, { useEffect } from "react";
import styled from "styled-components";
import MainImage from "../elements/MainImage";
import { history } from "../redux/configureStore";

import { actionCreators as mainActions } from "../redux/modules/Main_module";
import { useSelector, useDispatch } from "react-redux";

const MultipleItems = (props) => {
  const dispatch = useDispatch();
  const main_info = useSelector((state) => state.main.main_list);

  React.useEffect(() => {
    dispatch(mainActions.getMainDB());
  }, []);

  return (
    <div>
      <SlideContainer>
        <Picwrap>
          <PicList>
            <PicHeightWrap>
              <PicLi>
                <MainImage
                  key="1359_korean_pub"
                  src={main_info[0].imgUrl}
                  _onClick={() => {
                    history.push(`/top_lists/${main_info[0].keyword}`);
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                ></MainImage>
              </PicLi>
              <PicLi>
                <MainImage
                  key="2858_anju_cheongdam"
                  src="https://media.vlpt.us/images/soujinko/post/09a0c7a1-a7ff-42f0-894e-006720c55b7d/5.jpg?w=768"
                  _onClick={() => {
                    history.push(`/top_lists/${main_info[1].keyword}`);
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                ></MainImage>
              </PicLi>
            </PicHeightWrap>
            <PicHeightWrap>
              <PicLi>
                <MainImage
                  key="2857_familydinner_seoraevillage"
                  src="https://media.vlpt.us/images/soujinko/post/c17ceeb5-dc60-442f-a049-dcd49c147760/4.jpg?w=768"
                  _onClick={() => {
                    history.push(`/top_lists/${main_info[2].keyword}`);
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                ></MainImage>
              </PicLi>
              <PicLi>
                <MainImage
                  key="979_fried_chicken"
                  src="https://media.vlpt.us/images/soujinko/post/ee377476-3f7c-4336-94ba-53f3d88dfac3/3.jpg?w=768"
                  _onClick={() => {
                    history.push(`/top_lists/${main_info[3].keyword}`);
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                ></MainImage>
              </PicLi>
            </PicHeightWrap>
            <PicHeightWrap>
              <PicLi>
                <MainImage
                  key="759_jjimdak"
                  src="https://media.vlpt.us/images/soujinko/post/c95d270d-6745-43d5-9e47-f9ab6fc58544/2.jpg?w=768"
                  _onClick={() => {
                    history.push(`/top_lists/${main_info[4].keyword}`);
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                ></MainImage>
              </PicLi>
              <PicLi>
                <MainImage
                  key="tantannoodle_top5"
                  src="https://media.vlpt.us/images/soujinko/post/81dd9dc3-c318-4f79-af7a-1f065d873adf/1.jpg?w=768"
                  _onClick={() => {
                    history.push(`/top_lists/${main_info[5].keyword}`);
                    window.scrollTo({ top: 0, left: 0 });
                  }}
                ></MainImage>
              </PicLi>
            </PicHeightWrap>
          </PicList>
        </Picwrap>
      </SlideContainer>
    </div>
  );
};

export default MultipleItems;

const SlideContainer = styled.div`
  display: block;
  position: relative;
  border-top: 1px solid #dbdbdb;
  padding: 38px 0 36px 0;
  margin-right: -15px;
  margin-left: -15px;
`;

const Picwrap = styled.div`
  margin: 30px 90px auto;
  position: relative;
`;

const PicList = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

const PicHeightWrap = styled.div`
  max-width: 450px;
  margin-left: 29px;
  overflow: hidden;
  position: relative;
  display: block;
`;

const PicLi = styled.li`
  margin-bottom: 29px;
  background-size: cover;
  position: relative;
  border-radius: 3px;
  background-position: 50% 50%;
  list-style: none;
`;
