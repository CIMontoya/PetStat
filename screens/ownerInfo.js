import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'

export default class Owners extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.owner.name}</Text>
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.h3}>Name:</Text>
            <Text style={styles.p2}>{this.props.owner.name}</Text>
          </View>
          <View>
            <Text style={styles.h3}>Username:</Text>
            <Text style={styles.p2}>{this.props.owner.userName}</Text>
          </View>
          <View>
            <Text style={styles.h3}>Phone Number:</Text>
            <Text style={styles.p2}>{this.props.owner.phoneNumber}</Text>
          </View>
          <View>
            <Text style={styles.h3}>Status:</Text>
            <Text style={styles.p2}>{this.props.owner.status ? "available" : "unavailable"}</Text>
          </View>
        </View>
      </View>
    );
  }
}
