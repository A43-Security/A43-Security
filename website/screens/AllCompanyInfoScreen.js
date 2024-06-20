import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { getAllCompanies } from '../adapter/companiesAdapter'
import { getEmployersByCompany, deleteEmployeeById } from  '../adapter/employeeAdapter'
import { SelectList } from "react-native-dropdown-select-list"
import { useState, useEffect, useContext } from 'react'

export default function AllCompanyInfoScreen({ navigation }) {

    const [allCompanies, setAllCompanies] = useState([]);
    const [allEmployees, setAllEmployees] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchAllCompanies = async () => {
            try {
                const data = await getAllCompanies();
                if (data) setAllCompanies(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchAllCompanies();
    }, []);

    const handleClick = async (company) => {
        try {
            const data = await getEmployersByCompany({ company: company });
            if (data) setAllEmployees(data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            const result = await deleteEmployeeById({ id });
            setAllEmployees((prevEmployees) => prevEmployees.filter(employee => employee.id !== id));
            console.log(`Deleted employee with ID: ${id}`);
        } catch (error) {
            console.log('Error deleting employee:', error.message);
        }
    };

    const allComps = allCompanies.map((company) => ({
        key: company.id,
        value: company.name,
    }));

    return (
        <View style={styles.container}>
            <Text>Company Info</Text>
            <SelectList
                setSelected={setCategory}
                data={allComps}
                placeholder={"Select Store"}
                defaultOption={{ key: "Aerie", value: "Aerie" }}
            />

            <Button
                title='Show table'
                onPress={() => handleClick(category)}
            />

            {allEmployees.length > 0 && (
                <>
                    <Text>Employees:</Text>
                    <View style={styles.tableContainer}>
                        {allEmployees.map((employee, index) => (
                            <View key={index} style={styles.row}>
                                <View style={styles.info}>
                                    <Text style={styles.text}>{employee.firstname} {employee.lastname}</Text>
                                </View>
                                <Button
                                    title="Delete"
                                    color="red"
                                    onPress={async () => handleDelete(employee?.id)}
                                />
                            </View>
                        ))}
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    tableContainer: {
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    info: {
        flex: 1,
    },
    text: {
        fontSize: 16,
    },
    button: {
        marginTop: 10,
    },
});