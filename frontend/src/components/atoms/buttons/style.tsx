import styled, { css } from "styled-components";

const activeButton = css`
  &:active {
    &::after {
      visibility: visible;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.colorFont1};

      border-radius: 100%;

      animation: grow 150ms ease;
      animation-fill-mode: forwards;
      transition: all 300ms;

      @keyframes grow {
        0% {
          transform: scale(0);
          opacity: 1;
        }

        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
    }
  }
`;

export const StyledButtonPagination = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  transition: all 300ms;
  position: relative;
  ${activeButton}

  & i {
    color: ${(props) => props.theme.colorAction1};
    font-size: 2em;
    transition: all 300ms;
  }

  & span {
    color: ${(props) => props.theme.colorFont1};
    font-weight: bold;
    font-size: 1.2em;
  }

  &:hover {
    opacity: 0.7;

    & i {
      transform: scale(1.1);
    }
  }
`;

export const StyledButtonAction = styled.button<{
  alternativeColor: boolean;
  width?: string;
  height: string;
}>`
  border: 0px;
  padding: 10px 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  ${activeButton}

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: all 300ms;
  background-color: ${(props) =>
    props.alternativeColor ? props.theme.colorBG2 : props.theme.colorAction1};

  color: ${(props) =>
    props.alternativeColor ? props.theme.colorFont2 : props.theme.colorFont1};

  & i {
    font-size: 14px;
    z-index: 1;
  }

  & span {
    font-weight: bold;
    padding: 10px 0px;
    z-index: 1;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledButtonActionSoft = styled.button`
  border: 1px solid ${(props) => props.theme.colorAction1};
  padding: 10px 10px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: transparent;
  transition: all 300ms;
  ${activeButton}

  color: ${(props) => props.theme.colorAction1};

  & span {
    font-weight: bold;
    z-index: 1;
  }

  &:hover {
    color: ${(props) => props.theme.colorFont1};
    transition: all 300ms;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.colorAction1};
      border-radius: 20px;
      animation: appear 500ms ease;

      @keyframes appear {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }
    }
  }
`;

export const StyledButtonAlt = styled.button`
  border: 0px;
  padding: 10px 10px;
  background-color: transparent;
  transition: all 300ms;

  color: ${(props) => props.theme.colorFont1};

  & span {
    font-weight: bold;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const StyledButtonLabelIcon = styled.button<{
  alternativeColor: boolean;
}>`
  border: 0px;
  padding: 10px 10px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) =>
    props.alternativeColor ? props.theme.colorAction1 : props.theme.colorFont2};

  & i {
    font-size: 1.2em;
    padding-bottom: 2px;
  }

  & span {
    font-weight: 400;
    font-size: 0.75em;
  }
`;
