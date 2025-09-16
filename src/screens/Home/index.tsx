import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Navigation } from "../../components/Navigation";
import { Banner } from "../../components/Banner";

export default function Home({ nav }: any) {
  console.log(nav);

  return (
    <View style={styles.container}>
      <View style={{ height: 40, width: "97%", alignItems: "center", margin: 10 }}>
        <Navigation />
      </View>
      
      <Banner />
    </View>
  );
}
