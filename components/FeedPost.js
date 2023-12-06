import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES, images } from '../constants'

const FeedPost = ({users}) => {
  const renderItem = ({ item }) => (
    <View
      style={{
        backgroundColor: "#fff",
        flexDirection: "column",
        width: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#fff",
        marginVertical: 12,
      }}
    >
      {/**Post header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 8,
          padding: 5,
        }}
      >
        <View
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
        </View>
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
      <View style={{
        marginHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderTopColor: 'gray',
        borderTopWidth: 1
      }}>
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

          <TouchableOpacity>
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
  );
  return (
    
    <View style = {{marginBottom:55}}>  
      <FlatList data={users} 
      renderItem={renderItem}
      keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

export default FeedPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})