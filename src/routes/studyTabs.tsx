import React from 'react'
import { createBottomTabNavigator, BottomTabBarOptions } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/teacherList'
import Favorites from '../pages/favorites'

const { Navigator, Screen } = createBottomTabNavigator()

const StudyTabs = () => (
  <Navigator tabBarOptions={topBarOptions}>
    <Screen
      name='TeacherList'
      component={TeacherList}
      options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: (props) => <Ionicons name='ios-easel' {...props} />
      }}
    />

    <Screen
      name='Favorites'
      component={Favorites}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: (props) => <Ionicons name='ios-heart' {...props} />
      }}
    />
  </Navigator>
)

const topBarOptions: BottomTabBarOptions = {
  style: {
    elevation: 0,
    shadowOpacity: 0,
    height: 64
  },
  tabStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconStyle: {
    flex: 0,
    width: 20,
    height: 20
  },
  labelStyle: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 13,
    marginLeft: 16
  },
  inactiveBackgroundColor: '#FAFCFC',
  activeBackgroundColor: '#EBEBF5',
  inactiveTintColor: '#C1BCCC',
  activeTintColor: '#32264D'
}

export default StudyTabs
