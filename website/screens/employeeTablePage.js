import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function EployeeTableScreen({ navigation }) {
    const employees = [
        {
          username: "jdoe",
          password: "password123",
          firstname: "John",
          lastname: "Doe",
          ismanager: false,
          imageUrl: "http://example.com/images/jdoe.png",
          company: "Company A",
        },
        {
          username: "asmith",
          password: "password456",
          firstname: "Alice",
          lastname: "Smith",
          ismanager: true,
          imageUrl: "http://example.com/images/asmith.png",
          company: "Company B",
        },
        {
          username: "bwhite",
          password: "password789",
          firstname: "Bob",
          lastname: "White",
          ismanager: false,
          imageUrl: "http://example.com/images/bwhite.png",
          company: "Company C",
        },
        {
          username: "clane",
          password: "password101",
          firstname: "Carol",
          lastname: "Lane",
          ismanager: true,
          imageUrl: "http://example.com/images/clane.png",
          company: "Company D",
        },
        {
          username: "dking",
          password: "password102",
          firstname: "David",
          lastname: "King",
          ismanager: false,
          imageUrl: "http://example.com/images/dking.png",
          company: "Company E",
        },
      ];
      
  
      
    return(
      
            <View style={styles.container}>
             <Text>Employees:</Text>
            
              <View style={styles.tableContainer}>
                {employees.map((employee, index) => (
                  <View key={index} style={styles.row}>
                    <Image source={{ uri: employee.imageUrl }} style={styles.image} />
                    <View style={styles.info}>
                      <Text style={styles.text}>{employee.firstname} {employee.lastname}</Text>
                      <Button
                      title=""
                      />
                    </View>
                  </View>
                ))}
              </View>
             
            </View>
          
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tableContainer: {
      width: '90%',
      margin: 20,
      backgroundColor: 'lightgray',
      borderRadius: 10,
      padding: 10,
    },
    scrollContainer: {
        width: '100%',
        alignItems: 'center',
      },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    info: {
      flex: 1,
    },
    text: {
      fontSize: 16,
      marginBottom: 5,
    },
  });

