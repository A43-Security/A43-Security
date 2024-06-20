import { Button, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useState, useEffect, useContext } from 'react'
import { getAllLogs } from '../adapter/logsAdapter'

export default function MorningLogsScreen({ navigation }) {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const fetchAllCompanies = async () => {
        try {
            const data = await getAllLogs();
            if (data) setLogs(data);
        } catch (error) {
            console.error(error.message);
        }
    };

    fetchAllCompanies();
}, []);


    return (
      <>
      <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text>Morning Logs:</Text>
                <View style={styles.tableContainer}>
                    {logs?.map((log, index) => (
                        <View key={index} style={styles.row}>
                            <View style={styles.info}>
                                <Text style={styles.text}>Name: {log?.firstname} {log?.lastname}  |  Company: {log?.company} </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
      </>
    )
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
        width: '100%',
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
    text: {
        fontSize: 16,
    },
});