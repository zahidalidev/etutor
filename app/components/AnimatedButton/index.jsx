import { Animated, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

import Button from '../common/Button'

import styles from './styles'

const AnimatedButton = ({ showNextButton, opacity, currentQuestion, handleNext }) => (
  <View style={styles.nextButton}>
    {showNextButton && (
      <Animated.View
        style={{
          opacity: opacity,
          transform: [
            { scale: opacity.interpolate({ inputRange: [0, 1], outputRange: [0.85, 1] }) },
          ],
        }}
      >
        <Button
          name={currentQuestion === 9 ? 'FINISH' : 'NEXT'}
          handleSubmit={handleNext}
          height={RFPercentage(6)}
          fontSize={RFPercentage(2.7)}
        />
      </Animated.View>
    )}
  </View>
)
export default AnimatedButton
