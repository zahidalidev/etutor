import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'

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

export default CategoryCard
