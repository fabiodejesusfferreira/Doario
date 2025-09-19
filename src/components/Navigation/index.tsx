import React from "react";
import { View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import doarioLogo from "../../../assets/doario-logo-completa.png";
import { useNavigation } from "@react-navigation/native";
import { NavigationDrawerProps } from "../../types/drawer.navigation.types";

import { styles } from "./styles";
import { primaryColor } from "../../constants/palletColors";

export function Navigation() {
  const navigation = useNavigation<NavigationDrawerProps>();
  function openDrawer() {
    navigation.openDrawer();
  }

  return (
    <View style={styles.container}>
      <Entypo name="menu" size={40} color={primaryColor} onPress={openDrawer} />
      <Image
        style={[styles.image, { alignSelf: "center" }]}
        source={doarioLogo}
      />
    </View>
  );
}
