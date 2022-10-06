import { Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { FontAwesome } from '@expo/vector-icons'

const SubCategoryCard = ({ item, handleCategory }) => (
  <TouchableOpacity
    key={item.name}
    activeOpacity={0.9}
    onPress={() => handleCategory(item)}
    style={styles.categContaienr}
  >
    <Text style={styles.categName}>{item.title}</Text>
    <FontAwesome name='chevron-right' size={RFPercentage(2)} />
  </TouchableOpacity>
)

export default SubCategoryCard
