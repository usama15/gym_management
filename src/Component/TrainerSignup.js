import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button, TextInput, RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
// import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const TrainerSignUp = () => {
  const [gvalue, setGvalue] = React.useState(null);
  const [value, setValue] = React.useState(null);
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [disable, setDisable] = React.useState(false)
  const submit = async () => {
    setDisable(true)
    const result = auth().createUserWithEmailAndPassword(email, password);

    firestore()
      .collection('Trainer')
      .doc((await result).user.uid)
      .set({
        email: email,
        password: password,
        name: name,
        phone: phone,
        gvalue: gvalue,
        value: value,
      }).then(navigation.goBack('trainerLogin'))
      .then({
        setName: setName(null),
        setGvalue: setGvalue(null),
        setValue: setValue(null),
        setEmail: setEmail(null),
        setPassword: setPassword(null),
        setConfirmPassword: setConfirmPassword(null),
        setPhone: setPhone(null),
      })
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Trainer Signup</Text>
          <TextInput
            mode="outlined"
            style={styles.textbar}
            label={'Full Name'}
            theme={{colors: {text: 'black', primary: '#0a217a'}}}
            onChangeText={userName => setName(userName)}
            labelValue={name}
          />
          <TextInput
            mode="outlined"
            style={styles.textbar}
            label={'Phone Number'}
            theme={{colors: {text: 'black', primary: '#0a217a'}}}
            onChangeText={userName => setPhone(userName)}
            labelValue={phone}
          />
          <TextInput
            mode="outlined"
            style={styles.textbar}
            label={'Email Address'}
            labelValue={email}
            theme={{colors: {text: 'black', primary: '#0a217a'}}}
            onChangeText={userEmail => setEmail(userEmail)}
          />
          <TextInput
            mode="outlined"
            style={styles.textbar}
            label={'Password'}
            theme={{colors: {text: 'black', primary: '#0a217a'}}}
            labelValue={password}
            onChangeText={userPassword => setPassword(userPassword)}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TextInput
            mode="outlined"
            style={styles.textbar}
            label={'Confirm Password'}
            theme={{colors: {text: 'black', primary: '#0a217a'}}}
            onChangeText={userPassword => setConfirmPassword(userPassword)}
            labelValue={confirmPassword}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <RadioButton.Group
            onValueChange={newValue => setGvalue(newValue)}
            value={gvalue}>
            <Text style={styles.gen}>Gender</Text>
            <View style={styles.radio}>
              <RadioButton value="Male" />
              <Text style={styles.lab}>Male</Text>
              <RadioButton style={styles.sec} value="Female" />
              <Text style={styles.lab}>Female</Text>
            </View>
          </RadioButton.Group>
          <RadioButton.Group
            onValueChange={newValue => setValue(newValue)}
            value={value}>
            <Text style={styles.gen}>Trainer Type</Text>
            <View style={styles.radio}>
              <RadioButton value="General Trainer" />
              <Text style={styles.lab}>General Trainer</Text>
              <RadioButton style={styles.sec} value="Personal Trainer" />
              <Text style={styles.lab}>Personal Trainer</Text>
              <RadioButton style={styles.sec} value="Both" />
              <Text style={styles.lab}>Both</Text>
            </View>
          </RadioButton.Group>
          <Button
            style={styles.btn}
            mode="contained"
            disabled={disable}
            theme={{colors: {primary: 'white'}}}
            onPress={() => submit()}>
            Finish
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0db6c2',
    justifyContent: 'center',
    height: 800,
  },
  sec: {
    // marginHorizontal: '100%',
  },
  lab: {
    marginTop: '2%',
    color: 'white',
  },
  gen: {
    marginHorizontal: '8%',
    fontSize: 18,
    marginTop: '2%',
    color: 'white',
  },
  radio: {
    width:'88%',
    flexDirection: 'row',
    alignSelf:'center',
  },
  textbar: {
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 10,
  },
  btn: {
    alignSelf: 'center',
    width: '90%',
    marginTop: '20%',
    marginBottom: '10%',
  },
  sectionTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: '5%',
  },
  secondText: {
    marginHorizontal: 85,
    fontSize: 18,
    fontWeight: '400',
    color: '#66cc66',
    marginBottom: '10%',
  },
  fo: {
    marginTop: '70%',
    marginHorizontal: 100,
  },
  highlight: {
    opacity: 0.2,
    marginHorizontal: '33%',
    marginTop: '5%',
  },
  footer: {
    flex: 1,
    opacity: 0.2,
    marginHorizontal: '5%',
  },
});

export default TrainerSignUp;
