import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, ViewComponent } from 'react-native'
import React,{ useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons, AntDesign, Feather , MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { friends } from '../constants/data';
const FindScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [listFriends,setListFriends]  = useState(friends);
    const renderItem = ({item})=>{
           return(
            <View key={item.id}
            style={{
                          backgroundColor:'#fff',
                          padding:5,
                          borderBottomColor:'gray',
                          borderBottomWidth:0.5,

                          }}>
              
               <View style={{flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-between'}}>
                  <View style={{}}>
                    <Image 
                    style={{
                        borderRadius:40,
                        width:55,height:55
                    }}
                    resizeMode='cover' source={item.avatar}/>
                  </View>
                  <View style={{}}>
                    <Text style={{}}>{item.name}</Text>
                  </View>
                  <TouchableOpacity>
                  <View>
                  <Feather name="delete" size={24} color="black" />
                  </View>
                  </TouchableOpacity>
               </View>
              
            </View>
           )
    }
    const handleSearch = (text) => {
        setSearchText(text);
        // Thực hiện logic lọc dữ liệu ở đây, dựa vào giá trị của 'text'
        const filteredData = friends.filter((friend) =>
          friend.name.toLowerCase().includes(text.toLowerCase())
        );
        setListFriends(filteredData);
      };
    return (
        <SafeAreaView>
           <View style={{flexDirection:'column'}}>
           <View style={{ flexDirection: 'row',
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          marginHorizontal:5, 
                          padding: 10, 
                          backgroundColor: '#fff',
                          height:50,
                          borderBottomColor:'gray', 
                          borderBottomWidth:0.5}}>
                <Pressable style={{flex:1,flexDirection:'row'}}
                           onPress={()=>navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={24} color="black"  />
                </Pressable>
                <View style={{flex:8,flexDirection:'row'}}
                >
                    <View  >
                        <Pressable 
                            style={{ flexDirection: 'row', position: 'relative' }}>
                            <TextInput 
                                style={{ width: '100%', borderColor: 'gray', borderWidth: 0.5, padding: 7.5, borderRadius: 20, backgroundColor: 'white',height:40 }}
                                placeholder='Search ...' 
                                value={searchText}
                                onChangeText={handleSearch}/>

                            <Pressable onPress={()=>{
                                if(searchText!=''){
                                    navigation.navigate('ResultFindFriendsScreen',searchText);
                                }
                            }}
                              style={{ position: 'absolute', right: 0, top: '50%', padding: 5, alignItems: 'center', borderRadius: 25 }}>
                                <Ionicons name="md-search-sharp" size={24} color="black" style={{ position: 'relative', top: '-65%', backgroundColor: '#DCDCDC', padding: 5, borderRadius: 25 }} />
                            </Pressable>

                        </Pressable>
                    </View>
                </View>
            </View>
           <View>
            <FlatList 
            style ={{marginHorizontal:5}}
              data={listFriends}
              renderItem={renderItem}
              keyExtractor={(item)=>item.id}
            />
           </View>
           </View>

        </SafeAreaView>
    )
}

export default FindScreen

const styles = StyleSheet.create({})