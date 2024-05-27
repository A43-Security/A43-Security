import { useState, useContext } from 'react';
import { Button, StyleSheet, Text, View, TextInput, StatusBar, KeyboardAvoidingView, ScrollView} from 'react-native';
import UserContext from '../context / UserContext';

export default function SignInScreen({ navigation }) {
    const [verifyPass, setVerifyPass] = useState("");
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
      company, 
      setCompany} = useContext(UserContext)

    const validateForm = () => {
        let errors = {}
        
        if(pass !== verifyPass) {
            errors.pass = "Your passwords don't match"
            errors.verifyPass = "Your passwords don't match"
        }
        if(!first) errors.first = 'First name is required'
        if(!last) errors.last = 'Last name is required'
        if(!username) errors.username = 'Username is required'
        if(!pass) errors.pass = 'Password is required'
        if(!verifyPass) errors.verifyPass = 'Please re-enter your password'
        if(!company) errors.company = 'Company is required'
     
        setErrors(errors)
    
        return Object.keys(errors).length === 0
      }

      const handleSubmit = () => {
        if(validateForm()){
        setFirst("")
        setLast("")
        setUsername("")
        setPass("")
        setVerifyPass("")
        setCompany("")
        setErrors({})

        navigation.navigate('Photo Identification')
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
      <TextInput placeholder='Enter your first name' style={styles.input}  value={first} onChangeText={setFirst} />
      {
        errors.first ? <Text style={styles.errorText}>{errors.first} </Text> : null
      }
      <Text style={styles.label}>Last Name</Text>
      <TextInput placeholder='Enter your last name' style={styles.input}  value={last} onChangeText={setLast}></TextInput>
      {
        errors.last ? <Text style={styles.errorText}>{errors.last}</Text> : null
      }
      <Text style={styles.label}> Create a username</Text>
      <TextInput placeholder='Create a username ' style={styles.input}  value={username} onChangeText={setUsername}></TextInput>
      {
        errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null
      }
      <Text style={styles.label}>Create a password</Text>
      <TextInput placeholder='Enter a password' style={styles.input} secureTextEntry  value={pass} onChangeText={setPass}></TextInput>
      {
        errors.pass ? <Text style={styles.errorText}>{errors.pass}</Text> : null
      }
      <Text style={styles.label}>Verify password</Text>
      <TextInput placeholder='Enter password again' style={styles.input} secureTextEntry  value={verifyPass} onChangeText={setVerifyPass}></TextInput>
      {
        errors.verifyPass ? <Text style={styles.errorText}>{errors.verifyPass}</Text> : null
      }
      <Text style={styles.label}>Company</Text>
      <TextInput placeholder='Enter your company name' style={styles.input}  value={company} onChangeText={setCompany}></TextInput>
      {
        errors.company ? <Text style={styles.errorText}>{errors.company}</Text> : null
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
  
