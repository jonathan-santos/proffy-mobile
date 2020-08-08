import React from 'react'
import { View, ScrollView } from 'react-native' 

import PageHeader from '../../components/pageHeader'
import TeacherItem from '../../components/teacherItem'

import styles from './styles'

const Favorites = () => {
  return (
    <View style={styles.container}>
      <PageHeader title='Meus Proffys favoritos' />
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherListScroll}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  )
}

export default Favorites
