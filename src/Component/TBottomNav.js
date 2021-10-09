import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ClientList from './ClientList';
import MainScreen from './MainScreen';
import TDashboard from './TDashboard';

export default function TBottomNav() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      activeColor="#0db6c2"
      initialRouteName="MainScreen"
      barStyle={{backgroundColor: 'white'}}>
      <Tab.Screen
        name="Addpackage"
        component={ClientList}
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
        component={TDashboard}
        options={{
          headerMode: 'none',
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
