import { FormEvent, useEffect, useRef } from "react";
import { MessageType, UserType } from "../../../../types";
import { StyledChatBody } from "../style";
import { ChatMessages } from "./ChatMessages";
import { ChatUsers } from "./ChatUsers";
import { SendBar } from "../../../molecules/SendBar";

export const ChatBody = (props: {
  messages: MessageType[];
  members: UserType[];
  onSubmit: Function;
}) => {
  const chatRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [props.messages]);

  return (
    <StyledChatBody ref={chatRef}>
      <ChatUsers members={props.members} />
      <div>
        <ChatMessages messages={props.messages} />
        <SendBar onSubmit={props.onSubmit} />
      </div>
    </StyledChatBody>
  );
};
