import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Picker, Button} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import { Mutation } from "react-apollo";
import { graphql, compose } from 'react-apollo';
import ImagePicker from 'react-native-image-picker'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const addPet =  gql`
  mutation($name: String!, $household_id: String!, $photoURI: String!){
    addPet(name: $name, household_id: $household_id, photoURI: $photoURI) {
      id
      name
      photoURI
      household_id{
        name
      }
      activities{
        activity
        id
        dueDate
        onSchedule
        times
        interval
      }
    }
  }`

class PetForm extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      photo: null
    }
  }

  handleChoosePhoto = () => {
      const options = {
        noData: true,
      }
      ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
          this.setState({ photo: response })
        }
      })
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add Pet</Text>
        <View style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 15}}>
          <View style={{display: "flex", alignItems: "flex-start"}}>
            <Text style={styles.username}>Name</Text>
            <TextInput
              style={styles.usernameInput}
              autoComplete={false}
              autofill={false}
              onChangeText={(val) => this.setState({name: val})}
              value="Lobo"
            />
          </View>
          <View style={{ display: "flex", alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
            {this.state.photo && (
              <Image
                source={{ uri: this.state.photo.uri }}
                style={{ width: 300, height: 300 }}
              />
            )}
            <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
          </View>
          <TouchableOpacity style={styles.petSubmit} onPress={() => {
            this.props.addPet({
              variables: {
              name: this.state.name ? this.props.name : "Lobo",
              household_id: this.props.house.id,
              photoURI: this.state.photo.uri
            }
          }).then(result => {
              Actions.pets({pets: this.props.pets, pet: result.data.addPet})
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
   graphql(addPet, {name: "addPet"})
)(PetForm)
