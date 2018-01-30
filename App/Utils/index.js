import {Dimensions} from 'react-native'
import validUrl from 'valid-url'
import axios from 'axios'
const { width, height } = Dimensions.get('window')

const screenWidth = width < height ? width : height
const screenHeight = width < height ? height : width

export const Metrics = {
  screenHeight,
  screenWidth
}

const isValidResource = async (link) => {
  try {
    if (!validUrl.isUri(link)) return
    const res = await axios.get(link)
    if (res && res.headers['content-type'] && res.headers['content-type'].includes('image/') && res.status < 300) {
      return link
    }
  } catch (e) {
    console.log(e)
  }
}

export const mapImages = async (items, checkLinks = false) => {
  if (checkLinks) {
    const checkedLinks = await Promise.all(items.map(el => isValidResource(el.link)))
    return checkedLinks.filter(el => el).map(el => ({uri: el}))
  } else {
    return items.filter(el => validUrl.isUri(el.link)).map(el => ({uri: el.link}))
  }
}

export default {
  Metrics,
  mapImages
}
