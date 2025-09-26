import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAnimation } from "../../contexts/AnimationProvider";

import { styles } from "./styles";

export function ListagemCampanhas() {
  const { toggleCard } = useAnimation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCard} style={styles.textContainer}>
        <Text style={styles.text}>
          Utilize os filtros para pesquisar por campanhas!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
