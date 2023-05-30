import React, { useEffect } from "react";
import { useState } from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import {
  CriarDisciplina,
  buscarDisciplinasUser,
} from "../../services/disciplina-service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Disciplina } from "../../model/Disciplina";
import { ScrollView } from "react-native";
import { Usuario } from "../../model/Usuario";
import { buscarUsuario } from "../../services/usuario-service";
import { FlatList } from "react-native";
import DisciplinaComp from "../../components/DisciplinaComp";
import { Modal, Portal } from "react-native-paper";

const DisciplinaView = () => {
  const [usuLogado, setUsuLogado] = useState<Usuario>();

  const [disNome, SetDescNome] = useState("");
  const [disciplinas, SetDisciplinas] = useState<Disciplina[]>([]);

  const [visibleModal, setVisibleModal] = React.useState(false);

  const modal = () => {
    setVisibleModal(!visibleModal);
  };

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

  function Cadastrar() {
    const dis: Disciplina = { nome: disNome, usuario_id: usuLogado?.id! };
    CriarDisciplina(dis)
      .then(() => {
        console.log("Disciplina Criada!");
        buscarDisc();
      })
      .catch((error) => console.log("Erro ao criar disciplina: ", error));
  }

  const buscarDisc = () => {
    buscarDisciplinasUser(usuLogado?.id!)
      .then((discs) => {
        SetDisciplinas(discs);
      })
      .catch((error) => {
        console.log("Erro ao buscar disciplinas: ", error);
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
        renderItem={({ item }) => (
          <DisciplinaComp 
            data={item} 
            onPress={() => modal()}
          />
        )}
      />

      <Portal>
        <Modal
          visible={visibleModal}
          onDismiss={modal}
          contentContainerStyle={styles.modal}
        >
          <Text style={styles.texto1}>modal</Text>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

export default DisciplinaView;
