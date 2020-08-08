import React from 'react';
import UserProvider from './services/UserContext';
import Main from './Main';

export default function App() {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}
