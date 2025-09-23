import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function ListagemCampanhas() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>Utilize os filtros para pesquisar por campanhas!</Text>
      </TouchableOpacity>
    </View>
  );
}
