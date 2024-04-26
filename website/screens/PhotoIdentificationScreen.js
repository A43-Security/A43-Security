import { Button, StyleSheet, Text, View, TextInput, StatusBar} from 'react-native';
 
 export default function PhotoIdentificationScreen(){
  return(
    <View style={styles.container}> 
     <Text style={styles.heading}>Take A Photo</Text>
     <View style={styles.wrap}>
        <View style={styles.photo}></View>
        <View style={styles.buttons}>
        <Button title='Take a photo'></Button> 
        <Button title='Use from gallery'></Button> 
        </View>
     </View>
    </View>
  )
 }

 const styles = StyleSheet.create({
     container:  {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
     },

     heading: {
        fontSize: 38,
        marginTop: 40,
        marginBottom: 60,
        fontWeight: 'bold'
      },

      wrap: {
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
        elevation: 5,
        alignItems: 'center',
      },

      photo: {
       backgroundColor: 'gray',
       width: 250,
       height: 250,
       padding: 70,
       borderRadius: 250,
       marginBottom: 30,
      },
      
      buttons: {
        flexDirection: 2
      }
 })