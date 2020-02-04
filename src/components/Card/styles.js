import styled, { css } from "styled-components";

const Container = styled.div`

  position: relative;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 14px;
  box-shadow: 0px 4px 4px rgba(128, 136, 187, .8);
  border-top: 8px solid rgba(184, 58, 56, .1);
  cursor: grab;

  header {
    position: absolute;
    top: -25px;
    left: 0;
    width: 100%;
  }

  p {
    font-weight: 500;
    line-height: 20px
  }

  img {
    width: 24px;
    height: 24;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(128, 136, 187, .8);
    padding: 16px;
    border-radius: 5px;
    background-color: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header {
      opacity: 0;
    }
  `};

`;

const Label = styled.span`
  position: relative;
  width: 100%;
  height: 8px;
  display: block;
  background-color: ${props => props.color};
  z-index: 99;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export { Container, Label }