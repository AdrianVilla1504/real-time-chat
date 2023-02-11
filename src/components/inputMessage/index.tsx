import React from 'react';

function InputMessage({ cookies, data, setData }: any) {
  const HandleChangeMessage = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    data.message = {
      id: cookies.nickname,
      content: e.target.value,
      date: Date.now(),
    };
  };

  const HandleSubmitMessage = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let arr = [...data.messages, data.message];
    data.messages = arr;
    setData({ ...data });
  };

  return (
    <div>
      <form>
        <input onChange={HandleChangeMessage} />
        <button onClick={HandleSubmitMessage}>Send</button>
      </form>
    </div>
  );
}

export default InputMessage;
