import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/theme'
import { FontAwesome,MaterialCommunityIcons ,FontAwesome5,Ionicons   } from '@expo/vector-icons';
import { myProfile,feeds,idUser } from '../constants/data'
const ProfileScreen = () => {
  const [sendAddFriends,setSendAddFriends] = useState(false);
  const [follow,setFollow] = useState(false);
  const [categoryInfo,setCategoryInfo] = useState({
    detail:false,
    friend :false,
    post :false
  });
  const handlePressCategory = (buttonName)=>{
    setCategoryInfo((prevCategoryInfo)=>{
      const restCategoryInfo = Object.keys(prevCategoryInfo).reduce((acc,key)=>{
        acc[key] = false ;
        console.log(acc[key])
      },{});
      restCategoryInfo[buttonName] = true;
      return restCategoryInfo;
    })
  }
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
            <Pressable onPress={()=>setFollow(!follow)}
            style={[{flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    padding:12,
                    borderRadius:5,
                    backgroundColor:follow? COLORS.primary : 'gray'},
                    
                    ]} >
              <Text style={{color:'white',fontWeight:'bold'}} >
                {follow?"Follow":"UnFollow"}
              </Text>
            </Pressable>
            <Pressable onPress={()=>setSendAddFriends(!sendAddFriends)}
            style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',padding:12,borderRadius:5}}>
               <Text style={{color:COLORS.primary,fontWeight:'bold'}}>
               {sendAddFriends ? "Add Friends ":" Requested" }
               </Text>
            </Pressable>
          </View>
          <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
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
          <View style={{flexDirection:'row',margin:3,alignItems:'center',justifyContent:'center',width:'100%'}} >
             <Pressable onPress={()=>handlePressCategory('detail')}
             style={styles.infoButton} >
             <MaterialCommunityIcons  style={styles.infoIcon} name="post" size={20} color="black" />
              <Text style={styles.infoText} >Details</Text>
             </Pressable>
             <Pressable  onPress={()=>handlePressCategory('friend')}
             style={styles.infoButton} >
             <FontAwesome5 name="user-friends" size={20} color="black"  style={styles.infoIcon} />
              <Text style={styles.infoText} >Friends</Text>
             </Pressable>
             <Pressable  onPress={()=>handlePressCategory('post')}
              style={styles.infoButton} >
             <MaterialCommunityIcons name="account-details" size={20} color="black" style={styles.infoIcon} />
              <Text style={styles.infoText} >Posts</Text>
             </Pressable>
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
    alignItems:'center',
    justifyContent:'center'
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  infoButton :{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:5,
    width:'100%',
    
  },
  infoIcon:{

  },
  infoText :{
    marginLeft:5,
    fontSize:16,
    fontWeight:'bold'
  }


})