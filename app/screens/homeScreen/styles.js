import { StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { Colors } from '../../config/theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    width: '100%',
    marginBottom: RFPercentage(7)
  },

  header: {
    width: '100%',
    height: RFPercentage(40),
    flexDirection: 'row'
  },

  headerCol1: {
    backgroundColor: Colors.lightRed,
    width: '40%',
    height: RFPercentage(40),
  },

  headerCol2: {
    backgroundColor: Colors.lightGreen,
    width: '40%',
  },

  headerCol3: {
    backgroundColor: Colors.lightBlue,
    width: '20%',
  },

  bodyContainer: {
    marginTop: RFPercentage(-5),
  },

  headerInnerBox: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    backgroundColor: Colors.lightWhite,
    width: '80%',
    height: RFPercentage(29),
    borderTopRightRadius: 5,
    justifyContent: 'center',
    paddingLeft: RFPercentage(5),
  },

  logo: {
    height: RFPercentage(5),
    width: RFPercentage(16),
    resizeMode: 'contain',
    color: Colors.black,
    marginTop: RFPercentage(-2),
    alignSelf: 'flex-start'
  },

  subHeading: {
    fontSize: RFPercentage(5),
    color: Colors.black,
    fontWeight: '300',
  },

  homeBanner: {
    backgroundColor: Colors.white,
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0
  },

})

export default styles