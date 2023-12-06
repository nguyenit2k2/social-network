import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import {friends} from '../constants/data'
const NotificaitonScreen = () => {
  const [title,setTitle] = useState(true);
  
  const renderItem =({item})=>(
    <View style={styles.containItem} >
         <View style={{width:60,height:60}}>
         <Image source={item.image}  style={styles.image} resizeMode='cover'/>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center',marginLeft:20}}>
           <View>
            <Text><Text style={{fontWeight:'bold'}} >{item.name} </Text>gửi lời mời kết bạn đến bạn :</Text> 
           </View>
            <View style={{flexDirection:'row',justifyContent:'center'}} >
                <View style={styles.button}>
                  <Text style={styles.textButton}>Đồng ý</Text>
                </View>
                <View  style={styles.button}>
                  <Text style={styles.textButton}>Từ Chối</Text>
                </View>
            </View>
         </View>
    </View>
  )
  return (
  <View style={styles.contain} >
    <View>
      <Text style={{fontSize:24,fontWeight:'bold'}}  >Notification</Text>
    </View>
    <View style={{flexDirection:'row' , gap:10}}>
       <Pressable  onPress={()=>setTitle(true)} style={styles.title} >
        <Text style={[styles.textTitle,title? styles.titleState : '' ]} >Friends</Text>
       </Pressable>
       <Pressable onPress={()=>setTitle(false)} style={styles.title} >
        <Text style={[styles.textTitle,title?  '': styles.titleState]}>Followings</Text>
       </Pressable>
    </View>
    <View>
      <FlatList
      data={friends}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id}
       />
    </View>
  </View>
  )
}

export default NotificaitonScreen

const styles = StyleSheet.create({
    contain :{
      flexDirection:"column",
      marginTop:5,
      marginHorizontal:10,
      backgroundColor:'white',
      height:'100%'
    },
    textTitle:{
       fontSize:16,
      
     

    },
    title:{
      marginHorizontal:4.5,
      padding:2
    },
    titleState:{
      fontWeight:'bold',
      color:'#74BDE0',
      borderBottomColor:'#74BDE0',
      borderBottomWidth:2,
    },
    image:{
      width:'100%',
      height:'100%',
      borderRadius:50
    },
    containItem:{
      flexDirection:'row',
      padding:5,
      borderBottomColor:'gray',
      borderBottomWidth:0.5
    },
    button:{
      flex:1,
      alignItems:'center',
      
    },
    textButton:{
      
    }

})