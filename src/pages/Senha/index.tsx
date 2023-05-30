import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { HelperText, Snackbar } from "react-native-paper";
import { resetaSenha } from "../../services/usuario-service";

const Senha = ({ navigation }: any) => {
  const [usuEmail, SetUsuEmail] = useState("");
  const [usuData, SetUsuData] = useState("");

  const [snakBar, setSnakBar] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const onToggleSnackBar = () => setSnakBar(!snakBar);
  const onDismissSnackBar = () => setSnakBar(false);

  function Recuperar() {
    resetaSenha(usuEmail, converter(usuData))
      .then(() => {
        setMensagem("Senha Alterada com Sucesso para: 123");
        onToggleSnackBar();
      })
      .catch((error) => {
        console.log("Erro ao trocar senha! ", error);
        setMensagem("Erro ao trocar senha!");
        onToggleSnackBar();
      });
  }

  const hasErrors = () => {
    const regexData = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return !regexData.test(usuData);
  };

  const converter = (data: string) => {
    const partes = data.split("/");
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // Os meses no JavaScript são baseados em zero
    const ano = parseInt(partes[2], 10);
    return new Date(ano, mes, dia);
  };

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
          <Text style={styles.texto1}>Esqueceu sua senha?{"\n"}</Text>
          <Text style={styles.textoSimples}>
            Coloque o endereço de e-mail que se cadastrou no aplicativo
          </Text>
          <TextInput
            style={styles.caixaTexto}
            onChangeText={SetUsuEmail}
            value={usuEmail}
          />

          <Text style={styles.textoSimples}>
            Informe a sua data de nascimento
          </Text>
          <TextInput
            style={styles.caixaTexto}
            placeholder="23/02/2023"
            onChangeText={SetUsuData}
            value={usuData}
          />
          <HelperText
            style={styles.textoError}
            type="error"
            visible={hasErrors() && usuData != ""}
          >
            Data incorreta! Formato: dd/MM/yyyy
          </HelperText>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto} onPress={Recuperar}>
              Recuperar
            </Text>
          </TouchableOpacity>
        </View>

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

export default Senha;
