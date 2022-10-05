import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Colors } from '../config/theme'

const CategoryCard = ({ item, handleCategory }) => (
  <TouchableOpacity
    key={item.name}
    activeOpacity={0.9}
    onPress={() => handleCategory(item)}
    style={[styles.categContaienr]}
  >
    <Text style={styles.categName}>{item.title}</Text>
  </TouchableOpacity>
)

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

export default CategoryCard
