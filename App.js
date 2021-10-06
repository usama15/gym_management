import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Splash from './src/Screen/Splash';
import TrainerLogin from './src/Component/TrainerLogin';
import TrainerSignUp from './src/Component/TrainerSignup';
import MemberLogin from './src/Component/MemberLogin';
import MemberSignUp from './src/Component/MemberSignup';
import BottomNav from './src/Component/BottomNav';
import Home from './src/Screen/Home';
import AbsWorkout from './src/Screen/AbsWorkout';
import AvailableTrainer from './src/Screen/AvailableTrainer';
import CarodicExecrise from './src/Screen/CarodicExecrise';
import ChestWorkout from './src/Screen/ChestWorkout';
import LegWorkout from './src/Screen/LegWorkout';
import MusclesWorkout from './src/Screen/MusclesWorkout';
// import Main_screen from "./src/Screen/Main_Screen";
const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomNav">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="trainerLogin"
          component={TrainerLogin}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="trainerSignup"
          component={TrainerSignUp}
          options={{headerTitle: false, headerShown: false}}
        />
        <Stack.Screen
          name="memberLogin"
          component={MemberLogin}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="memberSignup"
          component={MemberSignUp}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="AbsWorkout"
          component={AbsWorkout}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="AvailableTrainer"
          component={AvailableTrainer}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="CarodicExecrise"
          component={CarodicExecrise}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="ChestWorkout"
          component={ChestWorkout}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="LegWorkout"
          component={LegWorkout}
          options={{headerMode: 'none', headerShown: false}}
        />
        <Stack.Screen
          name="MusclesWorkout"
          component={MusclesWorkout}
          options={{headerMode: 'none', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
