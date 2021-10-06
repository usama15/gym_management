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
            source={require('../asset/lastlast.png')}
          />
          <View style={styles.secondText}>
            <ActivityIndicator size="large" color="#0db6c2" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    height: 750,
    justifyContent: 'center',
  },
  sectionContainer: {
    width: '80%',
    height: 93,
    alignSelf: 'center',
  },
  secondText: {
    marginTop: '10%',
  },
});

export default Main_screen;
