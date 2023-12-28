import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES, images } from '../constants'
import { anotherUserProfile } from '../constants/data'
import AsyncStorage from "@react-native-async-storage/async-storage";

const FeedPost = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [dataPost, setDataPost] = useState();
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const getUser = async() => {
    setUser(await AsyncStorage.getItem('user'))
    setToken(await AsyncStorage.getItem('token'))
  }
  const getDataPost = async () => {
    try {
      let api = route.params ? `/post/${route.params}`: '/post' 
      const response = await axios.get(api);
      setDataPost(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  })
  useEffect(() => {
    getDataPost();
  }, []);
  const likePost = async (id) => {
    try {
      await axios.get(`/likes/${id}`,{
        headers : {Authorization: `Bearer ${token}`}
      }).then(function(response){
          console.log(response.data.message)
          getDataPost();
      })
    } catch (e) {
      console.log(e.response.data.message)
    }
  }
  return (
    <View>
      {dataPost && dataPost.map(item => (
        <View key={item.id}>
          <View
            style={styles.itemContainer}
          >
            {/**Post header */}
            <View
              style={styles.postHeader}
            >
              <Pressable
                onPress={() => navigation.navigate('SeeProfileScreen', { data: item.user.id })}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginHorizontal: 2,
                }}
              >
                <Image
                  source={{uri:item.user.avatar}}
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 25,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                  }}
                />
                <View style={{ marginLeft: 12 }}>
                  <Text style={{ ...FONTS.body4, fontWeight: "bold" }}>
                    {item.user.name}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body4,
                      fontWeight: "bold",
                      color: 'gray',
                    }}
                  >
                    {item.timePost}
                  </Text>
                </View>
              </Pressable>
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color={COLORS.black}
              />
            </View>
            {/**Post content */}
            <View style={{
              marginHorizontal: 8,
              marginVertical: 8,
              flexDirection: 'column'

            }}>

              <View>
                <Text style={{ ...FONTS.body4 }}>{item.content} </Text>
              </View>

              <View >
                <Image
                  source={{uri: item.image}}
                  resizeMode="contain"
                  style={{
                    borderRadius: 2,
                    width: '100%',
                    height: 305
                  }} />
              </View>
            </View>

            {/*Posts likes and comments */}
            <View style={styles.postComment}>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 30
              }} >
                <TouchableOpacity onPress={() => likePost(item.id)}>
                  <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }} >
                    <Ionicons name="heart-circle" size={24} color={COLORS.black}/>
                    <Text style={{ fontSize: 10, marginLeft: 2 }} >{item.like}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('CommentScreen',  (item.id))} >
                  <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Ionicons name="chatbubble" size={24} color={COLORS.black} />
                    <Text style={{ fontSize: 10, marginLeft: 2 }} >{item.comment}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'

                  }} >
                    <FontAwesome5 name="share" size={24} color="black" />
                    <Text style={{ fontSize: 10, marginLeft: 2 }} >22</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'

                  }} >
                    <FontAwesome name="bookmark" size={24} color="black" />
                    <Text style={{ fontSize: 10, marginLeft: 2 }} >22</Text>
                  </View>
                </TouchableOpacity>

              </View>
            </View>

          </View>
        </View>
      ))}
    </View>

  )
}

export default FeedPost;

const styles = StyleSheet.create({

  itemContainer: {
    backgroundColor: "#fff",
    flexDirection: "column",
    width: "100%",
    borderRadius: 10,
    marginVertical: 5,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 8,
    padding: 5,
  },
  postComment: {
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderTopColor: 'gray',
    borderTopWidth: 1
  },

})