import { FontAwesome } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'
import { Colors } from '../../config/theme'
import LoadingModal from '../../components/common/LoadingModal'
import { questionBannerId } from '../../config/adIds'
import SubCategoryCard from '../../components/SubCategoryCard'

import styles from './styles'

const SubCategories = (props) => {
  const [subCategories, setSubCategories] = useState([])
  const [loading, showLoading] = useState(false)
  const [currentCategory, setCurrentCategory] = useState({})
  const allSubCategories = useSelector(state => state.subCategories)

  useEffect(() => {
    if (props.route.params?.category) {
      setCurrentCategory(props.route.params.category)
      handleGetSubCategories(props.route.params.category.title)
    }

    return () => {
      setSubCategories([])
      setCurrentCategory({})
    }
  }, [props.route.params])

  const handleGetSubCategories = async (title) => {
    try {
      showLoading(true)
      setSubCategories(allSubCategories[title])
    } catch (error) {
      console.log({ message: 'Sub categories not found' }, error)
    }
    showLoading(false)
  }

  const handleCategory = (subCategory) => {
    props.navigation.navigate('Questions', {
      subCategory,
      currentCategory,
    })
  }

  return (
    <>
      <View style={styles.container}>
        <LoadingModal show={loading} />
        <StatusBar backgroundColor='transparent' translucent style='light' />
        <View style={styles.header}></View>
        <View style={styles.pageNavigation}>
          <View style={styles.paginationHeading}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
              <FontAwesome
                name='chevron-left'
                style={styles.backIcon}
                size={RFPercentage(2)}
                color={Colors.primary}
              />
            </TouchableOpacity>
            <Text style={styles.heading}>{currentCategory?.title}</Text>
          </View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{ marginTop: RFPercentage(2) }}
          data={subCategories}
          renderItem={({ item }) => <SubCategoryCard item={item} handleCategory={handleCategory} />}
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

export default SubCategories
