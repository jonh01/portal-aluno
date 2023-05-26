import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Senha = ({navigation}:any) => {
    return (
        <SafeAreaView style = {style.container}>
            <View style = {style.textContainer}>
            <Text>Esqueceu sua senha?{'\n'}
                Coloque o endereço de e-mail que se cadastrou no aplicativo
            </Text>
                <TextInput style = {style.input} placeholder="Digite o e-mail cadastrado"/>
                <TouchableOpacity style = {style.button}>
                    <Text>Recuperar senha</Text>
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

export default Senha;
