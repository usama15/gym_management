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
// import Home from './src/Screen/Home'
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
        {/*<Stack.Screen*/}
        {/*  name="Location"*/}
        {/*  component={Location}*/}
        {/*  options={{headerMode: 'none', headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="About"*/}
        {/*  component={About}*/}
        {/*  options={{headerMode: 'none', headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="ContactUs"*/}
        {/*  component={ContactUs}*/}
        {/*  options={{headerMode: 'none', headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="GulCafe"*/}
        {/*  component={GulCafe}*/}
        {/*  options={{headerMode: 'none', headerShown: false}}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="Other"*/}
        {/*  component={OtherAmenites}*/}
        {/*  options={{headerMode: 'none', headerShown: false}}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
