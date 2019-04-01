import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
const styles = require('./style');

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./public/psLogo.png')} style={styles.logo} />
        <Text style={styles.p}> {`An easy way to keep up with \n your pets' care`}</Text>
        <TouchableOpacity style={styles.signUp}>
          <Text style={styles.sigUpText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logIn}>
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
