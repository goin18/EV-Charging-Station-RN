import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {useAuth } from "@clerk/clerk-expo";

export default function ProfileScreen() {

  const SignOut = () => {
    const { isLoaded,signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }
    return (
      <View>
        <Button
          title="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    );
  };

  return (
    <View>
      <Text>ProfileScreen</Text>
      <SignOut />
      
    </View>
  )
}

const styles = StyleSheet.create({})