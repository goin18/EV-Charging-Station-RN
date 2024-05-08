import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as SecureStore from "expo-secure-store";

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';

import LoginScreen from './App/Screen/LoginScreen/LoginScreen';

import { ClerkProvider,  SignedIn, SignedOut } from "@clerk/clerk-expo";
import TabNavigation from './App/Navigations/TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { UserLocationContext } from './App/Context/UserLocationContext'

import * as Location from 'expo-location';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log(`Permission to access location was denied`);
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location.coords);

    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <ClerkProvider 
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
        <UserLocationContext.Provider
          value={{ location, setLocation}}
        >
          <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <SignedIn>
              {/* <Text>You are Signed in</Text> */}
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
            </SignedIn>
            <SignedOut>
              <LoginScreen />
            </SignedOut>
          </SafeAreaView>
      </UserLocationContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  },
});
