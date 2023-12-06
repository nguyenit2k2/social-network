import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme'
import { FontAwesome,MaterialCommunityIcons ,FontAwesome5,Ionicons   } from '@expo/vector-icons';
import { myProfile,feeds } from '../constants/data'
const ProfileScreen = () => {
  const renderItem = ({ item }) => (
    <View style={{width:250,height:250,padding:10,backgroundColor:'#fff',marginLeft:5,position:'relative'}} >
      <TouchableOpacity style={{zIndex:1}}>
      <Image source={item.fe} style={{width:'100%',height:'100%'}} />
      </TouchableOpacity>
      <Pressable style={{flexDirection:'row',position:'absolute',zIndex:2,right:0,backgroundColor:COLORS.primary,padding:5,borderRadius:50}} >
        <View style={{borderColor:'white',borderWidth:3,borderRadius:50,padding:5}}>
        <Ionicons name="person-add" size={20} color='#fff' />
        </View>
      </Pressable>
    </View>
  )
  return (

    <View style={styles.container}>
      <ImageBackground source={myProfile[0].backgroundImage} resizeMode="cover" style={styles.image}>
        <View style={{ flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center' }} >
          <View style={{
            width: 150,
            height: 150,
            marginTop: 10,
            borderRadius: 1000,
            padding: 5,
            backgroundColor: '#fff',
            borderColor: COLORS.primary,
            borderWidth:3
          }} >
            <Image source={myProfile[0].avata} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{flexDirection:'row',gap:10}} >
              <Text>{myProfile[0].name}</Text>
            
            </View>
            <View>
              <Text style={{color:'gray',fontSize:14}} >
                {myProfile[0].description}
              </Text>
            </View>
          </View>
          <View style={{flexDirection:"row",marginHorizontal:30,gap:10,marginVertical:10}} >
            <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:12,borderRadius:5,backgroundColor:COLORS.primary }} >
              <Text style={{color:'white',fontWeight:'bold'}} >
                Message
              </Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',padding:12,borderRadius:5}}>
               <Text style={{color:COLORS.primary,fontWeight:'bold'}}>
                Add Friends
               </Text>
            </View>
          </View>
          <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center'}} >
             <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',flex:1}} >
                 <Text style={{fontSize:22,fontWeight:'bold'}} >78</Text>
                 <Text style={{fontSize:14,color:'#808080'}} >Posts</Text>
             </View>
             <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',flex:1}} >
                 <Text style={{fontSize:22,fontWeight:'bold'}} >80</Text>
                 <Text style={{fontSize:14,color:'#808080'}} >Follow</Text>
             </View>
             <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',flex:1}} >
                 <Text style={{fontSize:22,fontWeight:'bold'}} >435</Text>
                 <Text style={{fontSize:14,color:'#808080'}} >Following</Text>
             </View>
             
             
          </View>
          <View style={{flexDirection:'row',marginTop:10}} >
            <View style={{flexDirection:'row',gap:5,justifyContent:'center',alignItems:'center',flex:1,borderRightColor:'gray',borderRightWidth:0.5}} >
            <FontAwesome5 name="user-friends" size={20} color="black" />
            
            <Text style={{fontWeight:'bold',fontSize:16}} >Friends</Text>
            </View>
            <View style={{flexDirection:'row',gap:5,justifyContent:'center',alignItems:'center',flex:1}} >
            <MaterialCommunityIcons name="post-outline"  size={20} color="gray" />
            <Text style={{fontWeight:'bold',fontSize:16,color:'gray'}} >Posts</Text>
            </View>
          </View>
          <View style={{alignItems:'center',justifyContent:'center',margin:10}} >
            <FlatList
              horizontal={true}
              data={feeds}
              renderItem={renderItem}
              keyExtractor={(item)=>item.id}
              
              />
          </View>
        </View>
      </ImageBackground>
    </View>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },


})