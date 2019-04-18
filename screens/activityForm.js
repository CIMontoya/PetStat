import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Picker, Button} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import { Mutation } from "react-apollo";
import { graphql, compose } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const addActivity =  gql`
  mutation($activity: String!, $dueDate: String!, $onSchedule: Boolean!, $times: [String]!, $interval: String!, $pet_id: String!){
    addActivity(activity: $activity, dueDate: $dueDate, onSchedule: $onSchedule, times: $times, interval: $interval, pet_id: $pet_id) {
      activity
      id
      dueDate
      onSchedule
      times
      interval
      pet_id{
        name
      }
    }
  }`

class ActivityForm extends Component {

  constructor() {
    super()
    this.state = {
      activity: "",
      interval: "",
      schedule: null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add Pet</Text>
        <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <View style={{display: "flex", alignItems: "flex-start"}}>
            <Text style={styles.username}>Activity</Text>
            <TextInput
              style={styles.usernameInput}
              autoComplete={false}
              autofill={false}
              onChangeText={(val) => this.setState({activity: val})}
              value="walk"
            />
          </View>
          <View style={{display: "flex", alignItems: "flex-start"}}>
            <Text style={styles.username}>Interval (days)</Text>
            <TextInput
              style={styles.usernameInput}
              autoComplete={false}
              autofill={false}
              onChangeText={(val) => this.setState({interval: val})}
              value="1"
            />
          </View>
          <View style={{display: "flex", alignItems: "flex-start"}}>
            <Text style={styles.username}>Schedule</Text>
            <TextInput
              style={styles.usernameInput}
              autoComplete={false}
              autofill={false}
              onChangeText={(val) => {this.setState({schedule: val})}}
              value="6:30"
            />
          </View>
          <TouchableOpacity style={styles.activitySubmit} onPress={() => {
            const timesArr = this.state.schedule ? this.state.schedule.split(',') : ["6:30"]

            console.log(timesArr)
            this.props.addActivity({
              variables: {
              activity: this.state.activity ? this.state.activity : "walk",
              pet_id: this.props.pet.id,
              interval: this.state.interval ? this.state.interval : "1",
              onSchedule: true,
              dueDate: timesArr[0],
              times: timesArr
            }
          }).then(result => {
              Actions.activities({activity: result.data.addActivity, pet: this.props.pet})
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
   graphql(addActivity, {name: "addActivity"})
)(ActivityForm)
