import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather, Entypo,MaterialCommunityIcons  } from '@expo/vector-icons';
import { COLORS } from '../constants/theme';
const EditProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [user, setUser] = useState('') 
  const [token, setToken] = useState('') 
  useEffect(() => {
    const getUserFromAsyncStorage = async () => {
      try {
        const storedUser = JSON.parse(await AsyncStorage.getItem('user'));
        const token = await AsyncStorage.getItem('token');
        setUser(storedUser);
        setToken(token)
      } catch (error) {
        console.log(error);
      }
    };
    getUserFromAsyncStorage();
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 10, position: 'relative' }}>
        <Pressable style={{ position: 'absolute', padding: 10 }}
          onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Edit Profile</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'column', padding: 10 ,gap:15}}>
        {/**\\\\\\\\\\\\\\\\\\\\\\\Background\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <View style={{ flexDirection: 'row' ,padding:5}}>
          <View  style={{alignItems:'center',justifyContent:'center' ,flexDirection:'row',gap:10}}>
            <Entypo name="image" size={30} color={COLORS.primary} />
            <Text>backgroundImage :</Text>
          </View>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Pressable style={{padding:2,borderColor:'gray',borderWidth:2,borderRadius:5}}>
              <Text>Select Image</Text>
            </Pressable>
          </View>
        </View>
             {/**\\\\\\\\\\\\\\\\\\\\\\\Image\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <View style={{ flexDirection: 'row' ,padding:5}}>
          <View  style={{alignItems:'center',justifyContent:'center' ,flexDirection:'row',gap:10}}>
            <Entypo name="image" size={30} color={COLORS.primary} />
            <Text>Image                        :</Text>
          </View>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Pressable style={{padding:2,borderColor:'gray',borderWidth:2,borderRadius:5}}>
              <Text>Select Image</Text>
            </Pressable>
          </View>
        </View>
             {/**\\\\\\\\\\\\\\\\\\\\\\\name\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <View style={{ flexDirection: 'row' ,padding:5}}>
          <View  style={{alignItems:'center',justifyContent:'center',flexDirection:'row',gap:5}}>
          <MaterialCommunityIcons name="rename-box" size={30} color={COLORS.primary} />
          <Text>Name :</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TextInput
            placeholder={userProfile.name}
            onChangeText={(text)=>{
              text == "" ? setNewProfile({...newProfile,name:userProfile.name}) :setNewProfile({...newProfile,name:text})
            }}
            />
          </View>
        </View>
          {/**\\\\\\\\\\\\\\\\\\\\\\\description\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <View style={{ flexDirection: 'row' ,padding:5}}>
          <View  style={{alignItems:'center',justifyContent:'center',flexDirection:'row',gap:5}}>
          <MaterialCommunityIcons name="rename-box" size={30} color={COLORS.primary} />
          <Text>Description :</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TextInput
            placeholder={userProfile.description}
            onChangeText={(text)=>{
              text == "" ? setNewProfile({...newProfile,description:userProfile.description}) :setNewProfile({...newProfile,description:text})
            }}
            />
          </View>
        </View>
          {/**\\\\\\\\\\\\\\\\\\\\\\\address\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
          <View style={{ flexDirection: 'row' ,padding:5}}>
          <View  style={{alignItems:'center',justifyContent:'center',flexDirection:'row',gap:5}}>
          <MaterialCommunityIcons name="rename-box" size={30} color={COLORS.primary} />
          <Text>Address :</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TextInput
            placeholder={userProfile.detailUser.address}
            onChangeText={(text)=>{
              text == "" ? setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,address:userProfile.detailUser.address}}) :setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,address:text}})
            }}
            />
          </View>
        </View>
         {/**\\\\\\\\\\\\\\\\\\\\\\\DateOfbirth\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
         <View style={{ flexDirection: 'row' ,padding:5}}>
          <View  style={{alignItems:'center',justifyContent:'center',flexDirection:'row',gap:5}}>
          <MaterialCommunityIcons name="rename-box" size={30} color={COLORS.primary} />
          <Text>DateOfBirth :</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TextInput
            placeholder={userProfile.detailUser.dataOfBirth}
            onChangeText={(text)=>{
              text == "" ? setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,dataOfBirth:userProfile.detailUser.address}}) :setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,dataOfBirth:text}})
            }}
            />
          </View>
        </View>
        {/**\\\\\\\\\\\\\\\\\\\\\\\address\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <View style={{ flexDirection: 'row' ,padding:5}}>
          <View  style={{alignItems:'center',justifyContent:'center',flexDirection:'row',gap:5}}>
          <MaterialCommunityIcons name="rename-box" size={30} color={COLORS.primary} />
          <Text> Interest:</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TextInput
            placeholder={userProfile.detailUser.interest}
            onChangeText={(text)=>{
              text == "" ? setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,interest:userProfile.detailUser.interest}}) :setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,interest:text}})
            }}
            />
          </View>
        </View>
        {/**\\\\\\\\\\\\\\\\\\\\\\\Interest\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <View style={{ flexDirection: 'row' ,padding:5}}>
          <View  style={{alignItems:'center',justifyContent:'center',flexDirection:'row',gap:5}}>
          <MaterialCommunityIcons name="rename-box" size={30} color={COLORS.primary} />
          <Text> Job:</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TextInput
            placeholder={userProfile.detailUser.job}
            onChangeText={(text)=>{
              text == "" ? setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,job:userProfile.detailUser.job}}) :setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,job:text}})
            }}
            />
          </View>
        </View>
        {/**\\\\\\\\\\\\\\\\\\\\\\\Job\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <View style={{ flexDirection: 'row' ,padding:5}}>
          <View  style={{alignItems:'center',justifyContent:'center',flexDirection:'row',gap:5}}>
          <MaterialCommunityIcons name="rename-box" size={30} color={COLORS.primary} />
          <Text> Marriage:</Text>
          </View>
          <View style={{alignItems:'center'}}>
            <TextInput
            placeholder={userProfile.detailUser.marriage}
            onChangeText={(text)=>{
              text == "" ? setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,marriage:userProfile.detailUser.marriage}}) :setNewProfile({...newProfile,detailUser:{...newProfile.detailUser,marriage:text}})
            }}
            />
          </View>
        </View>
        <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
          <Pressable style={{padding:10,backgroundColor:COLORS.primary,borderRadius:5}}>
            <Text style={{fontWeight:'bold',color:'white'}}>UPDATE PROFILE</Text>
          </Pressable>
        </View>
      </View>

    </SafeAreaView>
  )
}

export default EditProfileScreen

const styles = StyleSheet.create({})