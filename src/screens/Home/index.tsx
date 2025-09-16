import React, { useRef, useState } from "react";
import { View, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { styles } from "./styles";
import { primaryColor } from "../../constants/palletColors";

import { Navigation } from "../../components/Navigation";
import { Banner } from "../../components/Banner";
import { Indicador } from "../../components/Indicador";
import { EncontreCampanhas } from "../../components/EncontreCampanhas";
import { Footer } from "../../components/Footer";

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

export default function Home() {
  const scrollViewRef = useRef<ScrollView>(null);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    toggleButtonBackToTop();
    scrollViewRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  const toggleButtonBackToTop = () => {
    setIsVisible(!isVisible);
  };

  const RenderButtonBackToTop = () => (
    <View style={styles.buttonBackToTop}>
      <Entypo name="chevron-up" size={40} color="white" onPress={scrollToTop} />
    </View>
  );

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const isAtTop = contentOffset.y <= 0;
    const isAtBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height;
    if (isVisible && isAtTop) toggleButtonBackToTop();
    else if (!isVisible && isAtBottom) toggleButtonBackToTop();
  };

  return (
    <>
      <View style={styles.navContainer}>
        <Navigation />
      </View>
      <View
        style={{
          borderBottomWidth: 0.5,
          borderBottomColor: "rgba(0, 0, 0, 0.06)",
        }}
      ></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={(event) => handleScroll(event)}
      >
        <View style={styles.container}>
          <Banner />

          {renderIndicadoresUltimasCampanhas()}
          {renderIndicadoresTipoSanguineo()}
          {renderIndicadoresHistorias()}

          <EncontreCampanhas />

          <View style={{ width: "100%", top: 0 }}>
            <Footer />
          </View>
        </View>
      </ScrollView>
      {isVisible ? <RenderButtonBackToTop /> : null}
    </>
  );
}
