import React, {useState} from 'react';
import {View, ActivityIndicator, TouchableOpacity, Text} from 'react-native';
import { login } from '../services/UserAuth';
import Styles from '../styles/Login';

export default function Login() {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    setLoading(true);
    login();
  }

  return (
    <View style={Styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <TouchableOpacity style={Styles.button} onPress={handleLogin}>
          <Text style={Styles.buttonText}>Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
