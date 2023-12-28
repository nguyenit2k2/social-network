import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, FormInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import FeedPost from '../components/FeedPost'
import seo1 from '../assets/images/seo1.jpg';
import seo2 from '../assets/images/seo2.jpg';
import seo3 from '../assets/images/seo3.jpg';
import seo4 from '../assets/images/seo4.jpg';
import seo5 from '../assets/images/seo5.jpg';
import { Ionicons, Feather } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CommentScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const id = route.params;
    const [user, setUser] = useState();
    const [token, setToken] = useState();
    const [comment, setComment] = useState('');
    const [listComments, setListComments] = useState()
    const getListComment = async () => {
        await axios.get(`/post/${id}/comment`).then(function (response) {
            setListComments(response.data.data)
        })
    }
    const getUser = async () => {
        setUser(JSON.parse(await AsyncStorage.getItem('user')))
        setToken(await AsyncStorage.getItem('token'))
    }
    const sendComment = async() => {
        try {
            await axios.post(`/posts/${id}/comments`,{
                content : comment
            }, {
                headers: {Authorization: `Bearer ${token}`}
            }).then(async function(response) {
                if(response.status == 200){
                    await getUser();
                    await getListComment();
                    setComment('')
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            await getUser();
            await getListComment();
        };

        fetchData();
    }, [comment])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', position: 'relative', padding: 10 }} >
                    <Pressable onPress={() => navigation.goBack()}
                        style={{ position: 'absolute', padding: 10 }}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </Pressable>
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        <Text style={{ fontWeight: 'bold' }} >Post</Text>
                    </View>
                </View>
                <FeedPost post={id} />
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.comment}>
                        <View style={{ flexDirection: 'row', backgroundColor: '#fff', padding: 5, borderRadius: 5, gap: 10 }}>
                            <Image source={{ uri: `https://14bf-42-115-93-69.ngrok-free.app/storage/${user?.avatar}` }} style={{ width: 40, height: 40, borderRadius: 50 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput style={{ borderBottomColor: 'gray', borderBottomWidth: 0.5, width: 250 }}
                                    placeholder='Comment .....' 
                                    value={comment}
                                    onChangeText={(comment) => setComment(comment)}/>
                                <Pressable style={{ alignItems: 'center', justifyContent: 'center', margin: 10 }} onPress={() => sendComment()}>
                                    <Ionicons name="send" size={24} color="black" />
                                </Pressable>
                            </View>
                        </View>
                        <ScrollView>
                            {listComments && listComments.map(item => (
                                <View style={styles.commentContainer} key={item.id}>
                                    <View style={{ width: 40, height: 40 }}>
                                        <Image source={{ uri: item.user.avatar }} style={{ width: '100%', height: '100%', borderRadius: 100 }} />
                                    </View>
                                    <View style={{ borderColor: 'gray', borderWidth: 0.5, padding: 1, borderRadius: 5 }}>
                                        <Text>{item.content}</Text>
                                    </View>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CommentScreen

const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        margin: 2,
        backgroundColor: '#fff',
        padding: 5


    },
    comment: {


    }
})