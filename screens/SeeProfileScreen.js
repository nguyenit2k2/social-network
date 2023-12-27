import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileScreen from './ProfileScreen';
import { anotherUserProfile } from '../constants/data'
import { idUser } from '../constants/data'
import { myProfile } from '../constants/data'
import { useRoute } from '@react-navigation/native';
const SeeProfileScreen = () => {
  return (
   <View style={{flex:1}}>
    <ProfileScreen myProfile={anotherUserProfile}/>
   </View>
    
   
  )
}

export default SeeProfileScreen

const styles = StyleSheet.create({})