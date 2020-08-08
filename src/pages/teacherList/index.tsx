import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/pageHeader'
import TeacherItem from '../../components/teacherItem'

import styles from './styles'

const TeacherList = () => {
  const [filtersVisible, setFiltersVisible] = useState(true)

  const handleToggleFiltersVisible = () => {
    setFiltersVisible(!filtersVisible)
  }
  
  return (
    <View style={styles.container}>
      <PageHeader
        title='Proffys disponíveis'
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name='filter' size={20} color={filtersVisible ? '#E33D3D' : '#FFF'} />
          </BorderlessButton>
        )}
      >
        {filtersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>

            <TextInput
              style={styles.input}
              placeholder='Qual a matéria?'
              placeholderTextColor='#C1BCCC'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>

                <TextInput
                  style={styles.input}
                  placeholder='Qual dia?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>

                <TextInput
                  style={styles.input}
                  placeholder='Qual hora?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Pesquisar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      
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
