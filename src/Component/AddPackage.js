import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import AppBar from './Appbar';
import {TextInput, Button} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import firestore from '@react-native-firebase/firestore';

const AddPackage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [trainer, setTrainer] = useState('');
  const [gender, setGender] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Abs', value: 'Abs'},
    {label: 'Carodic', value: 'Carodic'},
    {label: 'Muscles', value: 'Muscles'},
    {label: 'Leg', value: 'Leg'},
    {label: 'Chest', value: 'Chest'},
  ]);

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
        category: value,
      })
      .then();
  };
  console.log(name, age, height, weight, trainer, gender, value)
  return (
    <SafeAreaView>
      <AppBar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.head}>Add Package</Text>
          <View>
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{colors: {text: 'black', primary: '#D49A9A'}}}
              label="Name"
              onChangeText={(val) => setName(val)}
              labelValue={name}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{colors: {text: 'black', primary: '#D49A9A'}}}
              label="Age"
              onChangeText={val => setAge(val)}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{colors: {text: 'black', primary: '#D49A9A'}}}
              label="Height"
              onChangeText={val => setHeight(val)}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{colors: {text: 'black', primary: '#D49A9A'}}}
              label="Weight"
              onChangeText={val => setWeight(val)}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{colors: {text: 'black', primary: '#D49A9A'}}}
              label="Trainer Name"
              onChangeText={val => setTrainer(val)}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.textInput}
              mode="outlined"
              theme={{colors: {text: 'black', primary: '#D49A9A'}}}
              label="Gender"
              onChangeText={val => setGender(val)}
              autoCapitalize="none"
            />
            <DropDownPicker
              dropDownContainerStyle={{
                width: '64.5%',
                paddingLeft: '5%',
                marginLeft: '15%',
              }}
              dropDownDirection="TOP"
              style={styles.textInput}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
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
