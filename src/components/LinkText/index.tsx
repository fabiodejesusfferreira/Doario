import React from "react";
import {
  TouchableOpacity,
  Linking,
  Text,
  Alert,
} from "react-native";

interface LinkTextType {
  url: string;
  children: React.ReactNode;
}

export default function LinkText({ url, children }: LinkTextType) {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);

    supported
      ? await Linking.openURL(url)
      : Alert.alert(`ERRO: Erro ao abrir esta URL: ${url}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={{ textDecorationLine: "underline" }}>{children}</Text>
    </TouchableOpacity>
  );
}
