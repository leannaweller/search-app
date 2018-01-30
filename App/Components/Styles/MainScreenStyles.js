import {Metrics} from '../../Utils'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
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
