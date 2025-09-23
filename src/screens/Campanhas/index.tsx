import { View, Text } from 'react-native';
import React from "react";
import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";
import { ToolbarCampanhas } from "../../components/ToolbarCampanhas";
import { ListagemCampanhas } from "../../components/ListagemCampanhas";
import { FilterCard } from "../../components/FilterCard";

export default function Campanhas() {
  return (
    <ScrollView style={{ flex: 1, }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Pesquisar por campanhas</Text>
        <ToolbarCampanhas />
        <ListagemCampanhas />
        <FilterCard />
      </View>
    </ScrollView>
  );
}
