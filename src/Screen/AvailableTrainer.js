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

const Trainer = () => {
  const [post, setPost] = React.useState([]);

  React.useEffect(async () => {
    await firestore()
      .collection('Trainer')
      .onSnapshot(snapshot => {
        const newPost = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPost(newPost);
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
              <Text style={styles.head}>Available Trainer at Gym</Text>
            </ImageBackground>
          </Card>
          {post.map(post => (
            <Card style={styles.card}>
              <Text style={styles.text}>Name: {post.name}</Text>
              <Text style={styles.text1}>Gender: {post.gvalue}</Text>
              <Text style={styles.text1}>Trainer Type: {post.value}</Text>
              <Text style={styles.text1}>Phone No: {post.phone}</Text>
                <View>

                </View>
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
    height: 200,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 10,
    marginBottom: 10,
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
  text: {
    marginTop: 10,
    fontSize: 28,
    marginLeft: '7%',
  },
  text1: {
    marginLeft: '7%',
    fontSize: 23,
  },
});
export default Trainer;
