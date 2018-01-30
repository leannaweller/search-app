import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  Slider,
  TouchableHighlight,
  Keyboard,
  Alert,
  TouchableWithoutFeedback
} from 'react-native'
import styles from './Styles/MainScreenStyles'

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: 2,
      term: ''
    }
  }
  static navigationOptions = {
    title: 'Search App',
    headerStyle:{ backgroundColor: 'white'},
    headerTitleStyle:{ color: '#00897b'},
  }
  handlePress = () => {
    const {term, columns} = this.state
    const { navigate } = this.props.navigation
    this.hideKeyboard()
    if (!term) {
      Alert.alert('Missing search term', 'Please, fill search term!')
    } else {
      navigate('Search', {term, columns})
      this.setState({columns: 2, term: ''})
    }
  }
  handleInputChange = (e) => {
    this.setState({term: e})
  }

  hideKeyboard () {
    Keyboard.dismiss()
  }

  handleSliderChange = (e) => {
    this.setState({columns: e})
  }
  render () {
    const {term, columns} = this.state
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.hideKeyboard}>
          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.textLabel}>Search term:</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleInputChange} value={term}/>
            </View>
            <View style={styles.field}>
              <Text style={styles.label}>Columns:</Text>
              <Slider
              style={styles.slider}
              minimumValue={2}
              maximumValue={5}
              step={1}
              value={columns}
              onValueChange={this.handleSliderChange}/>
            <Text style={styles.sliderText}>{columns}</Text>
            </View>
            <View style={styles.field}>
              <TouchableHighlight
                style={styles.button}
                onPress={this.handlePress}
              >
                <Text style={styles.buttonText}> Search </Text>
              </TouchableHighlight>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}
