import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useAnimatedReaction,
} from "react-native-reanimated";
import { styles } from "./styles";
import { useFilters } from "../../contexts/FilterContext";
import { useAnimation } from "../../contexts/AnimationProvider";

import { LocalizationSection } from "./FilterSections/Location";
import { DateSection } from "./FilterSections/Date";
import { StatusSection } from "./FilterSections/Status";
import { LocalSection } from "./FilterSections/Local";
import { PrioritySection } from "./FilterSections/Priority";

// --- Constantes de Animação ---
const ANIMATION_DURATION = 250;
const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const CARD_HEIGHT = SCREEN_HEIGHT * 0.9;
const CARD_VISIBLE_Y = SCREEN_HEIGHT - CARD_HEIGHT;
const CARD_HIDDEN_Y = SCREEN_HEIGHT;
const DISMISS_THRESHOLD = CARD_VISIBLE_Y + SCREEN_HEIGHT * 0.1;

// --- Componentes (Botões e Divisores) ---
const HorizontalLine = () => <View style={styles.horizontalLine} />;
const Divisor = () => <View style={styles.divisor} />;

const ConfirmButton = () => {
  const { filterState, hasActiveFilters } = useFilters();
  const handleConfirm = () => {
    console.log("Filtros aplicados:", filterState);
    alert("Filtros aplicados com sucesso!");
  };

  return (
    <TouchableOpacity
      style={[
        styles.confirmButtonContainer,
        !hasActiveFilters() && styles.confirmButtonDisabled,
      ]}
      disabled={!hasActiveFilters()}
      onPress={handleConfirm}
    >
      <Text style={styles.confirmButtonText}>Aplicar</Text>
    </TouchableOpacity>
  );
};

const ClearButton = () => {
  const {
    clearAllFilters,
    hasActiveFilters,
    toggleEstadoDisplay,
    toggleCidadeDisplay,
  } = useFilters();

  return (
    <TouchableOpacity
      style={styles.clearButtonContainer}
      onPress={() => {
        clearAllFilters();
        toggleEstadoDisplay(false);
        toggleCidadeDisplay(false);
      }}
      disabled={!hasActiveFilters()}
    >
      <Text
        style={[
          styles.clearButtonText,
          !hasActiveFilters() && styles.clearButtonContainerDisable,
        ]}
      >
        Limpar filtros
      </Text>
    </TouchableOpacity>
  );
};

// --- Componente Principal ---
export function FilterCard() {
  const { cardVisibility } = useAnimation();
  const translateY = useSharedValue(CARD_HIDDEN_Y);
  const startY = useSharedValue(0);

  const animationConfig = {
    duration: ANIMATION_DURATION,
    easing: Easing.linear,
  };

  // Reage à mudança de visibilidade para animar o card
  useAnimatedReaction(
    () => cardVisibility.value,
    (currentValue) => {
      translateY.value = withTiming(
        currentValue === 1 ? CARD_VISIBLE_Y : CARD_HIDDEN_Y,
        animationConfig
      );
    },
    [cardVisibility]
  );

  // Gesto de arrastar (pan)
  const panGesture = Gesture.Pan()
    .onStart(() => {
      "worklet";
      startY.value = translateY.value;
    })
    .onUpdate((event) => {
      "worklet";
      translateY.value = Math.max(
        startY.value + event.translationY,
        CARD_VISIBLE_Y
      );
    })
    .onEnd(() => {
      "worklet";
      if (translateY.value > DISMISS_THRESHOLD) {
        cardVisibility.value = 0;
      } else {
        translateY.value = withTiming(CARD_VISIBLE_Y, animationConfig);
      }
    });

  // Estilo animado para mover o card
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Animated.View style={[animatedStyles.cardContainer, animatedStyle]}>
      <GestureDetector gesture={panGesture}>
        <View style={animatedStyles.handleArea}>
          <HorizontalLine />
        </View>
      </GestureDetector>

      <ScrollView
        overScrollMode="never"
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
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
          <View style={styles.buttonsContainer}>
            <ConfirmButton />
            <ClearButton />
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );
}

// --- Estilos ---
const animatedStyles = StyleSheet.create({
  cardContainer: {
    height: CARD_HEIGHT,
    width: "100%",
    backgroundColor: "#cececeff",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  handleArea: {
    paddingVertical: 15,
    alignItems: "center",
  },
});
