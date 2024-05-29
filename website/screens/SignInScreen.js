import { useState, useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TextInput, StatusBar, KeyboardAvoidingView, ScrollView} from 'react-native';
import { createEmployee } from '../adapter/employeeAdapter'
import UserContext from '../context/UserContext';
import {Picker} from '@react-native-picker/picker';

export default function SignInScreen({ navigation }) {
    const [verifyPass, setVerifyPass] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");
    
    const [errors, setErrors] = useState({})
    const {
      first, 
      setFirst,   
      last,
      setLast,
      username, 
      setUsername, 
      pass, 
      setPass, 
      firstTyped,
      setFirstTyped,
      lastTyped,
      setLastTyped,
      usernameTyped,
      setUsernameTyped,
      passTyped,
      setPassTyped,
      currentUser,
      setCurrentUser,
     
      } = useContext(UserContext)

    

    const validateForm = () => {
        let errors = {}
        
        if(passTyped !== verifyPass) {
            errors.pass = "Your passwords don't match"
            errors.verifyPass = "Your passwords don't match"
        }
        if(!firstTyped) errors.first = 'First name is required'
        if(!lastTyped) errors.last = 'Last name is required'
        if(!usernameTyped) errors.username = 'Username is required'
        if(!passTyped) errors.pass = 'Password is required'
        if(!verifyPass) errors.verifyPass = 'Please re-enter your password'

        setErrors(errors)
    
        return Object.keys(errors).length === 0
      }

      const handleSubmit = () => {

        // const [user, error] = await createEmployee({ firstName:first, lastName:last, username, password});

        // if (error) return setErrors(error.message);

        // setCurrentUser(user);
        // console.log(currentUser)

        setFirst(firstTyped)
        setLast(lastTyped)
        setUsername(usernameTyped)
        setPass(passTyped)
        
      

        if(validateForm()){
        setFirstTyped("")
        setLastTyped("")
        setUsernameTyped("")
        setPassTyped("")
        setVerifyPass("")
        setErrors({})

        navigation.navigate('Company')
        }

      }

    return(
    <KeyboardAvoidingView 
     behavior='padding' 
     keyboardVerticalOffset={100} 
     style={styles.container}
     >
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.heading}>Sign Up</Text>
      <View style={styles.form}>

      <Text style={styles.label}>First name</Text>
      <TextInput placeholder='Enter your first name' style={styles.input}  value={firstTyped} onChangeText={setFirstTyped} />
      {
        errors.firstTyped ? <Text style={styles.errorText}>{errors.firstTyped} </Text> : null
      }
      <Text style={styles.label}>Last Name</Text>
      <TextInput placeholder='Enter your last name' style={styles.input}  value={lastTyped} onChangeText={setLastTyped}></TextInput>
      {
        errors.lastTyped ? <Text style={styles.errorText}>{errors.lastTyped}</Text> : null
      }
      <Text style={styles.label}> Create a username</Text>
      <TextInput placeholder='Create a username ' style={styles.input}  value={usernameTyped} onChangeText={setUsernameTyped}></TextInput>
      {
        errors.usernameTyped ? <Text style={styles.errorText}>{errors.usernameTyped}</Text> : null
      }
      <Text style={styles.label}>Create a password</Text>
      <TextInput placeholder='Enter a password' style={styles.input} secureTextEntry  value={passTyped} onChangeText={setPassTyped}></TextInput>
      {
        errors.passTyped ? <Text style={styles.errorText}>{errors.passTyped}</Text> : null
      }
      <Text style={styles.label}>Verify password</Text>
      <TextInput placeholder='Enter password again' style={styles.input} secureTextEntry  value={verifyPass} onChangeText={setVerifyPass}></TextInput>
      {
        errors.verifyPass ? <Text style={styles.errorText}>{errors.verifyPass}</Text> : null
      }


      <Button 
      title='Submit' 
      onPress={() => handleSubmit()} />
      <StatusBar style="auto" />
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  
    heading: {
      fontSize: 45,
      marginTop: 40,
      marginBottom: 25,
      fontWeight: 'bold'
    },
  
    form: {
      backgroundColor: 'white',
      width: 300, 
      padding: 30,
      borderRadius: 10,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
      },
  
      label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: "bold"
      },
  
      input: {
        height: 40, 
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
      },

      errorText: {
        color: "red",
        marginBottom: 10,
      }
  });
  
