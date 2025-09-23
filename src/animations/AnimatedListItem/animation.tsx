import React, { useEffect } from "react";
import { Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";

type AnimatedListItemProps = {
  item: string;
  index: number;
};

import { styles } from "./styles";

export const AnimatedListItem: React.FC<AnimatedListItemProps> = ({
  item,
  index,
}) => {
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    const delay = index * 100;

    opacity.value = withDelay(delay, withTiming(1, { duration: 500 }));
    translateY.value = withDelay(delay, withTiming(0, { duration: 500 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, animatedStyle]}>
      <Text style={styles.itemText}>{item}</Text>
    </Animated.View>
  );
};
