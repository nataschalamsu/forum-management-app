/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect, useState } from 'react';
import Router from './router/Router';
import './App.css';
import AppContext from './App.context';
import { signUp, login } from './services';

const App = () => {
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticatedStatus] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setLoadingStatus] = useState(true);

  const submitSignUp = ({ firstName, lastName, email, password }) => {
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    signUp(data);
    setLoadingStatus(false);
  };

  const submitLogin = async ({ email, password }) => {
    const response = await login(email, password);
    console.log(response);
    setUserInfo(response.nowLogin);
    setToken(response.token);
    localStorage.setItem('_token', response.token);
    setAuthenticatedStatus(true);
    setLoadingStatus(false);
  };

  const getToken = () => {
    const token = localStorage.getItem('_token');
    console.log(token);
    if (!token) {
      setAuthenticatedStatus(false);
      setLoadingStatus(false);
    }

    setAuthenticatedStatus(true);
    setLoadingStatus(false);
  };

  const logout = () => {
    localStorage.removeItem('_token');
    setAuthenticatedStatus(false);
  };

  useEffect(() => {
    getToken();
  }, []);
  console.log('auth ', authenticated);
  const appProviderValue = {
    authenticated,
    logout,
    isLoading,
    submitSignUp,
    submitLogin,
    token,
    userInfo,
  };

  return (
    <AppContext.Provider value={appProviderValue}>
      <header className="App-header">
        <Router />
      </header>
    </AppContext.Provider>
  );
}

export default App;
