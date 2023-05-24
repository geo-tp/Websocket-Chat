import styled from "styled-components";

export const StyledSendBar = styled.form`
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0px 10px;

  & input {
    width: 100%;
  }

  & button {
    position: absolute;
    right: 16px;
  }
`;
