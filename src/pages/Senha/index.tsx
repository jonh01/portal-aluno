import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../Estilos/styles';

const Senha = ({navigation}:any) => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.article}>
                <Text style = {styles.texto1}>
                    Esqueceu sua senha?{'\n'} 
                </Text>      
                <Text style = {styles.textoSimples}>
                    Coloque o endereço de e-mail que se cadastrou no aplicativo
                </Text>
                <TextInput style = {styles.caixaTexto} />
                <TouchableOpacity style = {styles.botao}>
                    <Text style = {styles.botaoTexto}>Recuperar</Text>
                </TouchableOpacity> 
            </View>

        </SafeAreaView>
    )

};



export default Senha;
