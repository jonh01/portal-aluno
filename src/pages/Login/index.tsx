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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Snackbar } from "react-native-paper";

const Login = ({ navigation }: any) => {
  const [usuEmail, SetUsuEmail] = useState("");
  const [usuSenha, SetUsuSenha] = useState("");

  const [snakBar, setSnakBar] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleLogin = () => {
    autenticarUsuario(usuEmail, usuSenha)
      .then(() => {
        AsyncStorage.setItem("@storage_Key", usuEmail).then(() => {
          console.log("Logado com sucesso!");
          navigation.reset({
            index: 0,
            routes: [{ name: "main" }],
          });
        }).catch((error) =>{
          console.log("Erro ao guardar email");
          setMensagem('Erro ao Salvar Email!');
          onToggleSnackBar();
        });
      })
      .catch((error) => {
        console.log("Login ou senha inválido!");
        setMensagem('Login ou senha inválido!');
        onToggleSnackBar();
      });
  };

  const onToggleSnackBar = () => setSnakBar(!snakBar);
  const onDismissSnackBar = () => setSnakBar(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="always"
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

        <Snackbar
          visible={snakBar}
          onDismiss={onDismissSnackBar}
          duration={2000}
          action={{
            label: "Fechar",
            onPress: () => {
              // Do something
            },
          }}
        >
          {mensagem}
        </Snackbar>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
