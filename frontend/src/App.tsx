import { Chat } from "./components/organisms/Chat";
import { MessageType, UserType } from "./types";
import { Register } from "./components/organisms/Register";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  C_RECEIVE_DISCONNECTED_MEMBER,
  C_RECEIVE_MEMBERS,
  C_RECEIVE_MESSAGE,
  C_RECEIVE_NEW_MEMBER,
  C_RECEIVE_PROFILE,
  S_RECEIVE_MESSAGE,
  S_RECEIVE_PSEUDO,
} from "./components/organisms/Chat/utils/opCodes";

const SOCKET_URL = "ws://localhost:8000/ws/chat/general/";

function App() {
  // USER
  const [user, setUser] = useState<UserType>({
    id: 0,
    name: "Anonymous",
    thumbnail: "",
    subtitle: "",
  });
  const userRef = useRef(user);

  // MEMBERS
  const [members, setMembers] = useState<UserType[]>([]);
  const membersRef = useRef(members);

  // MESSAGES
  const [messages, setMessages] = useState<MessageType[]>([]);
  const messagesRef = useRef(messages);
  const [registerMessage, setRegisterMessage] = useState<string>("");

  // SOCKET INIT
  const socket = useRef<WebSocket | null>(null);
  useEffect(() => {
    socket.current = new WebSocket(SOCKET_URL);
    socket.current.onopen = () => console.log("ws opened");
    socket.current.onclose = () => console.log("ws closed");
    const wsCurrent = socket.current;

    socket.current.onmessage = (e) => {
      const data = JSON.parse(e.data);
      var updated_values = [];

      switch (data.op_code) {
        case C_RECEIVE_PROFILE:
          userRef.current = data.profile;
          setUser(data.profile);
          break;

        case C_RECEIVE_NEW_MEMBER:
          membersRef.current = [...membersRef.current, data.member];
          setMembers(membersRef.current);
          break;

        case C_RECEIVE_DISCONNECTED_MEMBER:
          updated_values = membersRef.current.filter(
            (usr: UserType) => usr.id !== data.member_id
          );
          membersRef.current = updated_values;
          setMembers(updated_values);
          break;

        case C_RECEIVE_MEMBERS:
          membersRef.current = data.members;
          setMembers(data.members);
          break;

        case C_RECEIVE_MESSAGE:
          messagesRef.current = [...messagesRef.current, data.message];
          setMessages(messagesRef.current);
          break;

        default:
          break;
      }
    };

    return () => {
      wsCurrent.close();
    };
  }, []);

  const onRegisterSubmit = (e: FormEvent, inputValue: string) => {
    if (inputValue.length < 3) {
      setRegisterMessage("Name is too short");
      return;
    }

    setUser({ ...user, name: inputValue });

    if (socket?.current) {
      socket.current.send(
        JSON.stringify({ pseudo: inputValue, op_code: S_RECEIVE_PSEUDO })
      );
    }
  };

  const onMessageSubmit = (e: FormEvent, messageValue: string) => {
    e.preventDefault();

    if (socket?.current) {
      socket.current.send(
        JSON.stringify({ content: messageValue, op_code: S_RECEIVE_MESSAGE })
      );
    }
  };

  return (
    <div className="App">
      {user.id !== 0 && (
        <Chat
          members={members}
          user={user}
          messages={messages}
          onSubmit={onMessageSubmit}
        />
      )}

      {user.id === 0 && (
        <Register
          registerMessage={registerMessage}
          onSubmit={onRegisterSubmit}
        />
      )}
    </div>
  );
}

export default App;
