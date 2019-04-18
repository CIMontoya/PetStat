import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'

export default class Pets extends Component {
  constructor(){
    super()
    this.state = {
      pets: null
    }
  }

  componentDidMount(){
    if(this.props.pet){
      this.setState({
        pets: [...this.props.pets, this.props.pet]
      })
    } else {
      this.setState({
        pets: this.props.pets
      })
    }
  }
  render() {
    console.log(this.state.pets)
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Pets</Text>
        <View style={styles.houseContainer}>
        {this.state.pets ? this.state.pets.map((pet, idx) => {
          return (
            <View key={idx}>
            <TouchableOpacity style={styles.petName} onPress={() => Actions.activities({pet: pet, user: this.props.user})}>
              <Text style={{fontSize: 40, color: "white", position: "relative", bottom: 5}}>{pet.name}</Text>
            </TouchableOpacity>
            <Image
              source={{ uri: pet.photoURI }}
              style={{ width: 300, height: 250}}
            />
            </View>
          )
        }) : <Text></Text>}

        </View>
        <TouchableOpacity style={styles.addPet} onPress={() => Actions.petForm({pets: this.props.pets, house: this.props.house})}>
          <Text style={{fontSize: 30}}>Add Pet</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
