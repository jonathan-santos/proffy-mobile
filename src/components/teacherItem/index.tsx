import React, { useState } from 'react'
import { View, Text, Image, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { createConnection } from '../../repositories/connections'
import { createFavorite, removeFavorite } from '../../repositories/favorites'
import Teacher from '../../models/teacher'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

interface TeacherItemProps {
  teacher: Teacher
  favorited: boolean
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited)
  
  const handleToggleFavorited = async () => {
    if (isFavorited) {
      await removeFavorite(teacher)
      setIsFavorited(false)
    } else {
      await createFavorite(teacher)
      setIsFavorited(true)
    }
  }
  
  const handleNavigateToTeacherWhatsappWebPage = () => {
    createConnection(teacher.id)
    Linking.openURL(`whatsapp://send?phone=${'+5511' + teacher.whatsapp}`)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '} 
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            style={[
              styles.favoriteButton,
              isFavorited ? styles.favorite : {}
            ]}
            onPress={handleToggleFavorited}
          >
            {isFavorited
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} />}
          </RectButton>

          <RectButton
            style={styles.contactButton}
            onPress={handleNavigateToTeacherWhatsappWebPage}
          >
            <Image source={whatsappIcon} />
            
            <Text style={styles.contactButtonText}>
              Entrar em contato
            </Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
