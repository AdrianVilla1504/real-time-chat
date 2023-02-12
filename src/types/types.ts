export type DataChat = {
  localUser: string;
  users: string[];
  message: { id: string; content: string; date: Date };
  messages: { id: string; content: string; date: Date }[];
};

export type Message = {
  id: string;
  content: string;
  date: Date;
};

export type Messages = { id: string; content: string; date: Date }[];
