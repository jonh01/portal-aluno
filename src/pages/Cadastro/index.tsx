import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const Cadastro = ({navigation}:any) => {
    return (
        <SafeAreaView style = {style.container}>
            <View style = {style.textContainer}>
                <Text>Nome:</Text>
                <TextInput style = {style.input} placeholder="Nome completo"/>
                <Text>Data de Nascimento</Text>
                <TextInput style = {style.input} placeholder="Senha"/>
                <Text>Telefone</Text>
                <TextInput style = {style.input} placeholder="99999-9999" keyboardType='numeric'/>
                <Text>E-mail</Text>
                <TextInput style = {style.input} placeholder="E-mail"/> 
                <TouchableOpacity style = {style.button}>
                    <Text>Cadastrar</Text>
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
    }
});

export default Cadastro;