import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../style.js'
import { Actions } from 'react-native-router-flux'

export default class Activity extends Component {


  componentDidMount(){
    this.handleTime()
  }

  handleTime(){
    const splitTime = this.props.activity.dueDate.split(':')
    const scheduledHour = "17"
    const scheduledMinute = "29"
    let time = new Date()
    const hourNow = time.getHours()
    const minuteNow = time.getMinutes()
    const secondNow = time.getSeconds()

    console.log(hourNow, minuteNow, secondNow)
    let millis = 0
    let hourDif = 0
    let minuteDif = 0

    hourDif = +scheduledHour - hourNow
    minuteDif = +scheduledMinute - minuteNow

    if(hourDif < 0) {
      hourDif += 24
    }

    if(minuteDif < 0) {
      minuteDif += 60
    }

    millis += hourDif * 60 * 60 * 1000 + minuteDif * 60 * 1000 - secondNow * 1000
    console.log(millis, hourDif, minuteDif)
    setTimeout(() => console.log("time"), millis)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.activity.activity}</Text>
        <View style={styles.userInfo}>
          <View>
            <Text style={styles.h3}>Schedule:</Text>
            {this.props.activity.times.map((time, idx) => <Text key={idx} style={styles.p2}>{this.props.activity.times}</Text>)}
          </View>
          <View>
            <Text style={styles.h3}>Due Date:</Text>
            <Text style={styles.p2}>{this.props.activity.dueDate}</Text>
          </View>
          <View>
            <Text style={styles.h3}>Interval:</Text>
            <Text style={styles.p2}>Every {this.props.activity.interval} days</Text>
          </View>
          <View>
            <Text style={styles.h3}>Status:</Text>
            <Text style={styles.p2}>{this.props.activity.onSchedule ? "On schedule" : "Not completed"}</Text>
          </View>
        </View>
      </View>
    );
  }
}
