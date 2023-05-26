import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../Estilos/styles';

const Cadastro = ({navigation}:any) => {
    return (
        <SafeAreaView style = {styles.container}>
            {/*<View style = {styles.header}>
                <Image source={require('../logoLivro.png')}/>
    </View>*/}
            <View style = {styles.article}>
                <Text style = {styles.texto1}>Nome:</Text>
                <TextInput style = {styles.caixaTexto} />
                <Text style = {styles.texto1}>Data de Nascimento</Text>
                <TextInput style = {styles.caixaTexto} />
                <Text style = {styles.texto1}>Telefone</Text>
                <TextInput style = {styles.caixaTexto}  keyboardType='numeric'/>
                <Text style = {styles.texto1}>E-mail</Text>
                <TextInput style = {styles.caixaTexto} /> 
                <TouchableOpacity style = {styles.botao}>
                    <Text style ={styles.botaoTexto}>Cadastrar</Text>
                </TouchableOpacity>                                                                                      

            </View>

        </SafeAreaView>
    )

};
/*
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
*/
export default Cadastro;