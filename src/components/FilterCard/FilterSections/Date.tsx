import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";
import { globalStyles } from "../globalStyles";
import { useState } from "react";
import {
  backgroundInputColor,
  primaryColor,
} from "../../../constants/palletColors";
import { useFilters } from "../../../contexts/FilterContext";

const iconSize = 35;

export const DateSection = () => {
  const dateTypes = ["Hoje", "Esta semana", "Este mês", "Este ano"];

  const { filterState, updateDates } = useFilters();

  const selectedDateType = filterState.dates.selectedDateType

  const handleDateTypeSelect = (dateType: string) => {
    if (dateType === selectedDateType) updateDates("");
    else updateDates(dateType);
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
        <Text style={globalStyles.sectionContainerText}>Datas</Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </TouchableOpacity>
      {visible && (
        <View style={styles.rowOptionContainer}>
          {dateTypes.map((dateType, index) => {
            const isSelected = selectedDateType == dateType;

            return (
              <Chip
                key={`${dateType}-${index}`}
                showSelectedCheck={false}
                onPress={() => handleDateTypeSelect(dateType)}
                style={
                  isSelected
                    ? styles.rowOptionChipSelected
                    : styles.rowOptionChip
                }
                selected={isSelected}
              >
                <Text style={{ color: isSelected ? "white" : "black" }}>
                  {dateType}
                </Text>
              </Chip>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rowOptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },
  rowOptionChip: {
    backgroundColor: backgroundInputColor,
  },
  rowOptionChipSelected: {
    backgroundColor: primaryColor,
  },
});
