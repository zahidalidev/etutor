import { StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { Colors } from '../../config/theme'

const styles = StyleSheet.create({
  bodyContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    borderTopEndRadius: RFPercentage(3.7),
    borderTopStartRadius: RFPercentage(3.7),
    marginTop: RFPercentage(-4),
    alignItems: 'center',
  },

  questionContainer: {
    width: '90%',
    flexDirection: 'column',
    marginTop: RFPercentage(7),
  },


  questionHeading: {
    fontSize: RFPercentage(2.7),
    fontWeight: '500',
  },

  questionDescription: {
    marginTop: RFPercentage(2),
    fontSize: RFPercentage(2.5),
  },

  questionOption: {
    marginTop: RFPercentage(5),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  nextButton: {
    position: 'absolute',
    bottom: RFPercentage(13),
    left: '6%',
    right: '6%',
  },
})

export default styles
