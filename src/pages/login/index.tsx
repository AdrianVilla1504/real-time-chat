import styles from './styles.module.css';
import { useCookies } from 'react-cookie';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState('');
  const [cookie, setCookie] = useCookies();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNickname(e.target.value);
  };

  const handleNameToCookies = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    if (nickname != '') {
      setCookie('nickname', nickname, { path: '/' });
      router.push('/chat');
    } else {
      toast(`🦄 Empty nickname!`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <>
      <div className={styles.parent_login_container}>
        <div className={styles.login_container}>
          <h2 className={styles.container_title}>Welcome to Real time chat</h2>
          <p className={styles.container_description}>
            A random chat to chat for random people.
          </p>
          <form className={styles.container_form}>
            <input
              className={styles.form_nickname}
              onChange={handleInputChange}
              type="text"
              placeholder="Insert your nickname"
            />
            <button
              className={styles.form_submit}
              onClick={handleNameToCookies}
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Login;
