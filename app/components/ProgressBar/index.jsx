import { ProgressBar } from 'react-native-paper'
import { Text, View } from 'react-native'

import { Colors } from '../../config/theme'
import styles from './styles'

export default ({ questions, currentQuestion }) => (
  <View style={styles.progressBarContainer}>
    <View style={styles.progressCount}>
      {[...Array(10).keys()].map((num) => (
        <View
          key={num.toString()}
          style={[
            styles.numContainer,
            {
              backgroundColor:
                questions[num]?.guess === 'yes'
                  ? Colors.green
                  : questions[num]?.guess === 'no'
                  ? Colors.danger
                  : Colors.lightGrey,
            },
          ]}
        >
          <Text>{num + 1}</Text>
        </View>
      ))}
    </View>
    <ProgressBar
      progress={currentQuestion * 0.1 + 0.04}
      style={styles.progressBar}
      color={Colors.green}
    />
  </View>
)
