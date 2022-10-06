import { Dimensions, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

const windowWidth = Dimensions.get('window').width

import Colors from '../../config/theme'

const styles = StyleSheet.create({
  categContaienr: {
    flex: 1,
    width: windowWidth - RFPercentage(6),
    height: RFPercentage(9),
    marginBottom: RFPercentage(2.5),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RFPercentage(2),
    backgroundColor: Colors.lightGrey,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
    flexDirection: 'row',
  },

  categName: {
    fontSize: RFPercentage(2.8),
    color: Colors.black,
  },
})

export default styles
