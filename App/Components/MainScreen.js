/**
 * @flow
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Slider,
  TouchableHighlight
} from 'react-native'
import {Metrics} from '../Utils'

export default class Root extends Component {
  static navigationOptions = {
    title: 'Search App',
    headerStyle:{ backgroundColor: 'white'},
    headerTitleStyle:{ color: '#00897b'},
  }
  handlePress = () => {
    const { navigate } = this.props.navigation
    navigate('Search')
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.textLabel}>Search term:</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Columns:</Text>
            <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={5}
            step={1} />
            <Text>2</Text>
          </View>
          <View style={styles.field}>
            <TouchableHighlight
              style={styles.button}
              onPress={this.handlePress}
            >
              <Text> Search </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  field: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  form: {
    width: Metrics.screenWidth * 0.8,
    padding: 10
  },
  textInput: {
    width: 100,
    marginRight: 5
  },
  textLabel: {
    fontSize: 15,
    lineHeight: 45,
    marginRight: 5
  },
  label: {
    fontSize: 15
  },
  slider: {
    width: 100
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#00897b',
    borderRadius: 10
  }
})
