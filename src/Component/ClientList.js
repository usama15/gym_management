import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppBar from './Appbar';
import {Card} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const ClientList = () => {
  const [post, setPost] = React.useState([]);

  React.useEffect(async () => {
    await firestore()
      .collection('addpackage')
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
      <AppBar />
      <ScrollView>
        <View>
          {post.map(post => (
            <Card style={styles.card}>
              <View style={styles.main}>
                <Text style={styles.text}>Name:</Text>
                <Text style={styles.text}>{post.name}</Text>
              </View>
              <View style={styles.main}>
                <Text style={styles.text1}>Height:</Text>
                <Text style={styles.text2}>{post.height}</Text>
              </View>
              <View style={styles.main}>
                <Text style={styles.text1}>Weight:</Text>
                <Text style={styles.text2}>{post.weight}</Text>
              </View>
              <View style={styles.main}>
                <Text style={styles.text1}>Gender:</Text>
                <Text style={styles.text2}>{post.gender}</Text>
              </View>
              <View style={styles.main}>
                <Text style={styles.text1}>Age:</Text>
                <Text style={styles.text2}>{post.age}</Text>
              </View>
              <View style={styles.main}>
                <Text style={styles.text1}>Trainer:</Text>
                <Text style={styles.text2}>{post.trainer}</Text>
              </View>
              <View style={styles.main}>
                <Text style={styles.text1}>Type:</Text>
                <Text style={styles.text2}>{post.category}</Text>
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
    height: 250,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 10,
    shadowColor: '#0c0e0c',
    shadowOpacity: 1,
    elevation: 10,
    shadowOffset: {width: 1, height: 5},
    shadowRadius: 10,
    marginBottom: '5%',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  text: {
    fontSize: 28,
    marginLeft: '5%',
    marginTop: '5%',
    textTransform: 'capitalize',
  },
  text1: {
    fontSize: 20,
    marginLeft: '5%',
    textTransform: 'capitalize',
  },
  text2: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
});

export default ClientList;
