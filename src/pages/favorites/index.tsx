import React from 'react'
import { View, Text } from 'react-native' 

import PageHeader from '../../components/pageHeader'

import styles from './styles'

const Favorites = () => {
  return (
    <View style={styles.container}>
      <PageHeader title='Meus Proffys favoritos' />
      
      <Text>Favorites</Text>
    </View>
  )
}

export default Favorites
