export type UserType = {
  id: number;
  name: string;
  thumbnail: string;
  subtitle: string;
};

export type MessageType = {
  id: number;
  content: string;
  date: string;
  user: UserType;
};
