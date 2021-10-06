import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Appbar from './Appbar';
import {useNavigation} from '@react-navigation/native';

const MainScreen = () => {
  let navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <Appbar />
        <View>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('MusclesWorkout')}>
            <ImageBackground
              style={styles.img}
              resizeMode={'cover'}
              borderRadius={10}
              source={require('../asset/pexels-victor-freitas-841130.jpg')}>
              <Text style={styles.text}>Muscles Workout</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('CarodicExecrise')}>
            <ImageBackground
              style={styles.img}
              resizeMode={'cover'}
              borderRadius={10}
              source={require('../asset/pexels-andrea-piacquadio-3768913.jpg')}>
              <Text style={styles.text}>Carodic Execrise</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('LegWorkout')}>
            <ImageBackground
              style={styles.img}
              resizeMode={'cover'}
              borderRadius={10}
              source={require('../asset/pexels-cesar-galeão-3253501.jpg')}>
              <Text style={styles.text}>Leg Workout</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('AbsWorkout')}>
            <ImageBackground
              style={styles.img}
              resizeMode={'cover'}
              borderRadius={10}
              source={require('../asset/pexels-andres-ayrton-6550874.jpg')}>
              <Text style={styles.text}>Abs Workout</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ChestWorkout')}>
            <ImageBackground
              style={styles.img}
              resizeMode={'cover'}
              borderRadius={10}
              source={require('../asset/pexels-ivan-samkov-4162491.jpg')}>
              <Text style={styles.text}>Chest Workout</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card,{marginBottom:'5%'}]}
            onPress={() => navigation.navigate('AvailableTrainer')}>
            <ImageBackground
              style={styles.img}
              resizeMode={'cover'}
              borderRadius={10}
              source={require('../asset/pexels-pixabay-414029.jpg')}>
              <Text style={styles.text}>Available Trainer</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 130,
    alignSelf: 'center',
    marginTop: '5%',
  },
  img: {
    height: '100%',
    // opacity: 1,
  },
  text: {
    height: '100%',
    fontSize: 32,
    color: 'white',
    textAlignVertical: 'center',
    marginLeft: '5%',
  },
});

export default MainScreen;
