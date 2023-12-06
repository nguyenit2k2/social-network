import { View, Text,Image ,Dimensions } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
const OnboardingScreen = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  const renderImage = (imageSource) => (
    <View style={{ width, height }}>
      <Image
        source={imageSource}
        style={{flex:1, width: null, height: 500, resizeMode: 'cover' }}
      />
    </View>
  );

  return (
    <Onboarding
    onSkip={() => navigation.navigate('LoginScreen')}
    onDone={()=>navigation.navigate('LoginScreen')}
      pages={[
        {
          backgroundColor: '#fff', // Màu nền khác để văn bản trắng có thể nhìn thấy
          image: renderImage(require('../assets/images/img_1.jpg')),
          title: 'Onboarding 1',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: renderImage(require('../assets/images/img_2.jpg')),
          title: 'Onboarding 2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: renderImage(require('../assets/images/img_3.jpg')),
          title: 'Onboarding 3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: renderImage(require('../assets/images/img_4.jpg')),
          title: 'Onboarding 4',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};


export default OnboardingScreen