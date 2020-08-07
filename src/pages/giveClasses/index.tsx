import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import * as Linking from 'expo-linking';

import GiveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

const GiveClasses = () => {
  const handleNavigateToTeacherFormWebPage = () => {
    Linking.openURL('https://google.com')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={GiveClassesBgImage}
        resizeMode='contain'
        style={styles.content}
      >
        <Text style={styles.title}>
          Quer ser {'\n'}
          um Proffy?
        </Text>
        
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton style={styles.okButton} onPress={handleNavigateToTeacherFormWebPage}>
        <Text style={styles.okButtonText}>Começar</Text>
      </RectButton>
    </View>
  )
}

export default GiveClasses
