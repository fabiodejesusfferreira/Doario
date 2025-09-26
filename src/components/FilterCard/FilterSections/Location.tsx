import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Text,
  Keyboard,
} from "react-native";
import { estadosBrasil, cidadesBrasil } from "../database";
import { StyleSheet } from "react-native";
import { backgroundInputColor } from "../../../constants/palletColors";
import { globalStyles } from "../globalStyles";
import { useFilters } from "../../../contexts/FilterContext";
const iconSize = 35;

export const LocalizationSection = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const {
    filterState,
    updateLocalization,
    toggleEstadoDisplay,
    toggleCidadeDisplay,
  } = useFilters();

  const estadoInput = filterState.localization.estado;
  const setEstadoInput = (estado: string) =>
    updateLocalization(estado, filterState.localization.cidade);

  const [sugestoesEstado, setSugestoes] = useState<string[]>([]);
  const mostrarSugestoesEstado = filterState.displayEstado;
  const setMostrarSugestoesEstado = (newDisplay: boolean) =>
    toggleEstadoDisplay(newDisplay);

  const cidadeInput = filterState.localization.cidade;
  const setCidadeInput = (cidade: string) =>
    updateLocalization(filterState.localization.estado, cidade);

  const [sugestoesCidade, setSugestoesCidade] = useState<string[]>([]);
  const mostrarSugestoesCidade = filterState.displayCidade;
  const setMostrarSugestoesCidade = (newDisplay: boolean) =>
    toggleCidadeDisplay(newDisplay);

  function handleVisible() {
    setVisible(!visible);
  }

  const handleEstadoChange = (text: string) => {
    setEstadoInput(text); // Atualiza o texto do input
    if (text.length > 0) {
      const sugestoesFiltradas = estadosBrasil.filter((estado) =>
        estado.toLowerCase().startsWith(text.toLowerCase())
      );
      setSugestoes(sugestoesFiltradas);
      setMostrarSugestoesEstado(true); // Mostra a lista de sugestões
    } else {
      setSugestoes([]); // Limpa as sugestões se o input estiver vazio
      setMostrarSugestoesEstado(false); // Esconde a lista
    }
  };

  const handleSelecionarEstado = (estado: string) => {
    setEstadoInput(estado); // Preenche o input com o estado selecionado
    setSugestoes([]); // Limpa a lista de sugestões
    setMostrarSugestoesEstado(false); // Esconde a lista
    updateLocalization(estado, filterState.localization.cidade);
  };

  const handleCidadeChange = (cidade: string) => {
    updateLocalization(filterState.localization.estado, cidade);
    setCidadeInput(cidade);
    let listaDeCidadesParaBuscar: string[] = [];

    // Verifica se o estado digitado é um estado válido e existe no nosso objeto de cidades
    if (
      estadoInput &&
      cidadesBrasil[estadoInput as keyof typeof cidadesBrasil]
    ) {
      // Se sim, busca apenas nas cidades daquele estado
      listaDeCidadesParaBuscar =
        cidadesBrasil[estadoInput as keyof typeof cidadesBrasil];
    }

    if (cidade.length > 0) {
      const sugestoesFiltradas = listaDeCidadesParaBuscar.filter((city) =>
        city.toLowerCase().startsWith(cidade.toLowerCase())
      );
      setSugestoesCidade(sugestoesFiltradas);
      setMostrarSugestoesCidade(true);
    } else {
      setSugestoesCidade([]);
      setMostrarSugestoesCidade(false);
    }
  };

  const handleSelecionarCidade = (cidade: string) => {
    setCidadeInput(cidade);
    setSugestoesCidade([]);
    setMostrarSugestoesCidade(false);
  };

  const handleDeleteEstado = () => {
    setEstadoInput("");
    setMostrarSugestoesEstado(false);
  };

  const handleDeleteCidade = () => {
    setCidadeInput("");
    setMostrarSugestoesCidade(false);
  };

  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity
        onPress={handleVisible}
        style={globalStyles.sectionContainer}
      >
        <Text style={globalStyles.sectionContainerText}>Localização</Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </TouchableOpacity>

      {visible && (
        <View style={styles.sectionInputContainer}>
          {/* Campo de Estado com autocompletar */}
          <View style={styles.sectionInputSuggestionList}>
            <View style={styles.sectionInput}>
              <TextInput
                placeholder="Estado"
                placeholderTextColor={"black"}
                style={styles.sectionTextInput}
                value={estadoInput} // 5. Conecta o valor do input ao nosso estado
                onChangeText={handleEstadoChange} // 6. Chama a função de filtro ao digitar
              />
              <MaterialIcons
                name="highlight-remove"
                size={24}
                color="black"
                onPress={handleDeleteEstado}
              />
            </View>

            {/* 7. Lista de sugestões */}
            {mostrarSugestoesEstado && sugestoesEstado.length > 0 && (
              <ScrollView
                keyboardShouldPersistTaps="handled"
                nestedScrollEnabled={true}
                style={styles.sugestoesLista}
              >
                {sugestoesEstado.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      Keyboard.dismiss();
                      handleSelecionarEstado(item);
                    }}
                  >
                    <Text style={styles.sugestaoItem}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </View>

          <View style={styles.sectionInputSuggestionList}>
            <View style={styles.sectionInput}>
              <TextInput
                placeholder="Cidade"
                placeholderTextColor={"black"}
                style={styles.sectionTextInput}
                value={cidadeInput}
                onChangeText={handleCidadeChange}
              />
              <MaterialIcons
                name="highlight-remove"
                size={24}
                color="black"
                onPress={handleDeleteCidade}
              />
            </View>

            {/* Lista de sugestões para Cidade */}
            {mostrarSugestoesCidade && sugestoesCidade.length > 0 && (
              <ScrollView
                keyboardShouldPersistTaps="handled"
                nestedScrollEnabled={true}
                style={styles.sugestoesLista}
              >
                {sugestoesCidade.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      handleSelecionarCidade(item);
                      Keyboard.dismiss();
                    }}
                  >
                    <Text style={styles.sugestaoItem}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    width: "85%",
  },
  sectionInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: backgroundInputColor,
    borderRadius: 8,
    width: "100%",
    height: 40,
  },
  sectionInputSuggestionList: {
    width: "45%",
  },
  sectionTextInput: {
    fontSize: 16,
    width: "80%",
  },
  sugestoesLista: {
    maxHeight: 150, // Altura máxima para a lista não ocupar a tela toda
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderTopWidth: 0, // Remove a borda de cima para emendar com o input
    borderRadius: 8,
    backgroundColor: "white",
  },
  sugestaoItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
