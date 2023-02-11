import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';
import InputMessage from '@/components/inputMessage';
import { useCookies } from 'react-cookie';
import ShowedMessages from '@/components/showedMessages';

const Chat = () => {
  const [cookies, setCookie] = useCookies();

  const [data, setData] = useState<any>({
    message: { id: '', content: '', date: new Date() },
    messages: [],
  });

  console.log(data);

  return (
    <div>
      <main className={styles.container}>
        <div className={styles.header}>Welcome to real time chat</div>

        <div className={styles.interface}>
          <div className={styles.canales}>canales</div>
          <div className={styles.chat}>
            <ShowedMessages />
          </div>
          <div className={styles.input}>
            <InputMessage cookies={cookies} data={data} setData={setData} />
          </div>
          <div className={styles.usuarios}>usuarios</div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
