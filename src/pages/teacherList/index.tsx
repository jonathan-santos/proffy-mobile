import React from 'react'
import { View, Text } from 'react-native'

import PageHeader from '../../components/pageHeader'

import styles from './styles'

const TeacherList = () => {
  return (
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis' />
      
      <Text>Teacher List</Text>
    </View>
  )
}

export default TeacherList
