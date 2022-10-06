import { Audio } from 'expo-av'
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { FontAwesome } from '@expo/vector-icons'
import { Text, View, StatusBar, TouchableOpacity, Vibration, Animated } from 'react-native'
import { useEffect, useState } from 'react'

import AnimatedButton from '../../components/AnimatedButton'
import { Colors } from '../../config/theme'
import LoadingModal from '../../components/common/LoadingModal'
import { questionBannerId } from '../../config/adIds'
import Quiz from '../../components/Quiz'
import Result from '../result'
import { useSelector } from 'react-redux'

import styles from './styles'
import successBell from '../../../assets/sounds/success_bell-6776.mp3'

const Questions = (props) => {
  const [questions, setQuestions] = useState([])
  const [loading, showLoading] = useState(false)
  const [currentSubCategory, setSubCurrentCategory] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [sound, setSound] = useState()
  const [showAd, setShowAd] = useState(false)
  const [opacity, setOpacity] = useState(new Animated.Value(0))
  const [currentCategory, setCurrentCategory] = useState({})
  const allQuestions = useSelector(state => state.questions)

  const [result, setResult] = useState({
    correct: 0,
    inCorrect: 0,
  })

  useEffect(() => {
    if (props.route.params?.subCategory) {
      setSubCurrentCategory(props.route.params.subCategory)
      handleGetQuestions(props.route.params.subCategory.title)
      setCurrentCategory(props.route.params.currentCategory)
    }

    return () => {
      setCurrentQuestion(0)
      setShowResult(false)
    }
  }, [props.route.params])

  const handleGetQuestions = (title) => {
    setQuestions(allQuestions[title])
  }

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(successBell)
    setSound(sound)
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  const handleCheckAnswer = (answerIndex) => {
    const tempQuestion = [...questions]
    tempQuestion[currentQuestion].sub_quiz_options[answerIndex].currentAnswer =
      tempQuestion[currentQuestion].sub_quiz_options[answerIndex].is_correct === 1 ? 'yes' : 'no'
    tempQuestion[currentQuestion].optionDisable = true
    tempQuestion[currentQuestion].guess =
      tempQuestion[currentQuestion].sub_quiz_options[answerIndex].currentAnswer
    setQuestions(tempQuestion)
    setShowNextButton(true)
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
    tempQuestion[currentQuestion].guess === 'no' ? Vibration.vibrate(1000) : playSound()
  }

  const handleNext = () => {
    if (currentQuestion === 3 && !showAd) return setShowAd(true)
    setShowAd(false)
    if (currentQuestion < 9) {
      setCurrentQuestion(currentQuestion + 1)
      setShowNextButton(false)
      setOpacity(new Animated.Value(0))
    } else {
      makeResult()
    }
  }

  const makeResult = () => {
    setShowResult(true)

    const resultCounts = {
      correct: 0,
      inCorrect: 0,
    }

    questions.forEach((item) => {
      if (item.guess === 'yes') {
        resultCounts.correct += 1
      } else if (item.guess === 'no') {
        resultCounts.inCorrect += 1
      }
    })

    setResult(resultCounts)
  }

  const handleAgainTest = () => {
    setCurrentQuestion(0)
    setShowResult(false)
    handleGetQuestions(props.route.params?.subCategory.id)
  }

  const handleBack = () => {
    setCurrentQuestion(0)
    setShowResult(false)
    setQuestions([])
    setShowAd(false)
    props.navigation.navigate('SubCategories', {
      category: currentCategory,
    })
  }

  return (
    <View style={styles.container}>
      <LoadingModal show={loading} />
      <StatusBar backgroundColor='transparent' translucent style='light' />
      <View style={styles.header}>
        <View style={styles.pageNavigation}>
          <TouchableOpacity style={styles.backIcon} onPress={handleBack}>
            <FontAwesome name='chevron-left' size={RFPercentage(2)} color={Colors.white} />
          </TouchableOpacity>
          <Text style={styles.heading}>{currentSubCategory.title}</Text>
        </View>
      </View>
      {!showResult ? (
        !showAd ? (
          <Quiz
            questions={questions}
            currentQuestion={currentQuestion}
            showNextButton={showNextButton}
            opacity={opacity}
            handleCheckAnswer={handleCheckAnswer}
            handleNext={handleNext}
          />
        ) : (
          <>
            <View style={styles.rectangleAd}>
              <BannerAd
                unitId={questionBannerId}
                size={BannerAdSize.MEDIUM_RECTANGLE}
                requestOptions={{
                  requestNonPersonalizedAdsOnly: true,
                }}
              />
            </View>
            <AnimatedButton
              showNextButton
              opacity={opacity}
              currentQuestion={currentQuestion}
              handleNext={handleNext}
            />
          </>
        )
      ) : (
        <Result
          result={result}
          handleAgainTest={handleAgainTest}
          handleMoreExercises={handleBack}
        />
      )}
      <View style={styles.homeBanner}>
        <BannerAd
          unitId={questionBannerId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </View>
  )
}

export default Questions
