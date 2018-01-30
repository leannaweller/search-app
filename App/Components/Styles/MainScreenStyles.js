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
    marginBottom: 20
  },
  form: {
    width: Metrics.screenWidth * 0.8,
    padding: 10
  },
  textInput: {
    width: Metrics.screenWidth * 0.5,
    marginRight: 5
  },
  textLabel: {
    fontSize: 17,
    lineHeight: 45,
    marginRight: 5
  },
  label: {
    fontSize: 17
  },
  slider: {
    width: Metrics.screenWidth * 0.5
  },
  sliderText: {
    fontSize: 17
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#00897b',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4
  },
  buttonText: {
    color: 'white',
    fontSize: 17
  }
})
