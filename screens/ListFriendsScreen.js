import { SafeAreaView, StyleSheet, Text, View,Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import {useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { COLORS } from '../constants/theme'
const ListFriendsScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const listFriends = route.params;
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1,padding:5}}>
      <View style={styles.containerHeader} >
      <Pressable onPress={()=>navigation.goBack()}
      style={{left:0,top:0,position:'absolute'}}>
      <Feather name="arrow-left" size={28} color={COLORS.primary} style={{fontWeight:'bold'}} />
      </Pressable>
      <Text style={{fontWeight:'bold',color:COLORS.primary}}>List Friends</Text>
      </View>
       <ScrollView>
       {
         listFriends.map(item=>(
          <View key={item.id} style={styles.friendItem}>
             <View style={styles.itemImage}>
              <Image source={item.image} style={styles.image} resizeMode='cover' />
             </View>
             <View style={styles.itemFriend}>
                 <View style={{padding:10}}>
                  <Text>{item.name}</Text>
                 </View>
                 <View style={styles.detailItem} >
                      <Text style={{color:'gray'}}>{item.address}</Text>
                      <Text style={{color:'white',backgroundColor:COLORS.primary,padding:5,fontWeight:'bold',borderRadius:5}}>{item.numberOfFriends}</Text>
                 </View>
             </View>
          </View>
         ))
       }
       </ScrollView>
    </SafeAreaView>
  )
}

export default ListFriendsScreen

const styles = StyleSheet.create({
  containerHeader:{
    position:'relative',
    alignItems:'center',
    justifyContent:'center',
    padding:5
  },
  friendItem:{
    flexDirection:'row',
    gap:10,
    margin:5,
    borderColor:'gray',
    borderWidth:0.5,
    borderRadius:5,
    padding:7.5
    },
  image:{
    width:70,
    height:70,
    borderRadius:100,
  },
  itemFriend:{
    flexDirection:'column',
  },
  detailItem:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:10,

  }

})