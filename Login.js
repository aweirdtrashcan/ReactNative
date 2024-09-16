import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
 
const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (username === 'Faculdade' && password === '123') {
            navigation.navigate('Cadastro');
        } else {
            alert('Usuário ou senha errado');
        }
    };
 
    return (
        <View style={styles.containers}>

            <Text>Bem-vindo ao Apollo!</Text>

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
                title='Logar' onPress={handleLogin}
            />

            {/* <Text onPress={() => navigation.navigate('Cadastro')} style={{color: "blue"}}>
                Esqueci minha senha
            </Text> */}


            <Text onPress={() => navigation.navigate('Cadastro')} style={{color: "blue"}}>
                Registrar nova conta
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
    welcomeStyle: {
        
    }
});
 
export default Login;