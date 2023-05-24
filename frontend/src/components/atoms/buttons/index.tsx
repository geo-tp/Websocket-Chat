import { ReactNode } from "react";
import {
  StyledButtonAction,
  StyledButtonActionSoft,
  StyledButtonAlt,
  StyledButtonLabelIcon,
  StyledButtonPagination,
} from "./style";

export interface IButtonBase {
  onClick?: Function;
  disabled?: boolean;
  alternativeColor: boolean;
  children: ReactNode;
}

export interface IButtonSize extends IButtonBase {
  width: string;
  height: string;
}

export const ButtonPagination = (props: IButtonBase) => {
  const onClick = props.onClick ? props.onClick : () => {};
  return (
    <StyledButtonPagination
      disabled={props.disabled}
      onClick={(e) => onClick(e)}
    >
      {props.children}
    </StyledButtonPagination>
  );
};

export const ButtonAction = (props: IButtonSize) => {
  const onClick = props.onClick ? props.onClick : () => {};

  return (
    <StyledButtonAction
      alternativeColor={props.alternativeColor}
      onClick={(e) => onClick(e)}
      disabled={props.disabled}
      // width={props.width}
      height={props.height}
    >
      {props.children}
    </StyledButtonAction>
  );
};

export const ButtonActionSoft = (props: IButtonBase) => {
  const onClick = props.onClick ? props.onClick : () => {};

  return (
    <StyledButtonActionSoft
      onClick={(e) => onClick(e)}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButtonActionSoft>
  );
};

export const ButtonAlt = (props: IButtonBase) => {
  const onClick = props.onClick ? props.onClick : () => {};

  return (
    <StyledButtonAlt onClick={(e) => onClick(e)} disabled={props.disabled}>
      {props.children}
    </StyledButtonAlt>
  );
};

export const ButtonLabelIcon = (props: IButtonBase) => {
  const onClick = props.onClick ? props.onClick : () => {};

  return (
    <StyledButtonLabelIcon
      onClick={(e) => onClick(e)}
      disabled={props.disabled}
      alternativeColor={props.alternativeColor}
    >
      {props.children}
    </StyledButtonLabelIcon>
  );
};
