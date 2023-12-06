import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import {Feather,Iconicons,FontAwesome,FontAwesome5,LinearGradient, Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen'
import ProfileScreen from '../screens/ProfileScreen';
import CreateScreen from '../screens/CreateScreen';
import ChatScreen from '../screens/ChatScreen';
import NotificaitonScreen from '../screens/NotificaitonScreen';

const Tab  = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle:{
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor:'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    }}
const ButtomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
     
      <Tab.Screen
      name = 'ProfileScreen'
      component= {ProfileScreen}
      options = {{
        tabBarIcon: ({focused})=>{
            return (
              <View style={focused ? styles.iconStyle:''}>
            <FontAwesome name='user-circle' size={24} color={focused ? 'white' : 'gray'}/>
         </View>         
                
            )
        }
      }}
      />
     
      <Tab.Screen
      name = 'CreateScreen'
      component={CreateScreen}
      options={{
        tabBarIcon : ({focused})=>{
          return ( <View style={focused ? styles.iconStyle:''}>
          <Feather name = "plus-circle" size={24} color={focused ? 'white' : 'gray'}/>
     </View>         
     
          )
        }
      }}
      />
        <Tab.Screen
      name = 'FeedScreen'
      component= {FeedScreen}
      options = {{
        tabBarIcon: ({focused})=>{
            return (   
              <View style={focused ? styles.iconStyle:''}>
                 <Feather name='home' size={24} color={focused ? 'white' : 'gray'}/>
            </View>
            
                     
            )
        }
      }}
      />
      <Tab.Screen
      name = 'ChatScreen'
      component={ChatScreen}
      options={{
        tabBarIcon : ({focused})=>{
          return ( 
            <View style={focused ? styles.iconStyle:''}>
            <Ionicons name = "chatbox-outline" size={24} color={focused ? 'white' : 'gray'}/>
          </View>         
    
          )
        }
      }}
      />
      <Tab.Screen
      name = 'NotificaitonScreen'
      component={NotificaitonScreen}
      options={{
        tabBarIcon : ({focused})=>{
          return (          
      <View style={focused ? styles.iconStyle:''}>
        <FontAwesome5 name = "heart"  size={24} color={focused ? 'white' : 'gray'}/>
      </View>
          )
        }
      }}
      />
      
    </Tab.Navigator>
  )
}

export default ButtomTabNavigation
const styles = StyleSheet.create({
 iconStyle:{
  backgroundColor:'#4A8DB7',
  padding:10,
  borderRadius:25,
 }
});