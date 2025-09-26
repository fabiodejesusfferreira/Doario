import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { primaryColor } from "../../../constants/palletColors";
import { globalStyles } from "../globalStyles";
import { useFilters } from "../../../contexts/FilterContext";
const iconSize = 35;

export const PrioritySection = () => {
  const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "O+", "O-"];
  const { filterState, updatePriority } = useFilters();

  const selectedBloodType = filterState.priority.selectedBloodType;

  const handleBloodTypeSelect = (bloodType: string) => {
    updatePriority(bloodType);
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
        <Text style={globalStyles.sectionContainerText}>
          Prioridade de tipo sanguíneo
        </Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </TouchableOpacity>
      {visible && (
        <View style={styles.container}>
          {bloodTypes.map((bloodType, index) => {
            return (
              <TouchableOpacity
                style={styles.optionRow}
                key={bloodType}
                onPress={() => handleBloodTypeSelect(bloodType)}
              >
                <RadioButton.Android
                  value={bloodType}
                  status={
                    selectedBloodType === bloodType ? "checked" : "unchecked"
                  }
                  onPress={() => handleBloodTypeSelect(bloodType)}
                  color={primaryColor}
                />
                <Text style={styles.optionText}>{bloodType}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: 30,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 14,
  },
});
