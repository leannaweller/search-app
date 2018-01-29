/**
 * @flow
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  AsyncStorage
} from 'react-native'
import Api from '../Api'
import Masonry from 'react-native-masonry'
import {mapImages} from '../Utils'

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      loading: false
    }
  }

  static navigationOptions = {
    title: 'Search App',
    headerStyle:{ backgroundColor: 'white'},
    headerTitleStyle:{ color: '#00897b'},
  }

  getData = () => {
    
  }

  componentWillReceiveProps (nextProps) {
    const {rows, term} = this.props
    if (nextProps.rows !== rows || nextProps.term !== term) {
      this.getData()
    }
  }

  async componentDidMount () {
    try {
      console.log('CHECK FILE SYSTEM')
      const term = 'cats'
      this.setState({loading: true})
      const persistedRes = await AsyncStorage.getItem(term)
      console.log('CHECKED')
      // if (persistedRes) {
      //   console.log('PERSISTED')
      //   this.setState({loading: false, items: persistedRes})
      // } else {
      //   console.log('NOT PERSISTED')
      //   const res = await Api.search(term)
      //   const items = mapImages(res)
      //   await AsyncStorage.setItem(term, items)
      //   this.setState({loading: false, items})
      // }
    } catch (e) {
      console.log(e)
      this.setState({loading: false})
    }
  }

  render () {
    console.log(this.state.items)
    return (
      <View style={styles.container}>
        {
          !this.state.loading ?
          <Masonry
            columns={2}
            bricks={this.state.items}
          />
          :
          <ActivityIndicator size='large' />
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
