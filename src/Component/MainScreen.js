import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import Appbar from './Appbar';

const MainScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Appbar />
        <Text>Mainscreen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;
