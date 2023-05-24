import { styled } from "styled-components";

export const StyledChat = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colorBG5};
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 400px ${(props) => props.theme.colorAlt1};
`;

export const StyledChatHeader = styled.div`
  padding: 10px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.gradient2};
  /* border: 1px solid ${(props) => props.theme.colorBG5}; */
`;

export const StyledChatBody = styled.div`
  border-top: 1px solid ${(props) => props.theme.colorBG5};

  display: flex;

  & div:last-child {
    width: 100%;
  }
`;

export const StyledChatFooter = styled.div``;

export const StyledChatMessages = styled.div`
  background: ${(props) => props.theme.gradient2};
  padding: 5px 20px;
  padding-top: 20px;
  height: calc(60vh - 196px);
  overflow-y: scroll;

  &::-webkit-scrollbar {
    height: 12px;
    width: 8px;
    background: ${(props) => props.theme.colorBG1};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colorBG4};
    -webkit-border-radius: 1ex;
  }
`;

export const StyledChatUsers = styled.div`
  padding: 10px;
  overflow: hidden;
  background: ${(props) => props.theme.colorBG7};
  border-right: 1px solid ${(props) => props.theme.colorBG2};
  height: calc(60vh - 140px);
  /* border-top: 1px solid ${(props) => props.theme.colorBG2}; */
  overflow-y: scroll;
  width: 200px;

  &::-webkit-scrollbar {
    display: none;
  }

  & img {
    padding: 5px 5px;
  }
`;
