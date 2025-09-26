import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FilterProvider } from "../../contexts/FilterContext";
import { AnimationProvider } from "../../contexts/AnimationProvider";
import { styles } from "./styles";
import { ToolbarCampanhas } from "../../components/ToolbarCampanhas";
import { ListagemCampanhas } from "../../components/ListagemCampanhas";
import { FilterCard } from "../../components/FilterCard";

export default function Campanhas() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FilterProvider>
        <AnimationProvider>
          <View style={styles.container}>
            <Text style={styles.title}>Pesquisar por campanhas</Text>
            <ToolbarCampanhas />
            <ListagemCampanhas />
            <FilterCard />
          </View>
        </AnimationProvider>
      </FilterProvider>
    </GestureHandlerRootView>
  );
}