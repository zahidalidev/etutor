import { RFPercentage } from 'react-native-responsive-fontsize'
import { StyleSheet } from 'react-native'

import { Colors } from '../../config/theme'

const styles = StyleSheet.create({
  categContaienr: {
    width: RFPercentage(18),
    height: RFPercentage(20),
    margin: RFPercentage(1.8),
    marginTop: RFPercentage(0),
    marginBottom: RFPercentage(2.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
  },

  categName: {
    fontSize: RFPercentage(3),
    fontWeight: '400',
    color: Colors.black,
  },
})

export default styles
