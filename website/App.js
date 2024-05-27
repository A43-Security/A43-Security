import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LogInScreen from './screens/LogInScreen';
import SignInScreen from './screens/SignInScreen';
import PhotoIdentificationScreen from './screens/PhotoIdentificationScreen';
import UserProvider from './context /UserProvider';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Log In Page'>
        <Stack.Screen name="Log In Page" component={LogInScreen} />
        <Stack.Screen name="Sign In Page" component={SignInScreen} />
        <Stack.Screen name="Photo Identification" component={PhotoIdentificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  )
}