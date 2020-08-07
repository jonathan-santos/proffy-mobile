import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/landing'
import GiveClasses from '../pages/giveClasses'
import TeacherList from '../pages/teacherList'

const { Navigator, Screen } = createStackNavigator()

const AppStack = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Landing' component={Landing} />
      <Screen name='GiveClasses' component={GiveClasses} />
      <Screen name='TeacherList' component={TeacherList} />
    </Navigator>
  </NavigationContainer>
)

export default AppStack
