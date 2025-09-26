import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { styles } from "./styles";
import { useAnimation } from "../../contexts/AnimationProvider";

const SearchBar = () => {
  const [searchInputText, setSearch] = useState<string>("");
  function handleSearch(value: string) {
    setSearch(value);
  }

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        placeholder="Digite aqui..."
        value={searchInputText}
        onChange={(value) => handleSearch(value.nativeEvent.text)}
        style={styles.searchBarInput}
      />
      <TouchableOpacity style={styles.searchBarIconContainer}>
        <Entypo name="magnifying-glass" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const FilterButton = () => {
  const { toggleCard } = useAnimation();
  return (
    <TouchableOpacity style={styles.filterButtonContainer} onPress={toggleCard}>
      <MaterialIcons name="filter-list" size={28} color="white" />
    </TouchableOpacity>
  );
};

const SortBy = () => (
  <TouchableOpacity style={styles.sortByContainer}>
    <MaterialCommunityIcons name="sort" size={28} color="white" />
  </TouchableOpacity>
);

export function ToolbarCampanhas() {
  return (
    <>
      <View style={styles.container}>
        <SearchBar />
        <FilterButton />
        <SortBy />
      </View>
    </>
  );
}