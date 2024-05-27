import { useState } from 'react';
import { Keyboard, Button, StyleSheet, Text, View, TextInput, StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';


export default function LogInScreen({ navigation }) {
  const [logInUsername, setLogInUsername] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}

    if(!logInUsername) errors.logInUsername = 'Username is required'
    if(!logInPassword) errors.logInPassword = 'Password is required'

    setErrors(errors)

    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if(validateForm()){
        setLogInUsername("")
        setLogInPassword("")
        setErrors({})
    }
  }

    return(

<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}> 
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>A43 Security</Text>
      <View style={styles.form}>
      <Text style={styles.label}>Username</Text>
      <TextInput placeholder='Enter your username' style={styles.input} value={logInUsername} onChangeText={setLogInUsername}/>
      {
        errors.logInUsername ? <Text style={styles.errorText}>{errors.logInUsername}</Text> : null
      }
      <Text style={styles.label}>Password</Text>
      <TextInput placeholder='Enter you password' style={styles.input} secureTextEntry value={logInPassword} onChangeText={setLogInPassword}></TextInput>
      {
        errors.logInPassword ? <Text style={styles.errorText}>{errors.logInPassword}</Text> : null
      }
      <View style={styles.buttons}>
      <Button title='Log In'
      onPress={()=> handleSubmit()}
      /> 
      <Button 
      title='Sign Up' 
      onPress={() => navigation.navigate('Sign In Page')} />
      </View>
      <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
      marginBottom: 60,
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
  