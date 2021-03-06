import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    padding,
    margin,
    bg,
    children,
    height,
    _onClick,
    display,
    border_radius,
    justifyContent,
    alignItems,
    shadow,
    center,
  } = props;

  const styles = {
    is_flex,
    width,
    margin,
    padding,
    bg,
    height,
    display,
    border_radius,
    justifyContent,
    alignItems,
    shadow,
    center,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
  border_radius: false,
  justifyContent: false,
  alignItems: false,
  shadow: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  box-sizing: border-box;
  border-radius: ${(props) => props.border_radius};
  ${(props) => (props.height ? `height: ${props.height};` : "")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ""};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : "")};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
`;

export default Grid;
