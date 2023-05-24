import { useRef } from "react";
import { UserType } from "../../../../types";
import { StyledChatUsers } from "../style";
import { User } from "../../../molecules/User";
import DefaultThumb from "../../../../assets/user.png";

export const ChatUsers = (props: { members: UserType[] }) => {
  const chatRef = useRef<HTMLDivElement>(null);

  return (
    <StyledChatUsers ref={chatRef}>
      {props.members?.map((user: UserType) => (
        <User
          key={user.id + user.name}
          src={DefaultThumb}
          alt={"profile thumbnail"}
          title={user.name}
          subtitle={user.subtitle}
        />
      ))}
    </StyledChatUsers>
  );
};
