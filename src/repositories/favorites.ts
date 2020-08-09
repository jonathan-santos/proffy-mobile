import AsyncStorage from '@react-native-community/async-storage'

import Teacher from '../models/teacher'

export const getFavorites = async () => {
  const res = await AsyncStorage.getItem('favorites')
  if (res) {
    const favorites = JSON.parse(res)
    return favorites
  }

  return []
}

export const createFavorite = async (favorite: any) => {
  const favorites = await getFavorites()
  favorites.push(favorite)
  await AsyncStorage.setItem('favorites', JSON.stringify(favorites))
}

export const removeFavorite = async (favorite: any) => {
  const favorites = await getFavorites()

  const favoriteIndex = favorites.findIndex((teacher: Teacher) => {
    return teacher.id === favorite.id
  })

  favorites.splice(favoriteIndex, 1)

  await AsyncStorage.setItem('favorites', JSON.stringify(favorites))
}

export const clearFavorites = async () => {
  await AsyncStorage.setItem('favorites', JSON.stringify([]))
}
