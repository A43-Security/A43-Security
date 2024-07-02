import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { createLog } from '../adapter/logsAdapter';
import UserContext from '../context/UserContext';

export default function EmployeeTapScreen({ navigation }) {
  const { userInfo } = useContext(UserContext);
  const [isLogged, setIsLogged] = useState(false);
  const [error, setError] = useState(null);

  const handleTap = async () => {
    try {
      const data = await createLog({ 
        firstname: userInfo.firstname, 
        lastname: userInfo.lastname, 
        company: userInfo.company 
      });
      if (data) {
        setIsLogged(true);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    if (isLogged) {
      Alert.alert('Success', 'Your name has been logged successfully!');
    }
  }, [isLogged]);

  return (
    <View>
      {isLogged ? (
        <View>
          <Text>Success!</Text>
        </View>
      ) : (
        <View>
          <Text>Tap the button to log name</Text>
          <Button
            title='Tap'
            onPress={handleTap}
          />
          {error && <Text>Error: {error}</Text>}
        </View>
      )}
    </View>
  );
}

