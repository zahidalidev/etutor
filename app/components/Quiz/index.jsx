import { Animated, Text, View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

import Button from '../common/Button'
import { Colors } from '../../config/theme'
import ProgressBar from '../ProgressBar'

import styles from './styles'

const Quiz = ({
  questions,
  currentQuestion,
  showNextButton,
  opacity,
  handleCheckAnswer,
  handleNext,
}) => (
  <>
    <View style={styles.bodyContainer}>
      <ProgressBar questions={questions} currentQuestion={currentQuestion} />
      <View style={styles.questionContainer}>
        <Text style={styles.questionHeading}>Choose the correct answer</Text>
        <Text style={styles.questionDescription}>{questions[currentQuestion]?.question}</Text>
        <View style={styles.questionOption}>
          {questions[currentQuestion]?.sub_quiz_options.map((option, index) => (
            <Button
              key={option.option_value}
              handleSubmit={() => handleCheckAnswer(index)}
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
