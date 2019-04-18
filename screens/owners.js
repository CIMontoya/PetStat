import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'

export default class Owners extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Owners</Text>
        <View style={styles.houseContainer}>
        {this.props.owners.map((owner, idx) => {
          return (
            <TouchableOpacity id={idx} style={styles.house} onPress={() => Actions.ownerInfo({owner: owner, user: this.props.user})}>
              <Text style={{fontSize: 40, color: 'white'}}>{owner.name}</Text>
            </TouchableOpacity>
          )
        })}
        </View>
      </ScrollView>
    );
  }
}
