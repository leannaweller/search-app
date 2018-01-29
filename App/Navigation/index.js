import {
  StackNavigator
} from 'react-navigation'

import MainScreen from '../Components/MainScreen'
import SearchResultScreen from '../Components/SearchResultScreen'
const Navigation = StackNavigator({
  Main: {screen: MainScreen},
  Search: {screen: SearchResultScreen}
})

export default Navigation
