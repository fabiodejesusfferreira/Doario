import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated } from "react-native";
import { AnimatedNumberProps } from "./props";

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ from, to, duration = 1000 }) => {
  const animatedValue = useRef(new Animated.Value(from)).current;
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const listenerId = animatedValue.addListener(({ value }) => {
      setDisplayValue(Math.floor(value));
    });

    Animated.timing(animatedValue, {
      toValue: to,
      duration,
      useNativeDriver: false,
    }).start();

    return () => {
      animatedValue.removeListener(listenerId);
    };
  }, [from, to, duration]);

  return (
    <View>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>{displayValue.toLocaleString("pt-BR")}</Text>
    </View>
  );
};

export default AnimatedNumber;