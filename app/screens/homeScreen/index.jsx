import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'
import Constants from 'expo-constants'
import { Text, View, StatusBar, FlatList, RefreshControl, Image } from 'react-native'
import { useEffect, useState, useCallback, useRef } from 'react'
import * as Notifications from 'expo-notifications'
import { useDispatch, useSelector } from 'react-redux'

import { ADD_QUESTIONS } from '../../store/questions'
import { ADD_SUB_CATEGORIES } from '../../store/subCategories'
import CategoryCard from '../../components/CategoryCard'
import { fetchAllCategories, fetchQuestions, fetchSubCategories } from '../../api/categories'
import getPushNotificationsToken from '../../utils/getNotificationToken'
import LoadingModal from '../../components/common/LoadingModal'
import { questionBannerId } from '../../config/adIds'
import { saveNotificationToken } from '../../api/token'
import { SAVE_CATEGORIES } from '../../store/categories'

import styles from './styles'
import logo from '../../../assets/logo.png'

const HomeScreen = (props) => {
  const [loading, showLoading] = useState(false)
  const [backgroundLoading, setBackgroundLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [notification, setNotification] = useState()
  const notificationListener = useRef({})
  const responseListener = useRef({})
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories)

  const onRefresh = useCallback(async() => {
    setRefreshing(true)
    if (categories.length === 0) {
      await handleGetAllCategories()
    }
    setRefreshing(false)
  }, [])

  const getNotificationToken = async () => {
    try {
      const token = await getPushNotificationsToken()
      const body = {
        firebase_token: token,
        device_id: Constants.installationId,
      }
      await saveNotificationToken(body)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getNotificationToken()
    listenPushNotification()
    if (categories.length === 0) {
      handleGetAllCategories()
    }
  }, [])

  useEffect(() => {
    if (categories.length !== 0) {
      handleGetSubCategories()
    }
  }, [categories])

  const listenPushNotification = () => {
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification)
    })

    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      props.navigation.navigate('Home')
    })

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  }

  const handleGetAllCategories = async () => {
    try {
      if (!refreshing)
        showLoading(true)
      const data = await fetchAllCategories()
      dispatch(SAVE_CATEGORIES(data))
    } catch (error) {
      console.log({ message: 'Categories not found' }, error)
    }
    showLoading(false)
  }

  const handleCategory = (category) => {
    props.navigation.navigate('SubCategories', {
      category, backgroundLoading
    })
  }

  const handleGetSubCategories = async () => {
    try {
      setBackgroundLoading(true)
      for (const { id, title } of categories) {
        const data = await fetchSubCategories(id)
        dispatch(ADD_SUB_CATEGORIES({ title, data }))
        await handleGetQuestions(data)
      }
    } catch (error) {
      console.log({ message: 'Sub categories not found' }, error)
    }
    setBackgroundLoading(false)
  }

  const handleGetQuestions = async (subCategories) => {
    try {
      for (const { id, title } of subCategories) {
        const data = await fetchQuestions(id)
        dispatch(ADD_QUESTIONS({ title, data }))
      }
    } catch (error) {
      console.log({ message: 'Questions not found' }, error)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <LoadingModal show={loading} />
        <View style={styles.header}>
          <StatusBar translucent backgroundColor='transparent' style='light' />
          <View style={styles.headerCol1}></View>
          <View style={styles.headerCol2}></View>
          <View style={styles.headerCol3}></View>
          <View style={styles.headerInnerBox}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.subHeading}>Test to learn!</Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          style={styles.bodyContainer}
          data={categories}
          numColumns={2}
          renderItem={({ item, index }) => (
            <CategoryCard item={item} handleCategory={handleCategory} index={index} />
          )}
        />
      </View>
      <View style={styles.homeBanner}>
        <BannerAd
          unitId={questionBannerId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </>
  )
}

export default HomeScreen
