import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView ,Platform
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

const LoginScreen = () => {
  const [email, setEmail] = useState('kiaisoft.nguyen.vo@gmail.com');
  const [password, setPassword] = useState('hoangnguyen123');
  const navigation = useNavigation();
  const handleLogin = async() => {
    try {
      await axios.post('/login', {
        email: email,
        password: password
      }).then(async function(response){
        await AsyncStorage.setItem('user', JSON.stringify(response.data.user))
        await AsyncStorage.setItem('token', response.data.access_token)
      })
      navigation.navigate('BottomNaviagtion' ,{name :"Feed"})
    } catch(e) {
      console.log(e)
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/images/logo.jpg')} style={styles.logo} />
      <Text style={styles.text}>4TL Social App </Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton buttonTitle="Sign In" onPress={handleLogin} />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => console.log("Facebook Login ")}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => console.log("Google Login ")}
          />
        </View>
      ) : null}
      <TouchableOpacity style={styles.forgotButton} onPress={() => {navigation.navigate('SigupScreen')}}>
        <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    
  },
});

export default LoginScreen;
