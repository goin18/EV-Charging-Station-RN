import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../../Utils/Colors'

export default function LoginScreen() {
    return (
      <View style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
      }}>
        <Image source={require('../../../assets/images/logo.png')}
        style={styles.logoImage} />
        <Image source={require('../../../assets/images/ev-charging.png')}
        style={styles.bgImage} />

        <View style={{ padding: 20}}>
          <Text style={styles.heading}>Your Ultimate EV charging Station Finder App</Text>
          <Text style={styles.desc}>Find EV charing station near you, plane trip and so much more in just one click</Text> 
          <TouchableOpacity style={styles.button}
            onPress={() => console.log("Login Button Click")}
          >
            <Text style={styles.buttonText}>Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  logoImage: {
    width: 200,
    height: 40,
    objectFit: 'contain'
  },
  bgImage: {
    width: '100%',
    height: 200,
    marginTop: 40,
    objectFit: 'cover'
  },
  heading: {
    fontSize: 25,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginTop: 20
  },
  desc: {
    fontSize: 17,
    fontFamily: 'outfit',
    textAlign: 'center',
    marginTop: 15,
    color: Colors.GRAY
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 16,
    display: 'flex',
    borderRadius: 99,
    marginTop: 40
  },
  buttonText: {
    color: Colors.WHITE,
    textAlign: 'center',
    fontFamily: 'outfit',
    fontSize: 17
  }
})
