import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'


export default class LogIn extends Component {

  constructor(){
    super()
    this.state = {
      userName: "",
      password: ""
    }
  }

  changeUserName = (val) => {
    this.setState({
      userName: val
    })
  }

  changePassword = (val) => {
    this.setState({
      password: val
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Log In</Text>

          <Text style={styles.username}>Username</Text>
          <TextInput
            autoCapitalize = 'none'
            style={styles.usernameInput}
            autoComplete={false}
            autofill={false}
            onChangeText={this.changeUserName}
          />
          <Text style={styles.password}>Password</Text>
          <TextInput
            autoCapitalize = 'none'
            style={styles.passwordInput}
            autoComplete={false}
            autofill={false}
            secureTextEntry={true}
            onChangeText={this.changePassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={() => {
            const user = this.props.data.data.users.filter((user) => user.userName === this.state.userName && user.password === this.state.password)
            if(user[0]){
              Actions.home({user: user[0]})
            }
          }}>
            <Text style={{color: "white", fontSize: 20}}>Log In</Text>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}
