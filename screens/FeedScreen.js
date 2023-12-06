import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  MaterialIcons,
  Ionicons,
  Feather,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { friends } from "../constants/data";
import { HeaderFeed } from "../components/HeaderFeed";
import FeedPost from "../components/FeedPost";
import { useNavigation } from "@react-navigation/native";
import {users} from '../constants/data'
const FeedScreen = () => {
 
  
  function renderSuggestionsContainer() {
    return (
      <View>
        <View style={{ marginVertical: 2 }}>
         
         
        </View>
        <FlatList
        
          horizontal={true}
          data={friends}
          keyExtractor={(item) => item.id}
          style={{backgroundColor:'#fff',
                   padding:2,
                   borderRadius:5,
                  }}
          renderItem={({ item, index }) => (
            <View
              key={item.id}
              style={{
                flexDirection: "column",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderColor:'gray',
                borderWidth:0.5,
                borderRadius:5,
                marginHorizontal:2,
                
                

              }}
            >
              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={{
                  paddingVertical: 4,
                  marginRight: 10,
                }}
              >
                
                  <LinearGradient
                    colors={["#4A8DB7", "#A1E1FA"]}
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 25,
                      position: "absolute",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1,
                    }}
                  >
                    <Image
                     source={item.image}
                     resizeMode="cover"
                     style={{width:35,
                             height:35,
                             borderRadius:25,
                             }}
                    />
                  </LinearGradient>
               
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{
                    width: 96,
                    height: 120,
                    borderRadius: 10,
                    borderWidth: 4,
                    borderColor: "#fff",
                  }}
                />
              </TouchableOpacity>
              <Text style={{ ...FONTS.body3, fontWeight: "bold" }}>
                {item.name}
              </Text>
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgrounColor: "#e7e7e7" ,flexDirection:'column'}}>
      <View style= {{alignContent:'center',justifyContent:'center',flexDirection:'row'}} >
        <Text style={{fontWeight:'bold'}} >Home</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 9 }}>
        <HeaderFeed />       
          <ScrollView>
          {renderSuggestionsContainer()}
          <FeedPost users = {users}/>
          </ScrollView>      
          
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
