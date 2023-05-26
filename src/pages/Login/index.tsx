import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from '../../Estilos/styles';

const Login = ({navigation}:any) => {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
        {/*<Image
            style={styles.logo}
            source={require('../logo.png')}/>*/}
         </View>

          <View style={styles.article}>
            <Text style={styles.texto1}> Login </Text>
            <TextInput style={styles.caixaTexto} />
            <Text style={styles.texto1}>Senha</Text>
            <TextInput style={styles.caixaTexto}/>
            <View style={styles.registroRecuperar}>  
              <TouchableOpacity onPress={() => navigation.navigate('cadastro')} >
                <Text> Registre-se </Text>
              </TouchableOpacity>      
              <TouchableOpacity onPress={() => navigation.navigate('recuperarSenha')}>
                <Text> Esqueceu a senha </Text>
              </TouchableOpacity>
            </View>
          </View>
    
          <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}> Entrar </Text>
          </TouchableOpacity> 
        </SafeAreaView>
      );


};

export default Login;
