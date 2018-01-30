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
import styles from './Styles/SearchResultScreenStyle'

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      loading: false,
      error: null
    }
  }

  static navigationOptions = {
    title: 'Search App',
    headerStyle:{ backgroundColor: 'white'},
    headerTitleStyle:{ color: '#00897b'},
  }

  async componentDidMount () {
    console.log('MOUNT')
    const errorText = 'Error occured...'
    try {
      const {term} = this.props.navigation.state.params
      this.setState({loading: true, error: null, emptyPlaceholder: null})
      const persistedItems = await AsyncStorage.getItem(term)
      console.log(persistedItems)
      if (persistedItems && persistedItems.length) {
        this.setState({loading: false, items: JSON.parse(persistedItems)})
      } else {
        const res = await Api.search(term)
        if (res.status < 300) {
          const items = await mapImages(res.data.items)
          console.log(items)
          this.setState({loading: false, items})
          if (items.length) {
            await AsyncStorage.setItem(term, JSON.stringify(items))
          }
        } else {
          this.setState({loading: false, error: errorText})
        }
      }
    } catch (e) {
      console.log(e)
      this.setState({loading: false, error: errorText})
    }
  }

  render () {
    const {loading, items, error} = this.state
    const {columns} = this.props.navigation.state.params
    const imageStyle = {
      backgroundColor: 'lightgrey'
    }
    return (
      <View style={styles.container}>
        {
          !loading
            ? <View>
              {
                !error
                ? <View>
                  {
                    items.length ? <Masonry
                      columns={columns}
                      bricks={items}
                      spacing={2}
                      imageContainerStyle={imageStyle}
                      customImageProps={{resizeMode: 'contain'}}
                    />
                  : <Text style={styles.text}>Nothing found...</Text>
                  }
                </View>
              : <Text style={styles.text}>{error}</Text>
              }
            </View>
          : <ActivityIndicator size='large' />
        }
      </View>
    )
  }
}
