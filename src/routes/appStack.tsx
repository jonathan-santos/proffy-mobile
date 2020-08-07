import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/landing'
import GiveClasses from '../pages/giveClasses'

const { Navigator, Screen } = createStackNavigator()

const AppStack = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={Landing} />
      <Screen name='GiveClasses' component={GiveClasses} />
    </Navigator>
  </NavigationContainer>
)

export default AppStack
