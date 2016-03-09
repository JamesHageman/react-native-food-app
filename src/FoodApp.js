/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  Component,
  StyleSheet,
  BackAndroid,
  Text
} from 'react-native';

import FridgeListView from './pages/FridgeListView'
import Router from 'react-native-simple-router'
import { createState } from './state'

class FoodApp extends Component {
  constructor() {
    super()
    this.model = createState();
    this.initialRoute = {
      name: 'FoodTrackr :)',
      component: FridgeListView,
      data: { state: this.model }
    }
  }

  render() {
    return <Router
      handleBackAndroid
      firstRoute={this.initialRoute}
      headerStyle={styles.header}
      titleStyle={styles.headerTitle}
      backButtonComponent={() =>
        <Text style={styles.backText}>Back</Text>
      }/>
  }
}

const styles = StyleSheet.create({
  header: {

  },
  headerTitle: {
    color: 'black'
  },
  backText: {
    marginLeft: 8,
    color: 'black'
  }
});

export default FoodApp;
