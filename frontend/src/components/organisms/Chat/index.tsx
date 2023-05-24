import { MessageType, UserType } from "../../../types";
import { ChatBody } from "./components/ChatBody";
import { ChatHeader } from "./components/ChatHeader";
import { StyledChat } from "./style";

export const Chat = (props: {
  members: UserType[];
  messages: MessageType[];
  user: UserType;
  onSubmit: Function;
}) => {
  return (
    <StyledChat>
      <ChatHeader user={props.user} />
      <ChatBody
        onSubmit={props.onSubmit}
        members={props.members}
        messages={props.messages}
      />
    </StyledChat>
  );
};
