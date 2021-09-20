import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const Main_screen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.body}>
          <Image
            style={styles.sectionContainer}
            // source={require('../assest/Webp.net-resizeimage-removebg-preview.png')}
          />
          <View style={styles.secondText}>
            <ActivityIndicator size="large" color="black" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'black',
  },
  sectionContainer: {
    marginTop: '70%',
    width: '100%',
    height: 100,
  },
  secondText: {
    marginTop: '2%',
  },
});

export default Main_screen;
