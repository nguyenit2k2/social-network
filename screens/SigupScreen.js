import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView ,Platform, SafeAreaView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
const LoginScreen = () => {
  const [name, setName] = useState('Nguyen');
  const [email, setEmail] = useState('jwtnshi@gmail.com');
  const [password, setPassword] = useState('hoangnguyen123');
  const navigation = useNavigation();
  const handleSignup = async() => {
    try {
      await axios.post('/register', {
        name: name,
        email: email,
        password: password
      })
      navigation.navigate(LoginScreen);
    } catch(e) {
      console.log(e)
    }
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#fff'}}>
      <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.text}>CREATE NEW ACCOUNT </Text>
      <View>
      <FormInput
        labelValue={name}
        onChangeText={(userName) => setName(userName)}
        placeholderText="Name"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="mail"
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
    <View>
      <FormButton buttonTitle="Sign In" onPress={handleSignup} />
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>
      </View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: 'white',
  },
 
  text: {
    
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    
  },
});

export default LoginScreen;
