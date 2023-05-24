import { MessageType } from "../../../../types";
import { MessageBodyStyle } from "../style";

export const MessageBody = (props: { message: MessageType }) => {
  return <MessageBodyStyle>{props.message.content}</MessageBodyStyle>;
};
