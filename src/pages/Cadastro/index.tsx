import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { styles } from "./styles";


const Cadastro = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.article}>
        <Text style={styles.texto1}>Nome:</Text>
        <TextInput style={styles.caixaTexto} />
        <Text style={styles.texto1}>Data de Nascimento</Text>
        <TextInput style={styles.caixaTexto} />
        <Text style={styles.texto1}>Telefone</Text>
        <TextInput style={styles.caixaTexto} keyboardType="numeric" />
        <Text style={styles.texto1}>E-mail</Text>
        <TextInput style={styles.caixaTexto} />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cadastro;
