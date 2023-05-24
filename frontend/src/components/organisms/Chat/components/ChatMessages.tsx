import { useEffect, useRef } from "react";
import { MessageType } from "../../../../types";
import { Message } from "../../../molecules/Message";
import { StyledChatMessages } from "../style";
import { SendBar } from "../../../molecules/SendBar";

export const ChatMessages = (props: { messages: MessageType[] }) => {
  const chatRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [props.messages]);

  return (
    <StyledChatMessages ref={chatRef}>
      {props.messages.map((message) => (
        <Message message={message} />
      ))}
    </StyledChatMessages>
  );
};
