import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'

export default class House extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>{this.props.house.name}</Text>
        <View style={styles.houseInfo}>
          <View style={styles.houseQuant}>
            <Text style={styles.h4}>Pets</Text>
            <Text style={styles.h4}>{this.props.house.pets.length}</Text>
            <TouchableOpacity  style={styles.smallBut} onPress={() => Actions.pets({pets: this.props.house.pets, house: this.props.house})}>
              <Text style={{textAlign: 'center', fontSize: 20}}>See Pets</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.houseQuant}>
            <Text style={styles.h4}>Owners</Text>
            <Text style={styles.h4}>{this.props.house.users.length}</Text>
            <TouchableOpacity  style={styles.smallBut} onPress={() => Actions.owner({owners: this.props.house.users, user: this.props.user})}>
              <Text style={{textAlign: 'center', fontSize: 20}}>See Owners</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
