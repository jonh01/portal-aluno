import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import {
  CriarDisciplina,
  buscarDisciplinasUser,
  deletarDisciplina,
} from "../../services/disciplina-service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Disciplina } from "../../model/Disciplina";
import { Usuario } from "../../model/Usuario";
import { buscarUsuario } from "../../services/usuario-service";
import DisciplinaComp from "../../components/DisciplinaComp";
import ConhecimentosModal from "../../components/ConhecimentosModal";
import { Modal, Portal } from "react-native-paper";

const listEmpy = () => <Text style={styles.textListEmpy}>Lista Vazia</Text>;

const DisciplinaView = () => {
  const [usuLogado, setUsuLogado] = useState<Usuario>();

  const [disNome, SetDescNome] = useState("");
  const [disId, SetDisId] = useState(0);
  const [disciplinas, SetDisciplinas] = useState<Disciplina[]>([]);

  const [visibleModal, setVisibleModal] = React.useState(false);

  const Openmodal = (id: number) => {
    SetDisId(id);
    setVisibleModal(!visibleModal);
  };

  const Closemodal = () => {
    setVisibleModal(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("@storage_Key");
        if (value != null) {
          const usu = await buscarUsuario(value);
          setUsuLogado(usu ?? "");
        }
      } catch (e) {
        console.log("erro usu: ", e);
        alertDefault("Usuario", "Erro ao buscar usuário");
      }
    };
    getData().catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (usuLogado) buscarDisc();
  }, [usuLogado]);

  const alertDefault = (titulo: string, mensagem: string) =>
    Alert.alert(titulo, mensagem, [
      {
        text: "Fechar",
        onPress: () => console.log("Alerta fechado"),
        style: "cancel",
      },
    ]);

  const handleDeleteDisc = (id: number) =>
    Alert.alert("Excluir Disciplina", "Deseja Mesmo Excluir Esta Disciplina?", [
      {
        text: "Não",
        onPress: () => console.log("Exclusão Abortada"),
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          deletarDisciplina(id)
            .then(() => {
              console.log("Disciplina excluída com sucesso");
              buscarDisc();
              alertDefault("Disciplina", "Disciplina excluída com sucesso");
            })
            .catch((error) => {
              console.log("Erro ao excluir disciplina: ", error);
              alertDefault("Disciplina", "Erro ao excluir disciplina");
            });
        },
      },
    ]);

  function Cadastrar() {
    const dis: Disciplina = { nome: disNome, usuario_id: usuLogado?.id! };
    CriarDisciplina(dis)
      .then(() => {
        console.log("Disciplina Criada!");
        buscarDisc();
      })
      .catch((error) => {
        console.log("Erro ao criar disciplina: ", error);
        alertDefault("Disciplina", "Erro ao criar disciplina");
      });
  }

  const buscarDisc = () => {
    buscarDisciplinasUser(usuLogado?.id!)
      .then((discs) => {
        SetDisciplinas(discs);
      })
      .catch((error) => {
        console.log("Erro ao buscar disciplinas: ", error);
        alertDefault("Disciplina", "Erro ao buscar disciplinas");
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/logo.png")} />
      </View>

      <View style={styles.article}>
        <Text style={styles.texto1}>Nome da Disciplina</Text>
        <TextInput
          style={styles.caixaTexto}
          onChangeText={SetDescNome}
          value={disNome}
        ></TextInput>
        <TouchableOpacity style={styles.botao} onPress={Cadastrar}>
          <Text style={styles.botaoTexto}>Criar Turma</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textoflat}>Lista de Disciplinas:</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={disciplinas}
        keyExtractor={(disc) => disc.id!.toString()}
        ListEmptyComponent={listEmpy}
        renderItem={({ item }) => (
          <DisciplinaComp
            data={item}
            onPress={() => Openmodal(item.id!)}
            onLongPress={() => handleDeleteDisc(item.id!)}
          />
        )}
      />
      <Portal>
        <Modal
          visible={visibleModal}
          onDismiss={Closemodal}
          dismissable={false}
          contentContainerStyle={styles.modal}
          children={<ConhecimentosModal disc_id={disId} onClose={Closemodal} />}
        />
      </Portal>
    </SafeAreaView>
  );
};

export default DisciplinaView;
