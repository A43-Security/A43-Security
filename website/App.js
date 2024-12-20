import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInScreen from './screens/LogInScreen';
import SignInScreen from './screens/SignInScreen';
import PhotoIdentificationScreen from './screens/PhotoIdentificationScreen';
import UserProvider from './context/UserProvider';
import HomeScreen from './screens/HomePageScreen';
import CompanyScreen from './screens/CompanyScreen';
import ChoicePage from './screens/ChoicePage';
import EmployeeTablePage from './screens/employeeTablePage'
import AllCompanyInfoScreen from './screens/AllCompanyInfoScreen';
import EmployeeTapScreen from './screens/EmployeeTapScreen';
import MorningLogsScreen from './screens/MorningLogsScreen'


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Log In Page'>
        <Stack.Screen name="Log In Page" component={LogInScreen} />
        <Stack.Screen name="Sign In Page" component={SignInScreen} />
        <Stack.Screen name="Photo Identification" component={PhotoIdentificationScreen} />
        <Stack.Screen name="Home Page" component={HomeScreen} />
        <Stack.Screen name="Company" component={CompanyScreen} />
        <Stack.Screen name="Choice Page" component={ChoicePage} />
        <Stack.Screen name="Employee Table" component={EmployeeTablePage} />
        <Stack.Screen name="Company Info" component={AllCompanyInfoScreen} />
        <Stack.Screen name="Employee Tap Screen" component={EmployeeTapScreen} />
        <Stack.Screen name="Morning Logs" component={MorningLogsScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
    </UserProvider>
  )
}