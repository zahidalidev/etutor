import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { LogBox } from 'react-native'

import Home from './app/screens/homeScreen'
import SubCategories from './app/screens/subCategories'
import Questions from './app/screens/questions'

LogBox.ignoreAllLogs()

const Stack = createDrawerNavigator()

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='SubCategories' component={SubCategories} />
      <Stack.Screen name='Questions' component={Questions} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
