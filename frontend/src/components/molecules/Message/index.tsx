import { MessageType } from "../../../types";
import { DefaultSpacer } from "../../atoms/spacers";
import { MessageBody } from "./components/MessageBody";
import { MessageHeader } from "./components/MessageHeader";
import { MessageStyle } from "./style";

export const Message = (props: { message: MessageType }) => {
  return (
    <MessageStyle>
      <MessageHeader message={props.message} />
      <MessageBody message={props.message} />
      <DefaultSpacer />
    </MessageStyle>
  );
};
