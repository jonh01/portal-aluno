import React, { useEffect } from "react";
import { Text, View, Platform, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { useNavigation, CommonActions } from "@react-navigation/native";
import {
  Appbar,
  Avatar,
  Button,
  Card,
  Divider,
  Menu,
  Modal,
  Portal,
  TextInput,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  atualizarSenha,
  buscarUsuario,
  deletarUsuario,
} from "../../services/usuario-service";
import { Usuario } from "../../model/Usuario";
import TextView from "../../components/TextView";
import { TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

const Personagem = () => {
  const navigation = useNavigation();

  const [visibleMenu, setVisibleMenu] = React.useState(false);
  const [visibleModal, setVisibleModal] = React.useState(false);

  const [usuLogado, setUsuLogado] = React.useState<Usuario>();

  const [senha, setSenha] = React.useState("");

  const modal = () => {
    setSenha("");
    setVisibleModal(!visibleModal);
  };

  const menu = () => setVisibleMenu(!visibleMenu);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@storage_Key");
        if (value != null) {
          const usu = await buscarUsuario(value);
          setUsuLogado(usu ?? "");
          console.log("date usu: ", usu.dt_nasc);
        }
      } catch (e) {
        console.log("erro usu: ", e);
      }
    };
    getData().catch((error) => console.log(error));
  }, []);

  const handleLogout = () => {
    AsyncStorage.removeItem("@storage_Key").catch(() =>
      console.log("Erro ao remover email")
    );
    menu();
    navigation.dispatch(
      CommonActions.navigate({
        name: "login",
        params: {},
      })
    );
  };

  const handleAlterPassword = () => {
    atualizarSenha(usuLogado!.email, senha)
      .then(() => {
        modal();
      })
      .catch((error) => console.log("Erro ao atualizar senha: ", error));
  };

  const handleExcludeAccount = () => {
    if (usuLogado != null) {
      deletarUsuario(usuLogado.id!)
        .then(() => handleLogout())
        .catch((error) => console.log("Erro ao excluir usuario: ", error));
    }
  };

  return (
    <SafeAreaView style={styles.containerGeral}>
      <StatusBar
        animated
        barStyle={"light-content"}
        backgroundColor="#813035"
      />

      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Perfil" color="#FFFFFF" />
        <Menu
          onDismiss={menu}
          visible={visibleMenu}
          anchor={
            <Appbar.Action icon={MORE_ICON} color="#000000" onPress={menu} />
          }
        >
          <Menu.Item onPress={handleExcludeAccount} title="Excluir Conta" />
          <Menu.Item onPress={handleLogout} title="Sair" />
        </Menu>
      </Appbar.Header>

      <View style={styles.container}>
        <Avatar.Icon style={styles.icon} size={140} icon="account" />
        <Text style={styles.textTitle}>{usuLogado?.nome}</Text>

        <Card style={styles.card}>
          <Card.Content>
            <TextView
              texto="Data de Nascimento: "
              value={usuLogado ? usuLogado.dt_nasc.toLocaleDateString() : ""}
            />
            <TextView
              texto="email: "
              value={usuLogado ? usuLogado!.email : ""}
            />
            <TextView
              texto="Telefone: "
              value={usuLogado ? usuLogado!.telefone : ""}
            />
            <TouchableOpacity style={styles.botao} onPress={modal}>
              <Text style={styles.botaoTexto}>Alterar Senha</Text>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      </View>
      <Portal>
        <Modal
          visible={visibleModal}
          onDismiss={modal}
          contentContainerStyle={styles.modal}
        >
          <Text style={styles.texto1}>Nova senha</Text>
          <TextInput
            style={styles.caixaTexto}
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.modalBotao}
            onPress={handleAlterPassword}
          >
            <Text style={styles.botaoTexto}>Alterar Senha</Text>
          </TouchableOpacity>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

export default Personagem;
