import styled from "styled-components";

export const StyledCheckBox = styled.div<{ checked: boolean }>`
  width: 48px;
  height: 28px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.checked ? props.theme.colorAlt2 : props.theme.colorBG2};
  position: relative;
  display: flex;
  align-items: center;

  & div {
    margin-left: 3px;
    background-color: ${(props) =>
      props.checked ? props.theme.colorFont1 : props.theme.colorBG6};
    border: 1px solid ${(props) => props.theme.colorFont2};
    width: 24px;
    height: 24px;
    border-radius: 100%;
    transform: ${(props) => (props.checked ? "translateX(17px)" : "")};
    transition: all 300ms;
  }

  & input {
    position: absolute;
    visibility: hidden;
  }
`;

export const StyledInput = styled.input<{ alternativeColor: boolean }>`
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  border-radius: 8px;
  width: 220px;

  color: ${(props) => props.theme.colorFont1};
  background-color: ${(props) =>
    props.alternativeColor ? "transparent" : props.theme.colorBG6};
  border: 1px solid
    ${(props) =>
      props.alternativeColor ? props.theme.colorBG6 : props.theme.colorFont2};

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colorAlt1};
  }
`;

export const StyledSelect = styled.select<{ alternativeColor: boolean }>`
  height: 30px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 0px 10px;

  color: ${(props) => props.theme.colorFont1};
  background-color: ${(props) =>
    props.alternativeColor ? "transparent" : props.theme.colorBG6};
  border: 1px solid
    ${(props) =>
      props.alternativeColor ? props.theme.colorBG6 : props.theme.colorFont2};
`;
