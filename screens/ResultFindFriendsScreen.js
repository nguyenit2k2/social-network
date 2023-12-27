import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import {useNavigation, useRoute } from '@react-navigation/native';
import { friends } from '../constants/data';
import { Feather ,FontAwesome5,Entypo  } from '@expo/vector-icons';
import { COLORS } from '../constants/theme'
const ResultFindFriendsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
  
  const [filteredFriends, setFilteredFriends] = useState(friends.filter((friend)=>
   friend.name.toLowerCase().includes(route.params.toLowerCase())
  ));

  const renderItem = ({ item }) => {
    // Logic hiển thị mỗi item trong FlatList
    return (
      <View style={{flexDirection:'row',borderBottomColor:'gray',borderBottomWidth:0.5,padding:5}}>
        <Pressable onPress={()=>navigation.navigate('SeeProfileScreen',{data:item})}
         style={{width:65,height:65}}>
            <Image source={item.avatar} style={{width:'100%',height:'100%',borderRadius:100}} resizeMode='cover' />
        </Pressable>
        <View style={{flexDirection:'column',justifyContent:'center',marginLeft:20}}>
              <View>
                 <Text style={{fontWeight:'bold'}}>{item.name}</Text>
              </View>
              <View>
                  <Text style={{color:'gray'}}>{item.detailUser.address}</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center',gap:5}}>
                   <Text style={{color:COLORS.primary}}>{item.numberFriends}</Text>
                   <FontAwesome5 name="user" size={14} color={COLORS.primary} />
              </View>
        </View>
        <View style={{position:'absolute',right:5,top:'30%',flexDirection:'row',borderColor:COLORS.primary,borderWidth:2,borderRadius:5,padding:2}}>
              <Text style={{color:COLORS.primary}}>
                Thêm bạn bè
              </Text>
              <Entypo name="plus" size={24} color={COLORS.primary} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
          <View style={{padding:5,flexDirection:'column'}}>
            <View style={{flexDirection:'row',position:'relative'}}>
               <Pressable onPress={()=>navigation.goBack()}
               style={{position:'absolute',padding:10}}>
               <Feather name="arrow-left" size={24} color="black" />
               </Pressable>
               <View style={{padding:10,alignItems:'center',justifyContent:'center',width:'100%'}}>
                <Text style={{fontWeight:'bold'}}>Result</Text>
               </View>
            </View>
            <FlatList
            data={filteredFriends}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
            />

          </View>
    </SafeAreaView>
  )
}

export default ResultFindFriendsScreen

const styles = StyleSheet.create({})