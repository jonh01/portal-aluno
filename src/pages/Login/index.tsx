import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { autenticarUsuario } from "../../services/usuario-service";


const Login = ({ navigation }: any) => {
  const [usuEmail, SetUsuEmail] = useState("");
  const [usuSenha, SetUsuSenha] = useState("");

  const handleLogin = () => {
    autenticarUsuario(usuEmail, usuSenha).then(() => {
      console.log("Logado com suceeso!");
      navigation.reset({
        index:0,
        routes: [{name:"main"}], 
      });
    }).catch(error => (console.log("Login ou senha inválido!")));
    };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={require("../../assets/logo.png")}
            />
          </View>

          <View style={styles.article}>
            <Text style={styles.texto1}> Login </Text>
            <TextInput
              style={styles.caixaTexto}
              onChangeText={SetUsuEmail}
              value={usuEmail}
            />
            <Text style={styles.texto1}>Senha</Text>
            <TextInput
              style={styles.caixaTexto}
              secureTextEntry={true}
              onChangeText={SetUsuSenha}
              value={usuSenha}
            />
            <View style={styles.registroRecuperar}>
              <TouchableOpacity onPress={() => navigation.navigate("cadastro")}>
                <Text> Registre-se </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("recuperarSenha")}
              >
                <Text> Esqueceu a senha </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.botao} onPress={handleLogin}>
            <Text style={styles.botaoTexto}> Entrar </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  };

  export default Login;
