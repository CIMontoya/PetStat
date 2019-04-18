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

const updateUser =  gql`
  mutation($id: String!, $household_id: [String]!){
    updateUser(id: $id, household_id: $household_id) {
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
  }`

class Home extends Component {
  constructor(){
    super()
    this.state = {
      data: undefined,
      user: "",
      addedHouse: false,
      house: ""
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  componentDidUpdate(){
    if(typeof this.props.house === 'object' && this.state.addedHouse === false) {
      this.update()
    }
  }

  defineUser = () => {
    if(typeof this.props.user === 'object') {
      this.setState({
        user: this.props.user
      })
    } else if (this.state.user === ''){
      const users = this.state.data.data.users.filter(user => user.userName === this.props.userName && user.password === this.props.password)
        this.setState({
          user: users[0]
        })
    }
  }


  update = () => {

      this.addHouseToUser()

      this.setState({
        addedHouse: true
      })

  }

  addHouseToUser = () => {
    const arr = []
    const houseIds = this.props.user.household_id.map(house => {
      arr.push(house.id)
    })
    arr.push(this.props.house.id)
    this.props.updateUser({
      variables: {
      id: this.props.user.id,
      household_id: arr
    }
  }).then(result => {
    this.setState({
      data: result,
      user: result.data.updateUser
    })
  })
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
        return result
      }).then(result => {
        this.defineUser()
      });
  }

  render() {
    console.log(this.state.user)
    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>Welcome</Text>
          <Text style={styles.headerUser}>{this.state.user ? this.state.user.name : ""}</Text>
          <View style={styles.houseContainer}>
          {this.state.user ? this.state.user.household_id.map((house, idx) => {
            return (
              <TouchableOpacity key={idx} style={styles.house} onPress={() => Actions.house({house: house})}>
                <Text style={{color: "white", fontSize: 40}}>{house.name}</Text>
              </TouchableOpacity>
            )
          }) : <Text></Text>}
          </View>
          <TouchableOpacity style={styles.addHouse} onPress={() => Actions.houseForm({user: this.state.user})}>
            <Text style={{fontSize: 30}}>Add House</Text>
          </TouchableOpacity>
        </ScrollView>
    );
  }
}

export default compose(
   graphql(updateUser, {name: "updateUser"})
)(Home)
