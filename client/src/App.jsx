/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import { useEffect, useState } from 'react';
import Router from './router/Router';
import './App.css';
import AppContext from './App.context';
import { signUp, login, currentUser } from './services';
import { globalStyles, resetStyles } from './styles';

const App = () => {
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticatedStatus] = useState(true);
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

    setUserInfo(response.nowLogin);
    setToken(response.token);
    localStorage.setItem('_token', response.token);
    setLoadingStatus(false);
  };

  const fetchCurrentUser = async () => {
    const data = await currentUser();
    setUserInfo(data);
    setAuthenticatedStatus(true);
    setLoadingStatus(false);
  };

  const logout = () => {
    localStorage.removeItem('_token');
    setAuthenticatedStatus(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('_token');
    if (token) fetchCurrentUser();
  }, []);

  const appProviderValue = {
    authenticated,
    logout,
    isLoading,
    submitSignUp,
    submitLogin,
    token,
    userInfo,
  };

  // if (isLoading) return 'Loading...';

  return (
    <AppContext.Provider value={appProviderValue}>
      <Global styles={[resetStyles, globalStyles]} />
      <Router />
    </AppContext.Provider>
  );
}

export default App;
