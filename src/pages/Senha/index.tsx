import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { TrocarSenha } from "../../services/senha-service";
import { ScrollView } from "react-native";

const Senha = ({ navigation }: any) => {
  const [usuEmail, SetUsuEmail] = useState("");
  const [usuData, SetUsuData] = useState("");

  function Recuperar() {
    TrocarSenha(usuEmail, usuData).catch((error) =>
      console.log("Erro ao trocar senha! ", error)
    );
  }
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
            onChangeText={SetUsuData}
            value={usuData}
          />
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto} onPress={Recuperar}>
              Recuperar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Senha;
