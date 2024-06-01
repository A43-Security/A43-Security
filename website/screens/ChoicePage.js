import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function HomeScreen({ navigation }) {
   const {isManager, setIsManager} = useContext(UserContext)

  const manager = () => {
      setIsManager(true)
      navigation.navigate("Sign In Page")
  }
  
  const employee = () =>{
    setIsManager(false)
    navigation.navigate("Sign In Page")
  }
  return(
    <View style={styles.container}>
         <Button 
             title='Manager'
             onPress={manager}
         />

        <Button 
             title='Employee'
             onPress={employee}
        />
    </View> 
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
    },

})