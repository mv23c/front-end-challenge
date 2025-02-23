import React, { useState, useContext } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function SignIn(){
    const navigation = useNavigation();

    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(){
        if(email === '' || password === ''){
            return;
        }
          
        await signIn({ email, password });
    }

    return(
        <View style={styles.container}>
            <Image 
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />

            <Text style={styles.title}>Faça seu login</Text>

            <View style={styles.inputContainer}>
            <TextInput
                 placeholder='Digite seu email'
                 style={styles.input}
                 placeholderTextColor='#FFF'
                 value={email}
                 onChangeText={setEmail}
               />
               <TextInput
                 placeholder='Sua senha'
                 style={styles.input}
                 placeholderTextColor='#FFF'
                 secureTextEntry={true}
                 value={password}
                 onChangeText={setPassword}
               />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    { loadingAuth ? (
                        <ActivityIndicator size={25} color="#FFF"/>
                    ) : (
                      <Text style={styles.buttonText}>Acessar</Text>  
                    )}
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.text}>Não tem conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26254D'
    },
    logo:{
        marginBottom: 18
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },
    input:{
        width: '95%',
        height: 54,
        backgroundColor: '#484888',
        marginBottom: 12,
        borderRadius: 8,
        paddingHorizontal: 8,
        color: '#FFF'
    },
    text:{
        color: '#FFF'
    },
    button:{
        width: '95%',
        height: 54,
        backgroundColor: '#8d8786',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        fontSize: 18,
        color: '#FFF'
    },
    buttonLogin:{
        marginTop: 8
    },
    title:{
        fontSize: 26,
        color: '#FFF'
    }
})