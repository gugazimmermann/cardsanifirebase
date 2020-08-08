import React, {useContext, useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {UserContext} from './services/UserContext';
import { onAuthStateChanged } from './services/UserAuth';
import Styles from './styles/Main';
import Login from './screens/Login';
import Home from './screens/Home';

export default function Main() {
  const [state, dispatch] = useContext(UserContext);

  function handleAuthState(user) {
    dispatch({type: 'LOGIN', payload: user?.uid || null});
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(handleAuthState);
    return subscriber;
  }, []);

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="teal" barStyle="default" />
      {!state.uid ? <Login /> : <Home />}
    </View>
  );
}
