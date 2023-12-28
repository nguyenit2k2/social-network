import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, FlatList, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS } from '../constants/theme'
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import { idUser } from '../constants/data'
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProfileScreen = ({ anotherUserProfile }) => {
  let Profile = {};
  const [user, setUser] = useState('') 
  useEffect(() => {
    const getUserFromAsyncStorage = async () => {
      try {
        const storedUser = JSON.parse(await AsyncStorage.getItem('user'));
        setUser(storedUser);
      } catch (error) {
        console.log(error);
      }
    };
    getUserFromAsyncStorage();
  }, [])
  if (anotherUserProfile === undefined || anotherUserProfile === null) {
    Profile = user
    console.log(Profile)
  } else {
    Profile = anotherUserProfile;
  }


  const navigation = useNavigation();
  const [sendAddFriends, setSendAddFriends] = useState(false);
  const [follow, setFollow] = useState(false);
  const [isMoreFriends, setIsMoreFriends] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState({
    detail: true,
    friend: false,
    post: false
  });
  const handlePressCategory = (buttonName) => {
    setCategoryInfo((prevCategoryInfo) => {
      const restCategoryInfo = Object.keys(prevCategoryInfo).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {});
      restCategoryInfo[buttonName] = true;
      return restCategoryInfo;
    })
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ margin: 3, padding: 5, backgroundColor: 'white', alignItems: 'center', height: 200, borderRadius: 5 }}>
      <View>
        <Image source={item.image} style={{ width: 120, height: 160 }} resizeMode='cover' />
      </View>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
  return (

    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
        <ImageBackground source={Profile.backgroundImage} resizeMode="cover" style={[styles.image, { position: 'relative', zIndex: 5 }]}>
          {user.id != Profile.id &&
            <Pressable onPress={() => navigation.goBack()}
              style={{ position: 'absolute', zIndex: 10, left: 0, top: 0 }}>
              <Feather name="arrow-left" size={28} color={COLORS.primary} style={{ fontWeight: 'bold' }} />
            </Pressable>}
          <View style={{ flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center' }} >
            <View style={styles.avatarImage} >
              <Image source={{uri: `https://14bf-42-115-93-69.ngrok-free.app/storage/`+user.avatar}} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
            </View>
            {/**\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\NAME\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{ flexDirection: 'row', gap: 10 }} >
                <Text style={{ margin: 3, padding: 2,  borderRadius: 5, fontWeight: '600', fontSize: 16 }}>{user.name}</Text>

              </View>
              <View>
                <Text style={{ color: 'gray', fontSize: 14,  borderRadius: 5 }} >
                  {user.education}
                </Text>
              </View>
            </View>
            {/**\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\BUTTON\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            <View style={{ flexDirection: "row", marginHorizontal: 30, gap: 10, marginVertical: 10 }} >
              {Profile.id != user.id &&
                <>
                  <Pressable onPress={() => setFollow(!follow)}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12,
                      borderRadius: 5,
                      backgroundColor: follow ? COLORS.primary : 'gray'
                    }
                    } >
                    <Text style={{ color: 'white', fontWeight: 'bold' }} >
                      {follow ? "Follow" : "UnFollow"}
                    </Text>
                  </Pressable>
                  <Pressable onPress={() => setSendAddFriends(!sendAddFriends)}
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: 12, borderRadius: 5 }}>
                    <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
                      {sendAddFriends ? "Add Friends " : " Requested"}
                    </Text>
                  </Pressable>
                </>
              }
              {Profile.id == user.id &&
                <>
                  <Pressable onPress={() => navigation.navigate('EditProfileScreen', user)}
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      gap: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 12,
                      borderRadius: 5,
                      backgroundColor: COLORS.primary
                    }
                    } >
                    <FontAwesome5 name="edit" size={24} color="#fff" />
                    <Text style={{ color: 'white', fontWeight: 'bold' }} >
                      Edit My Profile
                    </Text>
                  </Pressable>
                </>
              }
            </View>
            {/**\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\FOLLOWINGS,POST\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            <View style={{ flexDirection: 'row' }} >
              <View style={styles.itemFollow} >
                <Text style={styles.itemFollowNumber} >{Profile.numberFriends}</Text>
                <Text style={styles.itemFollowType} >Friends</Text>
              </View>
              <View style={styles.itemFollow} >
                <Text style={styles.itemFollowNumber} >{Profile.numberFollows}</Text>
                <Text style={styles.itemFollowType} >Follow</Text>
              </View>
              <View style={styles.itemFollow} >
                <Text style={styles.itemFollowNumber} >{Profile.numberFollowings}</Text>
                <Text style={styles.itemFollowType} >Following</Text>
              </View>
            </View>
            {/**\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\SELECT DETAIL\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            <View style={styles.selectDetailContainer} >
              <Pressable onPress={() => handlePressCategory('detail')}
                style={[styles.infoButton, { backgroundColor: categoryInfo.detail ? COLORS.primary : 'gray' }]} >
                <MaterialCommunityIcons name="post" size={20} color='white' />
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Details</Text>
              </Pressable>
              <Pressable onPress={() => handlePressCategory('friend')}
                style={[styles.infoButton, { backgroundColor: categoryInfo.friend ? COLORS.primary : 'gray' }]}>
                <FontAwesome5 name="user-friends" size={20} color='white' />
                <Text style={{ color: 'white', fontWeight: 'bold' }}  >Friends</Text>
              </Pressable>
              <Pressable onPress={() => handlePressCategory('post')}
                style={[styles.infoButton, { backgroundColor: categoryInfo.post ? COLORS.primary : 'gray' }]}>
                <MaterialCommunityIcons name="account-details" size={20} color='white' />
                <Text style={{ color: 'white', fontWeight: 'bold' }}  >Posts</Text>
              </Pressable>
            </View>
            {/**\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\DETAIL\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
            <View style={styles.detailContainer} >
              {categoryInfo.detail &&
                <View style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white', width: 325, margin: 10 }}>
                  <View style={{ flexDirection: 'row', gap: 10, borderColor: COLORS.primary, borderWidth: 2, margin: 5, padding: 10, borderRadius: 5 }}>
                    <MaterialIcons name="work" size={24} color={COLORS.primary} />
                    <View style={{ borderBottomColor: COLORS.primary, borderBottomWidth: 1, width: 260 }} >
                      <Text>{user.education}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 10, borderColor: COLORS.primary, borderWidth: 2, margin: 5, padding: 10, borderRadius: 5 }}>
                    <Ionicons name="location" size={24} color={COLORS.primary} />
                    <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, width: 260 }} >
                      <Text>{user.address}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 10, borderColor: COLORS.primary, borderWidth: 2, margin: 5, padding: 10, borderRadius: 5 }}>
                    <AntDesign name="home" size={24} color={COLORS.primary} />
                    <View style={{ borderBottomColor: COLORS.primary, borderBottomWidth: 1, width: 260 }} >
                      <Text>{user.name}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 10, borderColor: COLORS.primary, borderWidth: 2, margin: 5, padding: 10, borderRadius: 5 }}>
                    <MaterialCommunityIcons name="robot-love" size={24} color={COLORS.primary} />
                    <View style={{ borderBottomColor: COLORS.primary, borderBottomWidth: 1, width: 260 }} >
                      <Text>{user.name}</Text>
                    </View>
                  </View>

                </View>}
              {categoryInfo.friend &&
                <>
                  <View style={{ position: 'relative' }}>
                    <FlatList
                      horizontal={true}
                      data={Profile.friends.slice(1, 6)}
                      renderItem={renderItem}
                      keyExtractor={item => item.id}
                      onEndReached={() => setIsMoreFriends(true)}
                      onEndReachedThreshold={0.2}
                    />
                    {isMoreFriends &&
                      <TouchableOpacity onPress={() => navigation.navigate('ListFriendsScreen', Profile.friends)}
                        style={{ position: 'absolute', right: 0, margin: 10, backgroundColor: 'white', padding: 12, borderRadius: 10 }}>
                        <FontAwesome5 name="plus" size={16} color="black" />
                      </TouchableOpacity>}
                  </View>
                </>
              }

            </View>

          </View>
        </ImageBackground>
      </View>

    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemFollowType: {
    fontSize: 14,
    color: '#808080',
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 5
  },
  itemFollowNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 5
  },
  detailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: '100%'
  },
  selectDetailContainer: {
    flexDirection: 'row',
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  itemFollow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 5
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  infoButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    width: '100%',
    gap: 5,
    backgroundColor: COLORS.primary,
    padding: 5,
    borderRadius: 5,
  },
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailRow: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,

  },
  detailIcon: {
    color: COLORS.secondary,
  },
  detailText: {
    width: '90%',
    marginHorizontal: 10,
    borderBottomColor: COLORS.secondary,
    borderBottomWidth: 0.5
  },
  editProfileButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.primary,
    padding: 7.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderColor: '#fff',
    borderWidth: 3
  },
  avatarImage: {
    width: 150,
    height: 150,
    marginTop: 10,
    borderRadius: 1000,
    padding: 5,
    backgroundColor: '#fff',
    borderColor: COLORS.primary,
    borderWidth: 3,
    position: 'relative'
  },





})