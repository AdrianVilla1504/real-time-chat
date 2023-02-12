import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import InputMessage from '@/components/inputMessage';
import { useCookies } from 'react-cookie';
import ShowedMessages from '@/components/showedMessages';
import { DataChat, Message } from '@/types/types';

const Chat = () => {
  const [cookies, setCookie] = useCookies();

  const [data, setData] = useState<DataChat>({
    localUser: cookies.nickname,
    users: [],
    message: { id: '', content: '', date: new Date() },
    messages: [],
  });

  return (
    <div>
      <main className={styles.container}>
        <div className={styles.header}>Welcome to real time chat</div>

        <div className={styles.interface}>
          <div className={styles.channels}>canales</div>
          <div className={styles.chat}>
            {data.messages.map((msg: Message, i: number) => {
              if (msg) {
                return (
                  <div>
                    <ShowedMessages message={msg} key={i} index={i} />
                  </div>
                );
              }
            })}
          </div>
          <div className={styles.input}>
            <InputMessage cookies={cookies} data={data} setData={setData} />
          </div>
          <div className={styles.users}>usuarios</div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
