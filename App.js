import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Alert, Button, ImageBackground, Pressable, TouchableHighlight} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { styles } from './styles';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name='Spots'
          component={SpotsScreen} 
        />
        <Stack.Screen
          name='shook'
          component={SpotsScreen1} 
        />
        <Stack.Screen
          name='Spotted'
          component={SpotsScreen2} 
        />
        <Stack.Screen
          name='Olive'
          component={OliveScreen} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({navigation}) => {
  return(
    <SafeAreaView style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <ImageBackground
        source={require('./assets/catapp_background.jpg')}
        style={styles.background}
      >
        <SafeAreaView style={[styles.home]}>
          <TouchableOpacity onPress={() => {createTwoButtonAlert('spots','Is he a fat boy?', {navigation})}} style={{marginRight: 10}}>
            {/* label and image are attached because it is inside TouchableOpacity */}
            <Text style={styles.label}>This is Spots</Text>
            <Image
              source={require("./assets/spots2.jpg")}
              style={{width: 150, height: 200}}
            />Created a cat photo app as a learning project using React-Native and Expo (full stack)
Includes implementing screen stacks, alerts, press, and UI

            {/*the image is 3x4*/}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {createTwoButtonAlert('olive', 'Is she a good girl?', {navigation})}} style={{marginLeft: 10}}>
            <Text style={styles.label}>This is Olive</Text>
            <Image
              source={require("./assets/olive1.jpg")}
              style={{width: 150, height: 200}}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
      
      <StatusBar style="auto" />
      
      </SafeAreaView>
  )
}

const SpotsScreen = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground
          source={require('./assets/spots_background.jpg')}
          style={styles.background}
      > 
          <TouchableHighlight onPress={() => {navigation.navigate('Spotted')}}>
            <Image
              source={require("./assets/spots4.png")}
              style={{left: -100, top: -260, width: 90, resizeMode: 'contain',}}
            />
          </TouchableHighlight>
      </ImageBackground>
    </SafeAreaView>
  )
}

const SpotsScreen1 = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground
          source={require('./assets/spots5.jpg')}
          style={{width: '150%', height: '150%', right: 50, bottom: 250}}
      > 
      </ImageBackground>
    </SafeAreaView>
  )
}

const SpotsScreen2 = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground
          source={require('./assets/spotted.jpg')}
          style={styles.background}
      > 
      </ImageBackground>
    </SafeAreaView>
  )
}

const OliveScreen = ({navigation}) => {
  return(
    <SafeAreaView style={styles.container}>
      <ImageBackground
            source={require('./assets/olive_background.jpg')}
            style={styles.background}
          > 
          <Image
          source={require("./assets/olive2.jpg")}
          style={{width: 150, height: 200}}
        />
    </ImageBackground>
    </SafeAreaView>
  )
}

const createTwoButtonAlert = (cat, str, {navigation}) =>{
  return (
    Alert.alert(str, 'Hint: yes', [
      {text: 'Of Course', onPress: () => {
        if(cat == 'spots'){navigation.navigate('shook')}
        else if(cat == 'olive'){navigation.navigate('Olive')}}},
      {text: 'Yes', onPress: () => {
        if(cat == 'spots'){navigation.navigate('Spots')}
        else if(cat == 'olive'){navigation.navigate('Olive')}}},
    ])
  );
}

export default App;