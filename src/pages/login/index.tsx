import styles from './styles.module.css';
import { useCookies } from 'react-cookie';
import { useState } from 'react';

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [cookie, setCookie] = useCookies();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNickname(e.target.value);
  };

  const handleNameToCookies = (): void => {
    setCookie('nickname', nickname, { path: '/' });
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
    </>
  );
};

export default Login;
