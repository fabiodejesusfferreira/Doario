import { View, Text } from 'react-native';
import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";

export default function Campanhas() {
  return (
    <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Pesquisar por campanhas</Text>
      </View>
    </ScrollView>
  );
}
