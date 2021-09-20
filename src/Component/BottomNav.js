import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Package from './Package';
import AddPackage from './AddPackage';
import MainScreen from './MainScreen';

export default function BottomNav() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      activeColor="#0db6c2"
      initialRouteName="MainScreen"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Addpackage"
        component={AddPackage}
        options={{
          headerMode: 'none',
          headerShown: false,
          tabBarLabel: 'Add Package',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerMode: 'none',
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Package"
        component={Package}
        options={{
          headerMode: 'none',
          headerShown: false,
          tabBarLabel: 'Package',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="shopping" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
