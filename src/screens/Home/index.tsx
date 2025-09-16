import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Navigation } from "../../components/Navigation";
import { Banner } from "../../components/Banner";
import { Indicador } from "../../components/Indicador";
import { EncontreCampanhas } from "../../components/EncontreCampanhas";

import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const renderIndicadoresUltimasCampanhas = () => (
  <View style={styles.indicadoresContainer}>
    <Indicador
      Icon={<Entypo name="megaphone" size={28} color={primaryColor} />}
      title="Últimas campanhas"
      description="Encontre e participe das últimas campanhas."
      number={175}
      numberText="campanhas em todo Brasil"
    />
  </View>
);

const renderIndicadoresTipoSanguineo = () => (
  <View style={styles.indicadoresContainer}>
    <Indicador
      Icon={
        <MaterialCommunityIcons
          name="blood-bag"
          size={28}
          color={primaryColor}
        />
      }
      title="Descubra seu tipo sanguíneo"
      description="Faça o teste para descobrir seu tipo."
      number={10567}
      numberText="doadores cadastrados"
    />
  </View>
);

const renderIndicadoresHistorias = () => (
  <View style={styles.indicadoresContainer}>
    <Indicador
      Icon={
        <FontAwesome5
          name="hand-holding-heart"
          size={28}
          color={primaryColor}
        />
      }
      title="Histórias de quem foi salvo"
      description="Veja vídeos de pessoas que foram salvas por conta da doação"
      number={37235}
      numberText="vidas"
    />
  </View>
);


  return (
    <View style={styles.container}>
      <View style={{ height: 40, width: "97%", alignItems: "center", margin: 10 }}>
        <Navigation />
      </View>
      
      <Banner />
    </View>
        <View style={styles.container}>
          <Banner />

          {renderIndicadoresUltimasCampanhas()}
          {renderIndicadoresTipoSanguineo()}
          {renderIndicadoresHistorias()}

          <EncontreCampanhas />

  );
}
