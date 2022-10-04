import { useEffect, useState } from 'react'
import { Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { FontAwesome } from '@expo/vector-icons'

import LoadingModal from '../../components/common/LoadingModal'
import { Colors } from '../../config/theme'
import { fetchSubCategories } from '../../api/categories'
import SubCategoryCard from '../../components/SubCategoryCard'
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads'
import { questionBannerId } from '../../config/adIds'

import styles from './styles'

const SubCategories = (props) => {
  const [subCategories, setSubCategories] = useState([])
  const [loading, showLoading] = useState(false)
  const [currentCategory, setCurrentCategory] = useState({})

  useEffect(() => {
    if (props.route.params?.category) {
      setCurrentCategory(props.route.params.category)
      handleGetSubCategories(props.route.params.category.id)
    }

    return () => {
      setSubCategories([])
      setCurrentCategory({})
    }
  }, [props.route.params])

  const handleGetSubCategories = async (id) => {
    try {
      showLoading(true)
      const data = await fetchSubCategories(id)
      setSubCategories(data)
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
        <StatusBar backgroundColor={Colors.primary} style='light' />
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
