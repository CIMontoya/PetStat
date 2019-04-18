import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'
import gql from 'graphql-tag'
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class Landing extends Component {
  constructor(){
    super()
    this.state = {
      data: undefined
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    client
      .query({
        query: gql`
        {
  users{
    name
    userName
    status
    password
    location
    id
    household_id{
      id
      name
      users {
        name
        userName
        location
        status
        password
        phoneNumber
      }
      pets {
        id
        name
        photoURI
        activities{
          id
          activity
          interval
          times
          onSchedule
          dueDate
        }
      }
    }
  }
}
        `
      })
      .then(result => {
        this.setState({
          data: result
        })
      });
  }

  render() {
    return (
          <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../public/psLogo.png')} style={styles.logo} />
            <Text style={styles.p}> {`An easy way to keep up with \n your pets' care`}</Text>
            <TouchableOpacity style={styles.signUp} onPress={() => {
              if(this.state.data) {
                Actions.signUp()
              }
            }
            }>
            <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logIn} onPress={() => {
              if(this.state.data) {
                Actions.login({data: this.state.data})
              }
            }}>
            <Text style={styles.logInText}>Log In</Text>
            </TouchableOpacity>
          </ScrollView>
    );
  }
}
