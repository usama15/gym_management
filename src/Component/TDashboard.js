import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Avatar, Divider, Button} from 'react-native-paper';
import AppBar from './Appbar';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const TDashboard = () => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.trainer.initialState);
  return (
    <SafeAreaView>
      <ScrollView>
        <AppBar />
        {userData.map(userData => (
          <View>
            <View style={styles.img}>
              <Avatar.Image
                size={100}
                source={require('../asset/avatar-icon-images-4.png')}
              />
              <Text style={styles.Avttex}>{userData.name}</Text>
            </View>
            <Divider style={styles.dev} />
            <View style={styles.NameD}>
              <Text style={styles.text}>Name</Text>
              <Text style={styles.text}>{userData.name}</Text>
            </View>
            <Divider style={styles.dev} />
            <View style={styles.NameD}>
              <Text style={styles.text}>Email</Text>
              <Text style={styles.text}>{userData.email}</Text>
            </View>
            <Divider style={styles.dev} />
            <View style={styles.NameD}>
              <Text style={styles.text}>Gender</Text>
              <Text style={styles.text}>{userData.gvalue}</Text>
            </View>
            <Divider style={styles.dev} />
            <View style={styles.NameD}>
              <Text style={styles.text}>Phone No</Text>
              <Text style={styles.text}>{userData.phone}</Text>
            </View>
            <Divider style={styles.dev} />
            <View style={styles.NameD}>
              <Text style={styles.text}>Trainer Type</Text>
              <Text style={styles.text}>{userData.value}</Text>
            </View>
            <Divider style={styles.dev} />
            <Button
              style={styles.btn}
              mode="contained"
              onPress={async () => {
                await auth().signOut();
                await AsyncStorage.setItem('@login', 'false').then(() =>
                  navigation.navigate('Home'),
                );
              }}>
              LogOut
            </Button>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    marginTop: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
  },
  Avttex: {
    marginLeft: '3%',
    alignSelf: 'center',
    fontSize: 32,
  },
  dev: {
    marginTop: '5%',
  },
  NameD: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 23,
    marginTop: '5%',
  },
  btn: {
    marginTop: '10%',
    width: '40%',
    alignSelf: 'center',
    backgroundColor: '#0db6c2',
  },
});

export default TDashboard;
