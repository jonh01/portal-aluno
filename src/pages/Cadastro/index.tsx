import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import { Usuario } from "../../model/Usuario";
import { criarUsuario } from "../../services/usuario-service";
import { HelperText } from "react-native-paper";

const Cadastro = ({ navigation }: any) => {
  const [usuNome, SetUsuNome] = useState("");
  const [usuEmail, SetUsuEmail] = useState("");
  const [usuSenha, SetUsuSenha] = useState("");
  const [usuTel, SetUsuTel] = useState("");
  const [usuDate, SetUsuDate] = useState("");

  function Cadastrar() {
    
    const usu: Usuario = {
      nome: usuNome,
      email: usuEmail,
      senha: usuSenha,
      telefone: usuTel,
      dt_nasc: converter(usuDate),
    };

    console.log(usu);
      criarUsuario(usu)
       .then(() => console.log("Usuário Cadastrado"))
       .catch((error) => console.log("Deu ruim! ", error));
  }

  const hasErrors = () => {
    const regexData = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    return !regexData.test(usuDate);
  };

  const converter = (data:string) => {
    const partes = data.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // Os meses no JavaScript são baseados em zero
    const ano = parseInt(partes[2], 10);
    return new Date(ano, mes, dia);
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
          <Text style={styles.texto1}>Nome:</Text>
          <TextInput
            style={styles.caixaTexto}
            onChangeText={SetUsuNome}
            value={usuNome}
          />
          <HelperText style={styles.textoError} type="error" visible={usuNome == null}>
            O nome está no formato incorreto!
          </HelperText>

          <Text style={styles.texto1}>Data de Nascimento</Text>
          <TextInput
            style={styles.caixaTexto}
            placeholder="23/02/2023"
            onChangeText={SetUsuDate}
            value={usuDate}
          />
          <HelperText style={styles.textoError} type="error" visible={hasErrors() && usuDate != ''}>
            Data incorreta! Formato: dd/MM/yyyy
          </HelperText>

          <Text style={styles.texto1}>Telefone</Text>
          <TextInput
            style={styles.caixaTexto}
            inputMode="tel"
            onChangeText={SetUsuTel}
            value={usuTel}
          />
          <HelperText style={styles.textoError} type="error" visible={usuTel == null}>
            O telefone está no formato incorreto!
          </HelperText>

          <Text style={styles.texto1}>E-mail</Text>
          <TextInput
            style={styles.caixaTexto}
            inputMode="email"
            onChangeText={SetUsuEmail}
            value={usuEmail}
          />
          <HelperText style={styles.textoError} type="error" visible={usuEmail == null}>
            O email está no formato incorreto!
          </HelperText>

          <Text style={styles.texto1}>Senha</Text>
          <TextInput
            style={styles.caixaTexto}
            secureTextEntry={true}
            onChangeText={SetUsuSenha}
            value={usuSenha}
          />
          <HelperText style={styles.textoError} type="error" visible={usuSenha == null}>
            Mínimo de 8 caracteres!
          </HelperText>

          <TouchableOpacity style={styles.botao} onPress={Cadastrar} disabled={hasErrors()}>
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cadastro;
