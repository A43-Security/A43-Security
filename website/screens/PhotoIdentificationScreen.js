import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { useState, useContext } from 'react';
import * as ImagePicker from "expo-image-picker";
import placeHolder from '../assets/placeholder.png';
import UserContext from '../context/UserContext';


export default function PhotoIdentificationScreen({navigation}) {
  const [imageUri, setImageUri] = useState(null);
  const { imageUrl, setImageUrl} = useContext(UserContext)
  

  const uploadImage = async (mode) => {
    try {
      let result;
      if (mode === 'gallery') {
        result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        console.log(result.assets[0].uri)
        setImageUri(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error uploading image: " + error);
    }
  };

  const handleSubmit = () => {
    setImageUrl(imageUri)
    console.log(imageUrl)
    navigation.navigate('Home Page')
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Take A Photo</Text>
      <View style={styles.wrap}>
        <Image
          source={imageUri ? { uri: imageUri } : placeHolder}
          style={styles.photo}
        />
        <View style={styles.buttons}>
          <Button
            title='Take a photo'
            onPress={() => uploadImage('camera')}
            style={styles.button}
          />
          <Button
            title='Use from gallery'
            onPress={() => uploadImage('gallery')}
            style={styles.button}
          />
        </View>
        <View style={{alignItems: "center"}}>
          <Button 
          title="Submit"
          onPress={() => handleSubmit()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content towards the top
    paddingTop: 50,
  },
  heading: {
    fontSize: 38,
    marginTop: 40,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  wrap: {
    backgroundColor: 'white',
    width: 320,
    padding: 30,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  photo: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 30,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    marginHorizontal: 10,
  }
});