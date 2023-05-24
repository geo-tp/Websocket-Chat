import styled from "styled-components";
import { StatusColor } from ".";

export const StyledParagraph = styled.p`
  color: ${(props) => props.theme.colorFont1};
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colorFont2};
  font-size: 0.85em;
  font-weight: 700;
  & i {
    font-size: 0.7em;
    padding: 5px;
  }
`;

export const StyledMention = styled.span<{ rounded: boolean }>`
  color: ${(props) => props.theme.colorFont2};
  font-size: 0.75em;
  font-weight: 400;
  padding: 2px 8px;
  margin: 5px;

  border-radius: ${(props) => (props.rounded ? "20px" : "0px")};
  background-color: ${(props) =>
    props.rounded ? props.theme.colorBG2 : "transparent"};
`;

export const StyledIcon = styled.div<{
  alternativeColor: boolean;
  size: number;
}>`
  color: ${(props) =>
    props.alternativeColor ? props.theme.colorFont2 : props.theme.colorFont1};

  & i {
    font-size: ${(props) => props.size}px;
  }
`;

export const StyledChip = styled.span<{
  bgColor: StatusColor;
  fontColor?: StatusColor;
  borderColor?: StatusColor;
}>`
  background-color: ${(props) => props.theme[`colorAlt${props.bgColor}`]};
  border: 1px solid ${(props) => props.theme[`colorAlt${props.borderColor}`]};
  color: ${(props) =>
    props.fontColor
      ? props.theme[`colorAlt${props.fontColor}`]
      : props.theme[`colorFont1`]};
  border-radius: 20px;
  font-weight: bold;
  padding: 1px 12px;
  padding-left: 4px;
  font-size: 0.8em;

  & span {
    padding-left: 5px;
  }

  & i {
    padding-right: 4px;
  }
`;
