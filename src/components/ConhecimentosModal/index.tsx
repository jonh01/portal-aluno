import React, { useEffect, useState } from "react";
import { Alert, FlatList, ScrollView, View } from "react-native";

import { styles } from "./styles";
import { Button, IconButton, Text, TextInput } from "react-native-paper";
import { Conceito } from "../../model/conceito";
import {
  buscarConceitosDisci,
  criarConceito,
  deletarConceito,
} from "../../services/conceito-service";
import ConhecimentoComp from "../ConhecimentoComp";

interface Props {
  disc_id: number;
  onClose: () => void;
}
const listEmpy = () => <Text style={styles.textListEmpy}>Lista Vazia</Text>;

const ConhecimentosModal = ({ disc_id, onClose }: Props) => {
  const [conNome, setConNome] = useState("");
  const [conEmail, setConEmail] = useState("");
  const [conAv1, setConAv1] = useState("");
  const [conAv2, setConAv2] = useState("");

  const [conceitos, SetConceitos] = useState<Conceito[]>([]);

  useEffect(() => {
    buscarConceitos();
  }, []);

  const alertDefault = (titulo: string, mensagem: string) =>
    Alert.alert(titulo, mensagem, [
      {
        text: "Fechar",
        onPress: () => console.log("Alerta fechado"),
        style: "cancel",
      },
    ]);

  const handleDeleteCon = (id: number) =>
    Alert.alert("Excluir Conceito", "Deseja Mesmo Excluir Este Conceito?", [
      {
        text: "Não",
        onPress: () => console.log("Exclusão Abortada"),
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          deletarConceito(id)
            .then(() => {
              console.log("Conceito excluído com sucesso");
              buscarConceitos();
              alertDefault("Conceito", "Conceito excluído com sucesso");
            })
            .catch((error) => {
              console.log("Erro ao excluir conceito: ", error);
              alertDefault("Conceito", "Erro ao excluir conceito");
            });
        },
      },
    ]);

  const buscarConceitos = () => {
    buscarConceitosDisci(disc_id)
      .then((conceitos) => {
        SetConceitos(conceitos);
      })
      .catch((error) => {
        console.log("Erro ao buscar conceitos: ", error);
        alertDefault("Conceitos", "Erro ao buscar conceitos");
      });
  };

  const cadastrar = () => {
    const con: Conceito = {
      nome: conNome,
      email: conEmail,
      av1: parseFloat(conAv1),
      av2: parseFloat(conAv2),
      disciplina_id: disc_id,
    };
    criarConceito(con)
      .then((id) => {
        console.log("Disciplina Criada!");
        alertDefault("Conceito", `Conceito Criado! Id: ${id}`);
        buscarConceitos();
      })
      .catch((error) => {
        console.log("Erro ao criar conceito: ", error);
        alertDefault("Conceito", "Erro ao criar conceito");
      });
  };

  return (
    <View>
      <IconButton
        style={styles.buttonExit}
        icon="close"
        iconColor={"#FF0000"}
        size={30}
        onPress={onClose}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="none"
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.form}>
          <Text style={styles.texto}>Nome do Aluno:</Text>
          <TextInput
            style={styles.caixaTexto}
            onChangeText={setConNome}
            value={conNome}
          ></TextInput>
          <Text style={styles.texto}>Email do Aluno:</Text>
          <TextInput
            style={styles.caixaTexto}
            onChangeText={setConEmail}
            value={conEmail}
          ></TextInput>
          <Text style={styles.texto}>Av1:</Text>
          <TextInput
            style={styles.caixaTexto}
            onChangeText={setConAv1}
            value={conAv1}
          ></TextInput>
          <Text style={styles.texto}>Av2:</Text>
          <TextInput
            style={styles.caixaTexto}
            onChangeText={setConAv2}
            value={conAv2}
          ></TextInput>
          <Button
            icon="send"
            mode="contained"
            buttonColor="#813035"
            style={styles.button}
            onPress={cadastrar}
          >
            Salvar
          </Button>
        </View>
      </ScrollView>
      <Text style={styles.texto1}>Lista de Conceitos</Text>

      <View style={styles.containerFlatHeader}>
        <Text style={styles.textFlatHeader}> Nome </Text>
        <Text style={styles.textFlatHeader}> Email </Text>
        <Text style={styles.textFlatHeader}> AV1 </Text>
        <Text style={styles.textFlatHeader}> Av2 </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={conceitos}
        keyExtractor={(disc) => disc.id!.toString()}
        ListEmptyComponent={listEmpy}
        renderItem={({ item }) => (
          <ConhecimentoComp
            data={item}
            onLongPress={() => handleDeleteCon(item.id!)}
          />
        )}
      />
    </View>
  );
};

export default ConhecimentosModal;
