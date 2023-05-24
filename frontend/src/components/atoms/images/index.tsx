import { StyledImage, StyledLogo, StyledUserImage } from "./style";
import LogoExample from "../../../assets/logo.webp";

export const Img = (props: {
  src: string;
  alt: string;
  width: string;
  height: string;
}) => {
  return <StyledImage {...props}></StyledImage>;
};

export const UserImg = (props: { src: string; alt: string }) => {
  return <StyledUserImage {...props}></StyledUserImage>;
};

export const Logo = (props: { width: string; height: string }) => {
  return (
    <StyledLogo
      width={props.width}
      height={props.height}
      src={LogoExample}
      alt="leter O and S in a styled way"
    />
  );
};
