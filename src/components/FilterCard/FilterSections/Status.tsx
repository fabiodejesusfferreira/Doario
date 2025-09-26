import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Chip } from "react-native-paper";
import { globalStyles } from "../globalStyles";
import {
  backgroundInputColor,
  primaryColor,
} from "../../../constants/palletColors";
import { useFilters } from "../../../contexts/FilterContext";

const iconSize = 35;

export const StatusSection = () => {
  const statusCampanha = ["Ativa", "Programada", "Finalizada", "Cancelada"];

  const { filterState, updateStatus } = useFilters();

  let selectedStatusCampanhas = filterState.status.selectedStatusCampanhas

  const toggleStatusCampanha = (status: string) => {
    const newStatus = selectedStatusCampanhas.includes(status)
      ? selectedStatusCampanhas.filter(item => item !== status)
      : [...selectedStatusCampanhas, status];
    
    updateStatus(newStatus);
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
          Status da campanha
        </Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </TouchableOpacity>
      {visible && (
        <View style={styles.rowOptionContainer}>
          {statusCampanha.map((status, index) => {
            const isIncluded = selectedStatusCampanhas.includes(status);

            return (
              <Chip
                key={`${status}-${index}`}
                selected={isIncluded}
                showSelectedCheck={false}
                onPress={() => toggleStatusCampanha(status)}
                style={
                  isIncluded
                    ? styles.rowOptionChipSelected
                    : styles.rowOptionChip
                }
              >
                <Text style={{ color: isIncluded ? "white" : "black" }}>
                  {status}
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
