import React from 'react';
import { Message } from '@/types/types';

function ShowedMessages({
  message,
  index,
}: {
  message: Message;
  index: number;
}) {
  console.log('MESSAGE IN SHOWEDMESSAGE =>', message);
  return (
    <div key={index}>
      <h2>{message.id}</h2>
      <p>{message.content}</p>
      <p>{message.date.toString()}</p>
    </div>
  );
}

export default ShowedMessages;
