import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Image, Linking, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const AppBar = () => {
  const navigation = useNavigation();

  return (
    <Appbar.Header theme={{colors: {primary: 'white'}}}>
      <Appbar.Action icon="menu" />
      <Image style={styles.logo} source={require('../asset/lastlast.png')} />
      <Appbar.Action
        icon="logout"
        onPress={async () => {
          await auth().signOut();
          await AsyncStorage.setItem('@login', 'false').then(() =>
            navigation.navigate('Home'),
          );
        }}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '50%',
    height: '100%',
    marginLeft: '10%',
    marginRight: '14%',
  },
});

export default AppBar;
