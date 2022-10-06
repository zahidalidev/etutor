import { StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { Colors } from '../../config/theme'

const styles = StyleSheet.create({
  progressBarContainer: {
    marginTop: RFPercentage(5),
    width: '90%',
  },

  progressCount: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
    marginBottom: -16,
  },

  numContainer: {
    width: RFPercentage(3),
    height: RFPercentage(3),
    borderRadius: RFPercentage(3),
    alignItems: 'center',
    justifyContent: 'center',
  },

  progressBar: {
    height: 8,
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
  },
})

export default styles
