import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import { Mutation } from "react-apollo";
import { graphql, compose } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const addUser =  gql`
    mutation($name: String!, $location: String!, $status: Boolean!, $userName: String!, $phoneNumber: String!, $password: String!){
      addUser(name: $name, location: $location, status: $status, userName: $userName, phoneNumber: $phoneNumber, password: $password) {
        name
        userName
        status
        password
        location
        id
      }
    }`

class SignUp extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      userName: "",
      password: "",
      phoneNumber: "",
      status: true,
      location: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>SignUp</Text>
          <View style={{display: "flex", alignItems: "flex-start", marginTop: 20}}>
            <Text style={styles.username}>Name</Text>
            <TextInput
              style={styles.usernameInput}
              autoComplete={false}
              autofill={false}
              onChangeText={(val) => this.setState({name: val || "Cesar Montoya"})}
              value='Cesar Montoya'
            />
          </View>
          <View style={{display: "flex", alignItems: "flex-start"}}>
            <Text style={styles.username}>Username</Text>
            <TextInput
              autoCapitalize = 'none'
              style={styles.usernameInput}
              autoComplete={false}
              autofill={false}
              onChangeText={(val) => this.setState({userName: val})}
              value='cesarM'
            />
          </View>
          <View style={{display: "flex", alignItems: "flex-start"}}>
            <Text style={styles.password}>Password</Text>
            <TextInput
              autoCapitalize = 'none'
              style={styles.passwordInput}
              autoComplete={false}
              autofill={false}
              secureTextEntry={true}
              onChangeText={(val) => this.setState({password: val})}
              value='password'
            />
          </View>
          <View style={{display: "flex", alignItems: "flex-start"}}>
            <Text style={styles.username}>Phone Number</Text>
            <TextInput
              style={styles.passwordInput}
              autoComplete={false}
              autofill={false}
              onChangeText={(val) => this.setState({phoneNumber: val})}
              value='720-506-0772'
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={() => {
            this.props.addUser({
              variables: {
              name: this.state.name ? this.state.name : "Cesar Montoya",
              userName: this.state.userName ? this.state.userName : "cesarM",
              password: this.state.password ? this.state.password : "password",
              phoneNumber: this.state.phoneNumber ? this.state.phoneNumber : "720-506-0772",
              status: this.state.status,
              location: this.state.location}
            }).then(result => {
                Actions.home({userName: result.data.addUser.userName, password: result.data.addUser.password})
            })
          }}>
            <Text style={{color: "white", fontSize: 20}}>Log In</Text>
          </TouchableOpacity>
      </View>
    );
  }
}


export default compose(
   graphql(addUser, {name: "addUser"})
)(SignUp)
