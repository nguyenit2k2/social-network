import { Image, Pressable, SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { myProfile } from '../constants/data'
import { FontAwesome5, Entypo, AntDesign ,Feather } from '@expo/vector-icons';
import { COLORS } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const CreateScreen = () => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [content,setContent] = useState('');
  const [imageLink,setImageLink] = useState(''); 
  const [value,setValue] = useState(null);
  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaType: 'photo',
      allowsEditing: true,
      includeBase64: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result && result.assets && result.assets.length > 0 && !result.cancelled) {
      
      setImage(result.assets[0].uri);
    }
  };

  const saveImageToFolder = async () => {
    if (!image) {
      console.warn('No image to save');
      return;
    }
    const min = 1;
    const max = 9999;
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

    // Chuyển đổi số nguyên thành chuỗi
    const randomString = randomInteger.toString();
    const folderName = 'uploadImages';
    const fileName = 'image' +randomString;

    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const base64Data = await convertBlobToBase64(blob);

      // Tạo thư mục nếu nó chưa tồn tại
      const folderInfo = await FileSystem.getInfoAsync(`${FileSystem.documentDirectory}${folderName}`);
      if (!folderInfo.exists) {
        await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}${folderName}`, { intermediates: true });
      }

      // Tạo đường dẫn đầy đủ đến thư mục và file
      const path = `${FileSystem.documentDirectory}${folderName}/${fileName}.jpg`;

      // Lưu file vào thư mục
      await FileSystem.writeAsStringAsync(path, base64Data, { encoding: FileSystem.EncodingType.Base64 });
      setImageLink(path);
      console.log('File saved successfully at:', path);
    } catch (error) {
      console.error('Error saving file:', error);
    }
  };

  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result.split(',')[1]);
      };
      reader.readAsDataURL(blob);
    });
  };

  if (hasGalleryPermission === false) {
    return <Text>No access</Text>;
  }
  const handlerPost =()=>{
    saveImageToFolder();
    console.log(content);
    console.log(imageLink);

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.headerPost}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }} >NEW POST</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, borderBottomWidth: 0.5, borderBottomColor: 'gray' }}>
          <View style={styles.avatar}>
            <Image source={myProfile.avatar} style={styles.image} resizeMode='cover' />
          </View>
          <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
            <View style={styles.name}>
              <Text>
                {myProfile.name}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }} >
              <View style={styles.selectCategoryPosts}>
                <FontAwesome5 name="user-friends" size={22} color="black" />
                <Text >Friends</Text>
              </View>
              <View style={styles.selectCategoryPosts}>
                <Entypo name="network" size={22} color="black" />
                <Text>Public</Text>
              </View>
            </View>
          </View>
        </View>
        {/**\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\CONTENT\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
         */}
        <View style={styles.contentContainer} >
          <View style={styles.textContent}>
            <Text>Content:</Text>
            <TextInput
              style={styles.textInput}
              multiline
              numberOfLines={10}
              textAlignVertical="top"
               onChangeText={(text)=>setContent(text)}
            />
          </View>
          <View style={styles.textContent}>
            <Text>Upload File :</Text>
            <View style={styles.file}>
             {!image &&  <TouchableOpacity onPress={() => pickImage()}
                style={styles.btnFile}>
                <View>
                  <Text>Select File</Text>
                </View>
              </TouchableOpacity>}
              {image && (    
                   <View style={{width:'100%',height:'100%',position:'relative'}}>
                     <Image
                    source={{ uri: image }}
                    style={{ width: '100%', height: '100%'}}
                  />
                  <Pressable onPress={()=>setImage(null)}
                  style={{position:'absolute' ,right:0}}>
                  <Feather name="x" size={28} color="white" style={{fontWeight:'bold'}} />
                  </Pressable>
                   </View>              
              )}
            </View>
          </View>
        </View>
        <Pressable onPress={()=>handlerPost()}
         style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 30 }}>
          <Text style={{ backgroundColor: COLORS.primary, padding: 10, color: 'white', fontWeight: 'bold' }} >POST</Text>
        </Pressable>

      </View>
    </SafeAreaView>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  headerPost: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 50,
    height: 50
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  selectCategoryPosts: {
    flexDirection: 'row',
    gap: 5,
    marginHorizontal: 10,
    padding: 5

  },
  name: {
    marginHorizontal: 5
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 0.5,

  },
  textContent: {
    marginHorizontal: 5
  },
  file: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFile: {
    borderColor: 'gray',
    borderWidth: 2,
    padding: 5,
    borderRadius: 5
  }
})