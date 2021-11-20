import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import AppBar from './Appbar';
import { TextInput, Button } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';
import { LogBox } from 'react-native';
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
} from "native-base"

const AddPackage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [trainer, setTrainer] = useState('');
  const [gender, setGender] = useState('');
  let [service, setService] = React.useState("")
  const [post, setPost] = React.useState([]);


  const submit = () => {
    firestore()
      .collection('addpackage')
      .doc()
      .set({
        name: name,
        age: age,
        height: height,
        weight: weight,
        trainer: trainer,
        gender: gender,
        category: service,
      })
      .then();
  };

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
  console.log(post.map((data) => data.name))
  return (
    <SafeAreaView>
      <AppBar />
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.container}>
          <Text style={styles.head}>Add Package</Text>
          <View>
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{ colors: { text: 'black', primary: '#D49A9A' } }}
              label="Name"
              onChangeText={(val) => setName(val)}
              labelValue={name}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{ colors: { text: 'black', primary: '#D49A9A' } }}
              label="Age"
              onChangeText={val => setAge(val)}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{ colors: { text: 'black', primary: '#D49A9A' } }}
              label="Height"
              onChangeText={val => setHeight(val)}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{ colors: { text: 'black', primary: '#D49A9A' } }}
              label="Weight"
              onChangeText={val => setWeight(val)}
              autoCapitalize="none"
            />
           
            <Center flex={1} mb='2' px='3'>
              <VStack alignItems="center" space={6}>
                <Select
                  selectedValue={trainer}
                  minWidth="300"
                  // w='100%'
                  accessibilityLabel="Choose Trainer"
                  placeholder="Choose Trainer"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setTrainer(itemValue)}
                >
                  {post.map((data) => 
                  <Select.Item label={data.name} value={data.name} />
                  )}
                </Select>
              </VStack>
            </Center >
            <Center flex={1} mb='2' px='3'>
              <VStack alignItems="center" space={6}>
                <Select
                  selectedValue={gender}
                  minWidth="300"
                  // w='100%'
                  accessibilityLabel="Choose Gender"
                  placeholder="Choose Gender"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setGender(itemValue)}
                >
                  <Select.Item label='Male' value='male' /> 
                  <Select.Item label='Female' value='female' /> 
                </Select>
              </VStack>
            </Center >
            <Center flex={1} px='3'>
              <VStack alignItems="center" space={6}>
                <Select
                  selectedValue={service}
                  minWidth="300"
                  // w='100%'
                  accessibilityLabel="Choose Category"
                  placeholder="Choose Category"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setService(itemValue)}
                >
                  <Select.Item label="Abs" value="Abs" />
                  <Select.Item label="Carodic" value="Carodic" />
                  <Select.Item label="Muscles" value="Muscles" />
                  <Select.Item label="Chest" value="Chest" />
                  <Select.Item label="Leg" value="Leg" />
                </Select>
              </VStack>
            </Center >
            <Button
              style={styles.btn}
              onPress={() => submit()}
              mode="contained">
              Submit
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: "10%"
  },
  head: {
    marginTop: '2%',
    alignSelf: 'center',
    fontSize: 32,
    marginBottom: '3%',
  },
  textInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '70%',
    marginBottom: '3%',
  },
  btn: {
    marginTop: '2%',
    width: '50%',
    alignSelf: 'center',
    marginBottom: '5%',
  },
});

export default AddPackage;
