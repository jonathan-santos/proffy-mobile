import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import { getTotalConnections } from '../../repositories/connections'

import landing from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import styles from './styles'

const Landing = () => {
	const [ totalConnections, setTotalConnections ] = useState(0)
	const { navigate } = useNavigation()

	useEffect(() => {
		getTotalConnections()
			.then(res => {
				setTotalConnections(res)
			})
	}, [])

	const handleNavigateToStudyTabsPage = () => {
		navigate('StudyTabs')
	}
	
	const handleNavigateToGiveClassesPage = () => {
		navigate('GiveClasses')
	}
	
	return (
    <View style={styles.container}>
			<Image source={ landing } style={styles.banner} />

			<Text style={styles.title}>
				Seja bem vindo, {'\n'}
				<Text style={styles.titleBold}>O que deseja fazer?</Text>
			</Text>

			<View style={styles.buttonsContainer}>
				<RectButton
					style={[styles.button, styles.buttonPrimary]}
					onPress={handleNavigateToStudyTabsPage}
				>
					<Image source={studyIcon} />

					<Text style={styles.buttonText}>Estudar</Text>
				</RectButton>

				<RectButton
					onPress={handleNavigateToGiveClassesPage}
					style={[styles.button, styles.buttonSecondary]}
				>
					<Image source={giveClassesIcon} />

					<Text style={styles.buttonText}>Dar aulas</Text>
				</RectButton>
			</View>

			{totalConnections > 0 && (
				<Text style={styles.totalConnections}>
					Total de {totalConnections} conexões {'\n'}
					já realizadas {' '} <Image source={heartIcon} />
				</Text>)}
		</View>
	)
}

export default Landing
