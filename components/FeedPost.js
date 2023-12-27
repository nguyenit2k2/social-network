import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  VirtualizedList
} from "react-native";
import React  from "react";
import { useNavigation } from '@react-navigation/native';
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

const FeedPost = ({users}) => {
  const navigation = useNavigation();
  return (
    
   <View>
       {users.map(item=>(
    <View key={item.id}>
       <View
      style={styles.itemContainer}
    >
      {/**Post header */}
      <View
        style={styles.postHeader}
      >
        <Pressable
        onPress={()=>navigation.navigate('SeeProfileScreen',{data:anotherUserProfile})}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 2,
          }}
        >
          <Image
            source={item.avatar}
            style={{
              height: 45,
              width: 45,
              borderRadius: 25,
              borderColor:COLORS.primary,
              borderWidth:1,
            }}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={{ ...FONTS.body4, fontWeight: "bold" }}>
              {item.name} 
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
        flexDirection:'column'

      }}>

        <View>
        <Text style={{ ...FONTS.body4 }}>{item.contentPost.content} </Text>
        </View>

        <View >
        <Image
          source={item.contentPost.images}
          resizeMode="cover"
          style={{
            borderRadius:2,
            width: '100%',
            height: 115,
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
          <TouchableOpacity>
            <View style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }} >
              <Feather name="heart" size={24} color={COLORS.black} />
              <Text style={{ fontSize: 10, marginLeft: 2 }} >22</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('CommentScreen',{item})} >
            <View style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'

            }} >
              <Ionicons name="chatbubble" size={24} color={COLORS.black} />
              <Text style={{ fontSize: 10, marginLeft: 2 }} >22</Text>
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
  
  itemContainer:{
    backgroundColor: "#fff",
    flexDirection: "column",
    width: "100%",
    borderRadius: 10,
    marginVertical: 5,
  },
  postHeader:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 8,
    padding: 5,
  },
  postComment:{
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderTopColor: 'gray',
    borderTopWidth: 1
  },

})