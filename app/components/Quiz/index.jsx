import { Animated, Text, View } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { Colors } from '../../config/theme'
import Button from '../common/Button'

import styles from './styles'

const Quiz = ({
  questions,
  currentQuestion,
  showNextButton,
  opacity,
  handleCheckAnser,
  handleNext,
}) => (
  <>
    <View style={styles.bodyContainer}>
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
      <View style={styles.questionContainer}>
        <Text style={styles.questionHeading}>Choose the correct answer</Text>
        <Text style={styles.questionDescription}>{questions[currentQuestion]?.question}</Text>
        <View style={styles.questionOption}>
          {questions[currentQuestion]?.sub_quiz_options.map((option, index) => (
            <Button
              key={option.option_value}
              handleSubmit={() => handleCheckAnser(index)}
              name={`${option.option_value}${
                option.is_correct === 1 && questions[currentQuestion]?.optionDisable
                  ? ' (correct)'
                  : ''
              }`}
              color={Colors.black}
              height={RFPercentage(6)}
              ButtonStyle={{ marginBottom: RFPercentage(2) }}
              fontSize={RFPercentage(2.7)}
              width='90%'
              disable={questions[currentQuestion]?.optionDisable}
              backgroundColor={
                option.currentAnswer === 'yes' ||
                (option.is_correct === 1 && questions[currentQuestion]?.optionDisable)
                  ? Colors.green
                  : option.currentAnswer === 'no'
                  ? Colors.danger
                  : Colors.lightGrey
              }
            />
          ))}
        </View>
      </View>
    </View>
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
  </>
)

export default Quiz
