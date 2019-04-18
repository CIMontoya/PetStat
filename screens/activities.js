import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'

export default class Activities extends Component {

  constructor() {
    super()
    this.state = {
      activities: null
    }
  }

  componentDidMount() {
    if(this.props.activity){
      this.setState({
        activities: [...this.props.pet.activities, this.props.activity]
      })
    } else {
      this.setState({
        activities: this.props.pet.activities
      })
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>{this.props.pet.name}</Text>
        <View style={styles.houseContainer}>
        {this.state.activities ? this.state.activities.map((activity, idx) => {
          return (
            <TouchableOpacity key={idx} style={styles.activity} onPress={() => Actions.activity({activity: activity})}>
              <Text style={{color: "white", fontSize: 40, borderBottomColor: "white"}}>{activity.activity}</Text>
              <View style={styles.activityInfo}>
                <Image source={require('../public/check.png')} style={{width: 55, height: 35, marginLeft: 5, tintColor: "white"}}/>
                <Text style={{color: "white", fontSize: 35}}>{activity.dueDate}</Text>
              </View>
            </TouchableOpacity>
          )
        }) : <Text></Text>}
        </View>
        <TouchableOpacity style={styles.addHouse} onPress={() => Actions.activityForm({pet: this.props.pet})}>
          <Text style={{fontSize: 30}}>Add Activity</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
