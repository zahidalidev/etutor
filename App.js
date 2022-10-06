import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import { configureStore } from './app/store/configureStore'
import Home from './app/screens/homeScreen'
import Questions from './app/screens/questions'
import SubCategories from './app/screens/subCategories'

LogBox.ignoreAllLogs()

const Stack = createDrawerNavigator()
const store = configureStore()

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SubCategories' component={SubCategories} />
        <Stack.Screen name='Questions' component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
)

export default App
