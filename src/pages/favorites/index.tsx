import React, { useState } from 'react'
import { View, ScrollView } from 'react-native' 
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/pageHeader'
import TeacherItem from '../../components/teacherItem'

import Teacher from '../../models/teacher'
import { getFavorites } from '../../repositories/favorites'

import styles from './styles'

const Favorites = () => {
  const [favorites, setFavorites] = useState<Teacher[]>([])

  useFocusEffect(
    React.useCallback(() => {
      getFavorites().then(res => {
        setFavorites(res)
      })
    }, [])
  )
  
  return (
    <View style={styles.container}>
      <PageHeader title='Meus Proffys favoritos' />
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherListScroll}
      >
        {favorites.map(teacher => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default Favorites
