import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { getEmployersByCompany, deleteEmployeeById } from  '../adapter/employeeAdapter'
import { useState, useEffect, useContext } from 'react'
import UserContext from '../context/UserContext';

export default function EployeeTableScreen({ navigation }) {
    const { userInfo } = useContext(UserContext)
    const [allEmployees, setAllEmployees] = useState()

    useEffect(() => {
        const fetchAllEmployees = async () => {
          try {
            const data = await getEmployersByCompany({ company: userInfo.company });
            if (data) setAllEmployees(data);

          } catch (error) {
            console.log(error.message);
          }
        };
    
         fetchAllEmployees();
      }, [userInfo.company]);
     
      const handleDelete = async (id) => {
        try {
            const result = await deleteEmployeeById({ id });
            setAllEmployees((prevEmployees) => prevEmployees.filter(employee => employee.id !== id));
            console.log(`Deleted employee with ID: ${id}`);
        } catch (error) {
            console.log('Error deleting employee:', error.message);
        }
    };
      
      
      return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text>Employees:</Text>
                <View style={styles.tableContainer}>
                    {allEmployees?.map((employee, index) => (
                        <View key={index} style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.text}>{employee?.firstname} {employee?.lastname}</Text>
                            </View>
                            <Button
                                title="Delete"
                                color="red"
                                onPress={async () =>  handleDelete(employee?.id)}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    tableContainer: {
        width: '90%',
        backgroundColor: 'lightgray',
        borderRadius: 10,
        padding: 10,
    },
    scrollContainer: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
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
    info: {
        flex: 1,
    },
    text: {
        fontSize: 16,
    },
});

