import { ReactNode } from "react";
import {
  StyledIcon,
  StyledChip,
  StyledLabel,
  StyledMention,
  StyledParagraph,
} from "./style";

export enum StatusColor {
  Blue = 1,
  Green = 2,
  Yellow = 3,
  Red = 4,
  Transparent = 5,
}

export const Paragraph = (props: { children: string }) => {
  return <StyledParagraph>{props.children}</StyledParagraph>;
};

export const Label = (props: { children: string | ReactNode }) => {
  return <StyledLabel>{props.children}</StyledLabel>;
};

export const Mention = (props: { children: string; rounded: boolean }) => {
  return (
    <StyledMention rounded={props.rounded}>{props.children}</StyledMention>
  );
};

export const Icon = (props: {
  icon: string;
  alternativeColor: boolean;
  size: number;
}) => {
  return (
    <StyledIcon alternativeColor={false} size={props.size}>
      <i className={`fa fa-${props.icon}`}></i>
    </StyledIcon>
  );
};

export const Chip = (props: {
  children: ReactNode;
  bgColor: StatusColor;
  borderColor?: StatusColor;
  fontColor?: StatusColor;
}) => {
  return (
    <StyledChip
      fontColor={props.fontColor}
      borderColor={props.borderColor}
      bgColor={props.bgColor}
    >
      {props.children}
    </StyledChip>
  );
};
