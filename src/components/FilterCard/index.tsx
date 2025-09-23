import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { secondaryColor } from "../../constants/palletColors";

const iconSize = 35;

const HorizontalLine = () => <View style={styles.horizontalLine} />;

const Divisor = () => (
  <View
    style={{
      width: "85%",
      marginVertical: 20,
      height: 1,
      backgroundColor: secondaryColor,
    }}
  />
);

const LocalizationSection = () => {
  const [visible, setVisible] = useState<boolean>(true);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <View style={styles.locationSectionContainer}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionContainerText}>Localização</Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </View>

      {visible ? (
        <View style={styles.locationSectionInputContainer}>
          <View style={styles.locationSectionInput}>
            <TextInput
              placeholder="Estado"
              placeholderTextColor={"black"}
              style={styles.locationSectionTextInput}
            />
            <Ionicons name="caret-down-outline" size={24} color="black" />
          </View>

          <View style={styles.locationSectionInput}>
            <TextInput
              placeholder="Cidade"
              placeholderTextColor={"black"}
              style={styles.locationSectionTextInput}
            />
            <Ionicons name="caret-down-outline" size={24} color="black" />
          </View>
        </View>
      ) : null}
    </View>
  );
};

const DateSection = () => {
  const [visible, setVisible] = useState<boolean>(true);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <View style={styles.locationSectionContainer}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionContainerText}>Datas</Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </View>
      <View></View>
    </View>
  );
};

const StatusSection = () => {
  const [visible, setVisible] = useState<boolean>(true);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <View style={styles.locationSectionContainer}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionContainerText}>Status da campanha</Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </View>
      <View></View>
    </View>
  );
};

const LocalSection = () => {
  const [visible, setVisible] = useState<boolean>(true);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <View style={styles.locationSectionContainer}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionContainerText}>Tipo de Local</Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </View>
      <View></View>
    </View>
  );
};

const PrioritySection = () => {
  const [visible, setVisible] = useState<boolean>(true);

  function handleVisible() {
    setVisible(!visible);
  }

  return (
    <View style={styles.locationSectionContainer}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionContainerText}>
          Prioridade de tipo sanguíneo
        </Text>
        <Ionicons
          name={visible ? "caret-up-outline" : "caret-down-outline"}
          size={iconSize}
          color="black"
          onPress={handleVisible}
        />
      </View>
      <View></View>
    </View>
  );
};

export function FilterCard() {
  return (
    <View style={styles.container}>
      <HorizontalLine />
      <Text style={styles.title}>Filtros</Text>
      <Divisor />
      <LocalizationSection />
      <Divisor />
      <DateSection />
      <Divisor />
      <StatusSection />
      <Divisor />
      <LocalSection />
      <Divisor />
      <PrioritySection />
    </View>
  );
}
