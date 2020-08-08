import React from 'react'
import { View, ScrollView } from 'react-native'

import PageHeader from '../../components/pageHeader'
import TeacherItem from '../../components/teacherItem'

import styles from './styles'

const TeacherList = () => {
  return (
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis' />
      
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

export default TeacherList
