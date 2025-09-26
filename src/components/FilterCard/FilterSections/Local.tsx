import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { primaryColor } from "../../../constants/palletColors";
import { globalStyles } from "../globalStyles";
import { useFilters } from "../../../contexts/FilterContext";

const iconSize = 35;
const localSectionAndTypes = {
  "Fixos": [
    "Hemocentro",
    "Hospital",
    "Clínica de Hematologia",
    "Clínica de Hemoterapia",
    "UBS",
  ],
  "Móveis": ["Tenda", "Ônibus"],
  "Instituições Parceiras": [
    "Shopping",
    "Escola",
    "Empresa",
    "Igreja",
    "Clube",
  ],
};

type SectionType = "Fixos" | "Móveis" | "Instituições Parceiras";

const sections = Object.keys(localSectionAndTypes) as SectionType[];

export const LocalSection = () => {
  const { filterState, updateLocals } = useFilters();

  const toggleLocal = (section: string, local: string) => {
    const currentSectionLocals = filterState.locals.selectedLocals[section] || [];
    
    const newSelectedLocals = {
      ...filterState.locals.selectedLocals,
      [section]: currentSectionLocals.includes(local)
        ? currentSectionLocals.filter(item => item !== local)
        : [...currentSectionLocals, local]
    };
    
    updateLocals(newSelectedLocals);
  };

  const isLocalSelected = (section: string, local: string): boolean => {
    return filterState.locals.selectedLocals[section]?.includes(local) || false;
  };

  const [visible, setVisible] = useState<boolean>(false);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <View style={globalStyles.globalWidthContainer}>
      <TouchableOpacity
        onPress={handleVisible}
        style={globalStyles.sectionContainer}
      >
        <Text style={globalStyles.sectionContainerText}>Tipo de Local</Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </TouchableOpacity>
      {visible && (
        <View>
          {sections.map((section, index) => {
            return (
              <View key={section}>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionText}>{section}</Text>
                  <View style={styles.optionsContainer}>
                    {localSectionAndTypes[section].map((local, localIndex) => (
                      <TouchableOpacity
                        key={local}
                        style={styles.optionRowContainer}
                        onPress={() => toggleLocal(section, local)}
                      >
                        <Checkbox.Android
                          status={
                            isLocalSelected(section, local)
                              ? "checked"
                              : "unchecked"
                          }
                          color={primaryColor}
                          onPress={() => toggleLocal(section, local)}
                        />
                        <Text>{local}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 5,
  },
  sectionText: {
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 3,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 20,
    borderTopWidth: 1,
    borderTopColor: "gray",
  },
  optionRowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
