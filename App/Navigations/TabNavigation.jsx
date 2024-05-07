import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false,
    }}>
      <Tab.Screen name="home" component={HomeScreen} 
        options={{
          tabBarLabel:'Search',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon:({ color, size}) => (
            <FontAwesome name="search" size={size} color={color} />
          )
        }} />
      <Tab.Screen name="favorite" component={FavoriteScreen} 
       options={{
        tabBarLabel:'Favorite',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIcon:({ color, size}) => (
          <FontAwesome name="heart" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen name="profile" component={ProfileScreen} 
       options={{
        tabBarLabel:'Profile',
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarIcon:({ color, size}) => (
          <FontAwesome name="user" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})