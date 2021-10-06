import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.h1}>Gym Management System</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.h2}>Welcome</Text>
          <View style={styles.grp}>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={() => navigation.navigate('trainerLogin')}>
              Trainer Login
            </Button>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={() => navigation.navigate('memberLogin')}>
              Member Login
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h1: {
    padding: 20,
    textAlign: 'center',
    fontSize: 30,
    marginTop: '15%',
  },
  h2: {
    padding: 20,
    textAlign: 'center',
    fontSize: 29,
    marginTop: '5%',
    color: 'white',
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#0db6c2',
    width: '90%',
    height: 300,
    alignSelf: 'center',
    marginTop: '15%',
    marginBottom: '10%',
  },
  grp: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    width: '50%',
    marginTop: '5%',
    backgroundColor: '#070707',
  },
});

export default Home;
