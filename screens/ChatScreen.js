import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as FileSystem from 'expo-file-system';

const ChatScreen = () => {
  useEffect(() => {
    predictString('This is a bad comment');
  }, []);

  const modelFilePath = './assets/new.model';

  const predictString = async (inputString) => {
    try {
      const modelContent = await FileSystem.readAsStringAsync(modelFilePath);
      const result = yourPredictionMethod(modelContent, inputString);

      if (result === 'not filter this') {
        console.log('Không lọc chuỗi này');
      } else {
        console.log('Lọc chuỗi này');
      }
    } catch (error) {
      console.log('Đã xảy ra lỗi khi đọc file model:', error);
    }
  };

  const yourPredictionMethod = (modelContent, inputString) => {
    if (inputString.includes('bad')) {
      return 'filter this';
    } else {
      return 'not filter this';
    }
  };

  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatScreen;