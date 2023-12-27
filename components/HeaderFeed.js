import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import React from 'react'
import { COLORS } from '../constants';

const HeaderFeed = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.textLogo}>SOCIAL</Text>
      </View> 
      <Pressable  onPress={()=>navigation.navigate('FindScreen')} style={styles.containInput}>
        <View style={styles.input}>
          <TextInput placeholder='Search .......'
              editable={false}/>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="search" size={28} color={COLORS.primary} style={{fontWeight:'bold'}} />
        </View>
        </Pressable> 
    </View>
  )
}

export { HeaderFeed }; 

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginVertical:5,
    backgroundColor:'#fff',
    padding:5,
    borderRadius:5
  },
  header:{
    flex:1,
  },
  containInput:{
    flex:3,
    flexDirection:'row',
    backgroundColor:'#fff',
    width:'100%',
    position:'relative',
    padding:5,
    borderRadius:15,
  },
  input:{
    width:'100%',

  },
  iconContainer:{
   position:'absolute',
   padding:5,
   borderRadius:50,
   right:0,
   top:1
  },
  header:{
    alignItems:'center',
    justifyContent:"center",
    marginHorizontal:10,
    borderRightColorColor:'gray',
    borderRightWidth:0.5,
    padding:5
  },
  textLogo:{
    fontWeight:'bold',
    fontSize:20,
    color:COLORS.primary

  }



})