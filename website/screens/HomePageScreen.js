import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function HomeScreen({ navigation }) {
    const { userInfo } = useContext(UserContext)

        const handleManagerClick = () => {
            navigation.navigate("Employee Table")
        }

        const handleCompaniesClick = () => {
            navigation.navigate("Company Info")
        }

        const handleMorningLogsClick = () => {
           navigation.navigate("Morning Logs")
        }

        const handleTapClick = () => {
           navigation.navigate("Employee Tap Screen")
        }

    return (
        <View style={styles.container}>
          {userInfo?.username === "Security123" || userInfo?.username === "Security456" 
          ? ( 
           <>
              <Button 
               title='Companies'
               onPress={handleCompaniesClick}
               />

             <Button 
               title='Morning Logs'
               onPress={handleMorningLogsClick}
              />
          </>
          ) : (
            <>
           <Text style={styles.heading}>{userInfo?.company}</Text>
            <Image
             source={{uri : userInfo?.imageurl}}
             style={styles.photo} />

            <Text style={styles.text}>{userInfo?.firstname} {userInfo?.lastname}</Text> 

            <Button 
            title='click to tap'
            style={styles.button}
            onPress={handleTapClick}
            />
            
            {userInfo?.ismanager && 
              <Button 
               title='Empolyees'
               onPress={handleManagerClick}
              />
            } 
            </>
            )
        }
            
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