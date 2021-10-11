import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import AppBar from '../Component/Appbar';
import {Button, Card} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
import {useSelector} from 'react-redux';
const Trainer = () => {
  const [post, setPost] = React.useState([]);
  const [comment, setComment] = React.useState('');
  const [disable, setDisable] = React.useState(false);
  const userData = useSelector(state => state.user.initialState);
  const trainerData = useSelector(state => state.trainer.initialState);
  const [cpost, setCpost] = React.useState([]);

  React.useEffect(() => {
    if (trainerData === []) {
      setDisable(true);
    }
  }, []);
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

  function addComment(id) {
    //Getting Key to provide unique id to every comment
    let Keys = database().ref('/').push().key;
    console.log('Keys===>', Keys);

    firestore()
      .collection('comment')
      .doc(id / Keys)
      .set({
        comment: comment,
        name: userData[0].name,
        date: new Date(),
        id: id,
      })
      .then({
        setComment: setComment(),
      });
  }
  React.useEffect(async () => {
    await firestore()
      .collection('comment')
      .onSnapshot(snapshot => {
        const newPost = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCpost(newPost);
      });
  }, []);
  const comdata = cpost.filter(x => x.id.id === post.id);
  return (
    <SafeAreaView>
      <AppBar />
      <ScrollView>
        <View style={styles.container}>
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
                <View style={styles.com}>
                  <TextInput
                    placeholder="Comment"
                    placeholderTextColor="black"
                    style={styles.ctext}
                    onChangeText={val => setComment(val)}
                  />
                  <TouchableOpacity
                    disabled={disable}
                    onPress={() => addComment(post.id)}>
                    <Ionicons name="send" size={30} color="#D49A9A" />
                  </TouchableOpacity>
                </View>
                <View>
                  {comdata.map(comdata =>
                    comdata.id === post.id ? (
                      <View style={styles.com1}>
                        <Text style={styles.comhead}>{comdata.name}</Text>
                        <Text style={styles.comtext}>{comdata.comment}</Text>
                      </View>
                    ) : null,
                  )}
                </View>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  card: {
    width: '90%',
    height: window.outerHeight,
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
  com: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },
  ctext: {
    width: '90%',
    backgroundColor: '#e1e0e0',
    borderColor: 'black',
    borderRadius: 10,
    borderStyle: 'dotted',
    color: 'black',
    marginBottom: '2%',
  },
  com1: {
    backgroundColor: '#f6f5f5',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    marginBottom: '2%',
  },
  comhead: {
    marginLeft: '5%',
  },
  comtext: {
    marginLeft: '7%',
    opacity: 0.6,
  },
});
export default Trainer;
