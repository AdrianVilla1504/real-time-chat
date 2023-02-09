import React from 'react';
import styles from "@/styles/Home.module.css";

const Chat = () => {
  return (
    <div>
      <main className={styles.container}>
        <div className={styles.header}>Header</div>

        <div className={styles.interface}>
          <div className={styles.canales}>canales</div>
          <div className={styles.chat}>chat</div>
          <div className={styles.input}>input</div>
          <div className={styles.usuarios}>usuarios</div>
        </div>
      </main>
    </div>
  );
}

export default Chat;
