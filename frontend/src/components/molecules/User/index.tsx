import { UserImg } from "../../atoms/images";
import { Label, Mention } from "../../atoms/texts";
import { StyledUser } from "./style";
import DefaultThumbnail from "../../../assets/user.png";

export const User = (props: {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}) => {
  const src = props.src ? props.src : DefaultThumbnail;
  return (
    <StyledUser>
      <UserImg src={src} alt={props.alt} />
      <div>
        <Label>{props.title}</Label>
        <Mention rounded={false}>{props.subtitle}</Mention>
      </div>
    </StyledUser>
  );
};
