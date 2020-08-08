import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../styles/Home';
import Logout from '../components/Logout';

export default function Home() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Home</Text>
      <Logout />
    </View>
  );
}
