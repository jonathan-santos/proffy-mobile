import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/pageHeader'
import TeacherItem from '../../components/teacherItem'

import { getTeachers } from '../../repositories/teachers'
import Teacher from '../../models/teacher'

import styles from './styles'

const TeacherList = () => {
  const [filtersVisible, setFiltersVisible] = useState(true)
  const [weekDay, setWeekDay] = useState('')
  const [subject, setSubject] = useState('')
  const [time, setTime] = useState('')
  const [teachers, setTeachers] = useState(new Array<Teacher>())

  const handleToggleFiltersVisible = () => {
    setFiltersVisible(!filtersVisible)
  }

  const handleFiltersSubmit = async () => {
    const params = {
      subject,
      week_day: "1",
      time
    }

    const teachers = await getTeachers(params)
    setTeachers(teachers)
    setFiltersVisible(false)
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
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder='Qual a matéria?'
              placeholderTextColor='#C1BCCC'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>

                <TextInput
                  style={styles.input}
                  value={weekDay}
                  onChangeText={text => setWeekDay(text)}
                  placeholder='Qual dia?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>

                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder='Qual hora?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>
            </View>

            <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
              <Text style={styles.submitButtonText}>Pesquisar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherListScroll}
      >
        {teachers.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </ScrollView>
    </View>
  )
}

export default TeacherList
