import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialIcons, Ionicons, Feather, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import React from 'react'

const HeaderFeed = () => {
  const navigation = useNavigation();
  return (
    <View style={{
        flexDirection:'row',
        alignItems:'center',
    }}>
     <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#3B7197',borderRadius:5,marginVertical:10,flex:1}} >
      
      <Text style={{marginLeft:2,fontSize:20,fontWeight:'bold',color:'white'}} >YSOCIAL</Text>
     </View>
     <View style={{flex:2,width:'100%',padding:5}} >
     <Pressable onPress={()=> {navigation.navigate('FindScreen')}}
     style={{flexDirection:'row',position:'relative'}}>
     <TextInput  editable={false}
                style={{width:'100%',borderColor:'gray',borderWidth:0.5,padding:7.5,borderRadius:20,backgroundColor:'white' }}
                placeholder='Search ...'/>
  
      <View style={{position:'absolute',right:0,top:'50%',padding:5,alignItems:'center',borderRadius:25}}>
      <Ionicons name="md-search-sharp" size={24} color="black" style={{position:'relative',top:'-65%',backgroundColor:'#DCDCDC',padding:5,borderRadius:25}} />
      </View>
      
     </Pressable>
     </View>
      
    </View>
  )
}

export { HeaderFeed }; 

const styles = StyleSheet.create({})