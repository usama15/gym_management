import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import AppBar from './Appbar';

const ClientList = () => {
  return (
    <SafeAreaView>
      <AppBar />
      <ScrollView>
        <View>
          <Text>client list</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClientList;
