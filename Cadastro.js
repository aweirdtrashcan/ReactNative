import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Cadastro = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = () => {
        navigation.navigate('Login');
    };
 
    return (
        <View style={styles.containers}>
            <TextInput
                style={styles.input} 
                placeholder='Nome do Usuário'
                value={username}
                onChangeText={setUsername}
            />
 
            <TextInput
                style={styles.input} 
                placeholder='Senha do Usuário'
                value={password}
                onChangeText={setPassword}
            />
 
            <Button 
                title='Registrar' onPress={handleRegister}
            />

            <Text onPress={() => navigation.navigate('Login')} style={{color: "blue"}}>
                Ir para Login        
            </Text>
        </View>
    );
};
 
const styles = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#42e6f5',
    },
    input: {
        width: '30%',
        padding: 10,
        margin: 10,
        color: '#eee',
        borderWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#eee',
        color: '#000'
 
    },
});

export default Cadastro;