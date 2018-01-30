import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  Slider,
  TouchableHighlight,
  Keyboard
} from 'react-native'
import styles from './Styles/MainScreenStyles'

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: 1,
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
    navigate('Search', {term, columns})
    this.setState({columns: 1, term: ''})
    Keyboard.dismiss()
  }
  handleInputChange = (e) => {
    this.setState({term: e})
  }

  handleSliderChange = (e) => {
    this.setState({columns: e})
  }
  render () {
    const {term, columns} = this.state
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.field}>
            <Text style={styles.textLabel}>Search term:</Text>
            <TextInput style={styles.textInput} onChangeText={this.handleInputChange} value={term}/>
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Columns:</Text>
            <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={5}
            step={1}
            value={columns}
            onValueChange={this.handleSliderChange}/>
          <Text>{columns}</Text>
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
