import { styled } from "styled-components";

export const StyledRegister = styled.form`
  background: ${(props) => props.theme.gradient2};
  border: 1px solid ${(props) => props.theme.colorBG5};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 200px ${(props) => props.theme.colorAlt1};
`;

export const StyledRegisterMessage = styled.div`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);

  & span {
    width: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
`;
