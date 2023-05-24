import { UserType } from "../../../../types";
import { Chip, StatusColor } from "../../../atoms/texts";
import { StyledChatHeader } from "../style";

export const ChatHeader = (props: { user: UserType }) => {
  return (
    <StyledChatHeader>
      {/* Left Side */}
      <div>
        <Chip
          bgColor={StatusColor.Transparent}
          borderColor={StatusColor.Transparent}
        >
          <i className="fa fa-hashtag"></i>
          <span>General</span>
        </Chip>
      </div>

      {/* Right Side */}
      <div>
        <Chip bgColor={StatusColor.Transparent} borderColor={StatusColor.Green}>
          <span>Connected as {props.user.name}</span>
        </Chip>
      </div>
    </StyledChatHeader>
  );
};
