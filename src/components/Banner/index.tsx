import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import woman from "../../../assets/woman.png";
import { styles } from "./styles";
import { primaryColor } from "../../constants/palletColors";
import { LinearGradient } from "expo-linear-gradient";

export function Banner() {
  return (
    <LinearGradient
      style={styles.container}
      colors={[primaryColor, "#96252d"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
    >
      <View style={styles.textNButton}>
        <Text style={styles.text}>Doe hoje,{"\n"}compartilhe{"\n"}vida.</Text>

        <TouchableOpacity style={styles.button}> 
          <Text style={styles.buttonText}>Agenda sua doação</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={woman} style={styles.image} />
      </View>
    </LinearGradient>
  );
}
