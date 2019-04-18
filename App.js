import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style.js'
import Router from './router'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AppRegistry } from 'react-native';
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
          <Router/>
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('MyApplication', () => App);
