import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppBar from '../Component/Appbar';
import {Card} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const MusclesWorkout = () => {
  const [post, setPost] = React.useState([]);

  React.useEffect(async () => {
    await firestore()
      .collection('workout')
      .onSnapshot(snapshot => {
        const newPost = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPost(newPost.filter(x => x.value === 'muscles'));
      });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <AppBar />
        <View>
          <Card style={styles.hcard}>
            <ImageBackground
              style={{width: '100%'}}
              resizeMode={'cover'}
              borderRadius={10}
              source={require('../asset/pexels-victor-freitas-841130.jpg')}>
              <Text style={styles.head}>Equipment Use In Muscles Workout</Text>
            </ImageBackground>
          </Card>
          {post.map(post => (
            <Card style={styles.card}>
              <Image
                style={styles.img}
                resizeMode="stretch"
                source={{uri: post.url}}
              />
              <Text style={styles.text}>{post.name}</Text>
              <Text style={styles.text1}>{post.detail}</Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 400,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 10,
  },
  hcard: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '2%',
  },
  head: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
  },
  img: {
    height: '60%',
    width: '50%',
    alignSelf: 'center',
  },
  text: {
    fontSize: 28,
    marginLeft: '5%',
  },
  text1: {
    marginLeft: '7%',
  },
});
export default MusclesWorkout;
