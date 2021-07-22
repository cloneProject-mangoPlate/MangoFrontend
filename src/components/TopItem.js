import React from "react";
import styled from "styled-components";

const TopItem = (props) => {
  // const Img = props.imgUrl
  console.log(props);
  return (
    <ListItem className="ListItem">
      <Image src={props.img_url} />
      <Wrap>
        <Title>{props.title}</Title>
        <Desc>{props.desc}</Desc>
        {/* <Hash /> */}
      </Wrap>
    </ListItem>
  );
};

const ListItem = styled.div`
  height: 267px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  width: 100%;
  color: #ffffff;
  text-align: center;
`;
const Image = styled.img`
  width: 100%;
  height: 267px;
  object-fit: cover;
`;
const Title = styled.div`
  font-size: 32px;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 40%);
`;
const Desc = styled.div`
  font-size: 19px;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 40%);
  margin-top: 10px;
`;

export default TopItem;
