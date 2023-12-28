import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { friends } from "../constants/data";
import { HeaderFeed } from "../components/HeaderFeed";
import { useNavigation } from "@react-navigation/native";
import user1 from '../assets/images/user1.jpg'
import FeedPost from '../components/FeedPost'
import {users} from '../constants/data'
const FeedScreen = () => {
  const renderItemFeed = ({ item, index }) => (
     <View style={{position:'relative'}}>
      <View style={{width:130,height:165,borderColor:COLORS.primary,borderWidth:2,marginHorizontal:2,borderRadius:5}} >
      <Image source={item.avatar} style={{width:'100%',height:'100%'}} resizeMode='cover'/>
      </View>
      <View style={{width:40,height:40,position:'absolute',margin:5,borderColor:COLORS.primary,borderWidth:2,borderRadius:100}}>
        <Image source={item.avatar} style={{width:'100%',height:'100%',borderRadius:100}} resizeMode='cover'/>
      </View>
     </View>
  )
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DCDCDC" ,paddingHorizontal:5,marginBottom:70}}>
       <ScrollView style={{flexDirection:'column'}}>
        <HeaderFeed />   
        <View style={{padding:7.5,backgroundColor:'white',borderRadius:5}} >
        <FlatList       
          horizontal={true}
          data={friends}
          keyExtractor={(item) => item.id}
          renderItem={renderItemFeed}
        />

      </View>
      {/**\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
       * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ CREATE POST\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
       * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
       */}
      
       {/**\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
       * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ CREATE POST\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
       * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
       */}
           <FeedPost/>
           </ScrollView>
    </SafeAreaView>
  );
};

export default FeedScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
