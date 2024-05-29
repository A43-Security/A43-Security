import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import placeHolder from '../assets/placeholder.png';

export default function HomeScreen({ navigation }) {
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
        imageUrl
        } = useContext(UserContext)


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{username}</Text>
            <Image
             source={{uri : imageUrl}}
             style={styles.photo} />
            <Text style={styles.text}>{first} {last}</Text> 
            <Button 
            title='click to tap'
            style={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 70,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    photo: {
        width: 250,
        height: 250,
        borderRadius: 125,
        marginBottom: 30,
        marginTop: 30,
      },
    button: {
        width: 150,
        height: 50,
        borderRadius: 5,
        backgroundColor: "grey",
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold'
      },

     text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
});