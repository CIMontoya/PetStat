import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Picker} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import { Mutation } from "react-apollo";
import { graphql, compose } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const addHouse =  gql`
  mutation($name: String!, $location: String!, $timezone: String!){
    addHouse(name: $name, location: $location, timezone: $timezone) {
      id
    }
  }`

class HouseForm extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      timezone: "",
      location: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add House</Text>
        <View style={{marginBottom: 230}}>
          <View style={{display: "flex", alignItems: "flex-start"}}>
            <Text style={styles.username}>Name</Text>
            <TextInput
              style={styles.usernameInput}
              autoComplete={false}
              autofill={false}
              onChangeText={(val) => this.setState({name: val})}
              value="Cesar's House"
            />
          </View>
          <View style={{display: "flex", alignItems: "flex-start"}}>
            <Text style={styles.username}>Location</Text>
            <TextInput
              autoCapitalize = 'none'
              style={styles.usernameInput}
              autoComplete={false}
              autofill={false}
              onChangeText={(val) => this.setState({location: val})}
              value="4250 Crown Blvd."
            />
          </View>
          <TouchableOpacity style={styles.addHouse2} onPress={() => {
            this.props.addHouse({
              variables: {
              name: this.state.name ? this.state.name : "Cesar's House",
              location: this.state.location ? this.state.location : "4250 Crown Blvd.",
              timezone: this.state.timezone
            }
          }).then(result => {
              Actions.home({house: result.data.addHouse, user: this.props.user})
            })

          }}>
            <Text style={{color: "white", fontSize: 30}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default compose(
   graphql(addHouse, {name: "addHouse"})
)(HouseForm)
