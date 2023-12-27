import { Image, Pressable, SafeAreaView, StyleSheet, Text, View,TextInput } from 'react-native'
import React ,{ useState }from 'react'
import { myProfile } from '../constants/data'
import { FontAwesome5,Entypo ,AntDesign  } from '@expo/vector-icons';
import {COLORS} from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler';
const CreateScreen = () => {
 
  return (
   <SafeAreaView style={{flex:1,backgroundColor:'#fff'}} >
      <View style={{flexDirection:'column'}}>
        <View style={styles.headerPost}>
          <Text style={{fontWeight:'bold',fontSize:18}} >NEW POST</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:5,borderBottomWidth:0.5,borderBottomColor:'gray'}}>
           <View style={styles.avatar}>
            <Image source={myProfile.avatar} style={styles.image} resizeMode='cover'/>
           </View>
           <View style={{flexDirection:'column',marginHorizontal:10}}>
             <View style={styles.name}>
              <Text>
                {myProfile.name}
              </Text>
             </View>
             <View style={{flexDirection:"row"}} >
               <View style={styles.selectCategoryPosts}>
               <FontAwesome5 name="user-friends" size={22} color="black" />
               <Text >Friends</Text>
               </View>
               <View style={styles.selectCategoryPosts}>
               <Entypo name="network" size={22} color="black" />
               <Text>Public</Text>
               </View>
             </View>
           </View>
        </View>
        {/**\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\CONTENT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         */}
        <View style={styles.contentContainer} >
          <View style={styles.textContent}>
            <Text>Content:</Text>
            <TextInput
              style={styles.textInput}
              multiple = {true}
              numberOfLines ={10}
              textAlignVertical="top"
            />
          </View>
          <View style={styles.textContent}>
            <Text>Upload File :</Text>
            <View style={styles.file}>
                <TouchableOpacity style={styles.btnFile}>
                  <View>
                    <Text>Select File</Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginVertical:30}}>
          <Text style={{backgroundColor:COLORS.primary,padding:10,color:'white',fontWeight:'bold'}} >POST</Text>
        </View>

      </View>
   </SafeAreaView>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  headerPost:{
    alignItems:'center',
    justifyContent:'center',
  },
  avatar:{
    width:50,
    height:50
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:50,
  },
  selectCategoryPosts:{
    flexDirection:'row',
    gap:5,
    marginHorizontal:10,
    padding:5

  },
  name:{
    marginHorizontal:5
  },
  textInput:{
    borderColor:'gray',
    borderWidth:0.5,

  },
  textContent:{
    marginHorizontal:5
  },
  file:{
    width:'100%',
    height:200,
    borderWidth:1,
    borderColor:'gray',
    borderStyle:'dashed',
    alignItems:'center',
    justifyContent:'center',
  },
  btnFile:{
    borderColor:'gray',
    borderWidth:2,
    padding:5,
    borderRadius:5
  }
})