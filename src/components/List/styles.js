import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? .6 : 1 };
  
  & + div {
    border-left: 1px solid rgba(128, 136, 187, .09)
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 600;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 20px;
      background-color: #360F30;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px
  }
`;