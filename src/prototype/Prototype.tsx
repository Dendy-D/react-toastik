import React, { useState } from 'react';

import toastik from '../toastik';
import ToastContainer from '../components/ToastContainer';
import classes from './Prototype.module.scss';

const Prototype = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [emptyFields, setEmptyFields] = useState(false);
  const [isShowTost, setShowTost] = useState(false);
  // const [currentAmount, setCurrentAmount] = useState(0);

  const errors = {
    emptyFieldError: 'Необходимо заполнить все необходимые поля',
    authError: 'Проверьте правильность ввода данных',
  };

  const changeLogin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLogin(e.target.value);
  };

  const changePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const changeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const authenticationСonfirmation: React.MouseEventHandler<
    HTMLButtonElement
  > = (e) => {
    e.preventDefault();

    if (!login || !password) {
      setEmptyFields(true);
      setShowTost(true);
      toastik('Вы вели не все данные');
    } else {
      setEmptyFields(false);
    }
  };

  return (
    <div className={classes.component}>
      <div className={classes.wrap}>
        <h1 className={classes.header}>Авторизация</h1>
        <form className={classes.form}>
          <div>
            <input
              value={login}
              onChange={changeLogin}
              type="text"
              placeholder="Введите ваш логин"
              className={classes.validate}
            />
          </div>
          <div>
            <input
              value={password}
              onChange={changePassword}
              type="password"
              placeholder="Введите ваш пароль"
              className={classes.validate}
            />
          </div>
          <div>
            <input
              value={email}
              onChange={changeEmail}
              type="text"
              placeholder="Введите ваш email (optional)"
              className={classes.validate}
            />
          </div>
          <div>
            <button
              className={classes.button}
              onClick={authenticationСonfirmation}
            >
              Войти в систему
            </button>
          </div>
        </form>
      </div>
      {emptyFields && (
        <ToastContainer
          type="error"
          size="small"
          position="right"
          verticalOffset={100}
          animationStyle="scroll_to_left"
        />
      )}
    </div>
  );
};

export default Prototype;
