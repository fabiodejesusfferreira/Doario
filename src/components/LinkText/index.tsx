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
  childrenStyle: any
}

export default function LinkText({ url, children, childrenStyle }: LinkTextType) {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL(url);

    supported
      ? await Linking.openURL(url)
      : Alert.alert(`ERRO: Erro ao abrir esta URL: ${url}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[childrenStyle, { textDecorationLine: "underline" }]}>{children}</Text>
    </TouchableOpacity>
  );
}
