import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderProfile = ({myProfile}) => {
    
  return (
    <View style={{flexDirection:'column',position:'relative'}}>
      <View style={{height:175,
                    padding:7.5,
                    backgroundColor:'#fff',}} >
        <Image resizeMode='cover'
               source={myProfile[0].backgroundImage} 
               style={{width:'100%',
                       height:'100%',}} />
      </View>
      <View style={{width:'100%',
                    alignItems:'center',
                    justifyContent:'center',
                    position:'absolute',
                    bottom:-75}} >
        <View style={{borderRadius:100,
                      backgroundColor:'#fff',
                      padding:7.5,
                      }}>
        <Image source={myProfile[0].avata} style={{width:150,height:150,borderRadius:100}} />
        </View>
        <View>
          <Text>{myProfile[0].name}</Text>
        </View>
      </View>
      
    </View>
  )
}

export  {HeaderProfile}

const styles = StyleSheet.create({})