import React from "react";
import styled from "styled-components";

const MainImage = (props) => {
  const { src, size, backgroundImage, _onClick } = props;

  const styles = {
    src,
    size,
    backgroundImage,
  };

  return (
    <React.Fragment>
      <Title {...styles} onClick={_onClick}></Title>
    </React.Fragment>
  );
};

MainImage.defaultProps = {
  _onClick: () => {},
};

const Title = styled.img`
  display: block;
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: rgba(255, 255, 255, 0);
  cursor: pointer;
`;

export default MainImage;
