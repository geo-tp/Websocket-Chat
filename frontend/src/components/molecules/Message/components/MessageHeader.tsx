import { MessageType } from "../../../../types";
import { User } from "../../User";
import { MessageHeaderStyle } from "../style";

export const MessageHeader = (props: { message: MessageType }) => {
  return (
    <MessageHeaderStyle>
      <User
        src={props.message.user.thumbnail}
        alt={"user profile"}
        title={props.message.user.name}
        subtitle={props.message.date}
      />
    </MessageHeaderStyle>
  );
};
