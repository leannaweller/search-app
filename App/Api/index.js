import Config from '../Config'
import axios from 'axios'

const base = 'https://www.googleapis.com/customsearch/v1'

const search = (term) => {
  return axios.get(`${base}?key=${Config.KEY}&cx=${Config.CX}&q=${term}&searchType=image`)
}

export default {
  search
}
