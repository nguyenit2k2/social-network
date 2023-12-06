import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import Onboarding from './screens/Onboarding';
import LoginScreen from './screens/loginScreen';
import SigupScreen from './screens/SigupScreen'
import BottomTabNavigation from './navigation/ButtomTabNavigation';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FindScreen  from './screens/FindScreen';
const AppStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    black: require('./assets/fonts/Poppins-Black.ttf'),
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    mediumItalic: require('./assets/fonts/Poppins-MediumItalic.ttf'),
    semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    semiBoldItalic: require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName='Onboarding'>
        <AppStack.Screen name="Onboarding" component={Onboarding} />
        <AppStack.Screen name="LoginScreen" component={LoginScreen} />
        <AppStack.Screen name="SigupScreen" component={SigupScreen} />
        <AppStack.Screen name='FindScreen' component={FindScreen}/>
        <AppStack.Screen name="BottomNaviagtion" component={BottomTabNavigation} options={{ headerShown: false }} />
      </AppStack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
   
  )
}
