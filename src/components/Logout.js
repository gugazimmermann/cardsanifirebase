import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { logout } from '../services/UserAuth';
import Styles from '../styles/Logout';

export default function Logout() {
  function handleLogout() {
    logout();
  }

  return (
    <TouchableOpacity style={Styles.button} onPress={handleLogout}>
      <Text style={Styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );
}