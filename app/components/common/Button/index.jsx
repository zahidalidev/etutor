import { Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { Colors } from '../../../config/theme'
import styles from './styles'

const Button = ({
  name,
  width,
  handleSubmit,
  height = RFPercentage(5.3),
  backgroundColor = Colors.primary,
  fontSize = RFPercentage(2.3),
  ButtonStyle,
  color = Colors.white,
  disable = false,
}) => (
  <TouchableOpacity
    disabled={disable}
    activeOpacity={0.8}
    onPress={handleSubmit}
    style={[styles.buttonContainer, { width, height, backgroundColor }, ButtonStyle]}
  >
    <Text style={{ fontSize, color }}>{name}</Text>
  </TouchableOpacity>
)

export default Button
