import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationDrawerProps } from "../../types/drawer.navigation.types";

import { styles } from "./styles";

export function EncontreCampanhas() {
  const navigation = useNavigation<NavigationDrawerProps>();
  function navigateToCampanhas() {
    navigation.navigate("campanhas");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encontre campanhas perto de você</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToCampanhas}>
        <Text style={styles.buttonText}>Buscar campanhas</Text>
      </TouchableOpacity>
    </View>
  );
}
