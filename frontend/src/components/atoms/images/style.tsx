import styled from "styled-components";

export const StyledImage = styled.img`
  border-radius: 10px;
  object-fit: cover;
`;

export const StyledUserImage = styled.img`
  border-radius: 100%;
  width: 33px;
  height: 33px;
  object-fit: cover;
`;

export const StyledLogo = styled.img<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: 10px;
  margin-right: 10px;
`;
