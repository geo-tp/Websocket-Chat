import styled from "styled-components";

export const StyledUser = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;

  & img {
    margin-right: 5px;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & label {
      color: ${(props) => props.theme.colorAlt1};
      text-overflow: ellipsis;
    }
    & span {
      margin: 0px;
      padding: 0px;
    }
  }
`;
