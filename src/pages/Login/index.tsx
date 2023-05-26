import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Login = ({navigation}:any) => {
    return (
        <SafeAreaView style = {style.container}>
            <View style = {style.textContainer}>
            <Text>Login</Text>
                <TextInput style = {style.input} placeholder="Login"/>
                <Text>Senha</Text>
                <TextInput style = {style.input} placeholder="Senha"/>
                <View style = {style.containerTwo}>           
                    <TouchableOpacity onPress={() => navigation.navigate('cadastro')} >
                        <Text>Registre-se </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('recuperarSenha')}>
                        <Text>Esqueci a senha</Text>
                    </TouchableOpacity>                                                                                           
                </View>
                <TouchableOpacity style = {style.button}>
                    <Text>Entrar</Text>
                </TouchableOpacity> 
            </View>

        </SafeAreaView>
    )

};

const style = StyleSheet.create ({
    container : {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    containerTwo : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        
       
    },
    textContainer: {
        padding: 5,
        marginBottom: 10,
        textAlign: 'center',
        justifyContent: 'center',
      },
    input : {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 5,
        marginTop: 30,
    },
});

export default Login;
