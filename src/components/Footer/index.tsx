import React from "react";
import { View, Image, Text, SectionList } from "react-native";
import DoarioLogoRodape from "../../../assets/doário-logo-rodape.png";
import { DATA_LEGAL, DATA_LINKS_UTEIS } from "./data";

import { styles, stylesHeader, stylesLinks, stylesCredits } from "./styles";

const Header = () => (
  <View style={stylesHeader.container}>
    <View style={stylesHeader.imageContainer}>
      <Image source={DoarioLogoRodape} style={stylesHeader.image} />
    </View>
    <Text style={stylesHeader.text}>Conectando doadores e vidas salvas.</Text>
  </View>
);

const Links = () => (
  <View style={stylesLinks.container}>
    <SectionList
      style={{ width: "50%", marginLeft: 20,  }}
      inverted={true}
      scrollEnabled={false}
      sections={[{ title: "Links úteis", data: DATA_LINKS_UTEIS }]}
      renderSectionFooter={({ section }) => (
        <Text style={stylesLinks.sectionText}>{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <Text style={stylesLinks.itemText}>{item}</Text>
      )}
      keyExtractor={(item) => `links-${item}`}
    />

    <SectionList
      style={{  width: "50%", marginRight: 20 }}
      inverted={true}
      scrollEnabled={false}
      sections={[{ title: "Legal e Contrato", data: DATA_LEGAL }]}
      renderSectionFooter={({ section }) => (
        <Text style={stylesLinks.sectionText}>{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <Text style={stylesLinks.itemText}>{item}</Text>
      )}
      keyExtractor={(item) => `links-${item}`}
    />
  </View>
);

const Credits = () => (
  <View style={stylesCredits.container}>
    <View style={stylesCredits.verticalLine}></View>
    <Text style={stylesCredits.textCopyRight}>© 2025 Doário+. Todos os direitos reservados.</Text>
    <Text style={stylesCredits.credits}>Site desenvolvido por <Text style={{ textDecorationLine:"underline" }}>@dejesusdev</Text></Text>
  </View>
);

export function Footer() {
  return (
    <View style={styles.container}>
      <Header />
      <Links />
      <Credits />
    </View>
  );
}
