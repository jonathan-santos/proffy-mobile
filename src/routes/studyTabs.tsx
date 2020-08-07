import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TeacherList from '../pages/teacherList'
import Favorites from '../pages/favorites'

const { Navigator, Screen } = createBottomTabNavigator()

const StudyTabs = () => (
  <Navigator>
    <Screen name='TeacherList' component={TeacherList} />
    <Screen name='Favorites' component={Favorites} />
  </Navigator>
)

export default StudyTabs
