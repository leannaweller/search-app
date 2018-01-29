import {Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window')

const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

export const Metrics = {
  screenHeight,
  screenWidth
}

export const mapImages = (res) => {
  return res.data.items.map((el, i) => {
    return {id: i, uri: el.link}
  }
  )
}

export default {
  Metrics,
  mapImages
}
