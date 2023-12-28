import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React ,{useState}from 'react'
import {useNavigation, useRoute } from '@react-navigation/native';
import FeedPost from '../components/FeedPost'
import seo1 from '../assets/images/seo1.jpg';
import seo2 from '../assets/images/seo2.jpg';
import seo3 from '../assets/images/seo3.jpg';
import seo4 from '../assets/images/seo4.jpg';
import seo5 from '../assets/images/seo5.jpg';
import { Ionicons,Feather } from '@expo/vector-icons';
const CommentScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const item = route.params.item;
    const updatedUsersComments = [item];
    const [comment,setComments] = useState(''); 
    const [listComments,setListComments]= useState([
        {
            id:1,
            image :seo2,
            comment :'Ảnh của bạn thật tuyệt vời! Bức tranh này đẹp đến từng chi tiết.'
        },
        {
            id:2,
            image :seo3,
            comment :'Ảnh của bạn thật tuyệt vời! Bức tranh này đẹp đến từng chi tiết.'
        },
        {
            id:3,
            image :seo4,
            comment :'Ảnh của bạn thật tuyệt vời! Bức tranh này đẹp đến từng chi tiết.'
        },
        {
            id:4,
            image :seo5,
            comment :'Ảnh của bạn thật tuyệt vời! Bức tranh này đẹp đến từng chi tiết.'
        }
    ])
  const handleComment= ()=>{
    setListComments([{id:Math.floor(Math.random()*1000)+1,image:seo2,comment:comment},...listComments]);
     setComments('');
  }
  return (
   <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    <ScrollView>
   <View style={{flexDirection:'row',position:'relative',padding:10}} >
      <Pressable onPress={()=>navigation.goBack()}
       style={{position:'absolute',padding:10}}>
      <Feather name="arrow-left" size={24} color="black"   />
      </Pressable>
       <View style={{alignItems:'center',justifyContent:'center',width:'100%'}}>
       <Text style={{fontWeight:'bold'}} >Post</Text>
       </View>
       </View>
  <FeedPost users={updatedUsersComments} />
       <View style={{flexDirection:'column'}}>
          <View style={styles.comment}>
             <View style={{flexDirection:'row',backgroundColor:'#fff',padding:5,borderRadius:5,gap:10}}>
                <Image source={seo1} style={{width:40,height:40,borderRadius:50}}/>
                <View style={{flexDirection:'row'}}>
                 <TextInput 
                 style={{borderBottomColor:'gray',borderBottomWidth:0.5,width:250}}
                 multiline
                 placeholder='Comment .....' 
                 value={comment}
                 onChangeText={(text)=>setComments(text)}
                 />
                 <Pressable onPress={()=>handleComment()}
                 style={{alignItems:'center',justifyContent:'center',margin:10}}>
                 <Ionicons name="send" size={24} color="black" />
                 </Pressable>
                </View>
             </View>
           
             
             {listComments.map(item=>(
                <View style={styles.commentContainer} key={item.id}>
                   <View style={{width:40,height:40}}>
                    <Image source={item.image} style={{width:'100%',height:'100%',borderRadius:100}} />
                   </View>
                   <View style={{borderColor:'gray',borderWidth:0.5,padding:1,borderRadius:5,width:'80%'}}>
                    <Text 
                    >{item.comment}</Text>
                   </View>
                </View>
              ))}
             
         
          </View>
       </View>
       </ScrollView>
   </SafeAreaView>
  )
}

export default CommentScreen

const styles = StyleSheet.create({
    commentContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        margin:2,
        backgroundColor:'#fff',
        padding:5
        

    },
    comment:{
        

    }
})