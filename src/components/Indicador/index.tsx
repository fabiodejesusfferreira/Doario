import React from "react";
import { View, Text } from "react-native";
import AnimatedNumber from "../../animations/AnimatedCounter/animation";
import * as props from "./props";

import { styles } from "./styles";

const renderInfo = ({ Icon, title, description }: props.IndicatorInfoProps) => (
  <View style={styles.containerInfo}>
    {Icon}
    <Text style={styles.infoTitle}>{title}</Text>
    <>
    <Text style={styles.infoDescription}>{description}</Text>
    </>
  </View>
);

const renderNumberInfo = ({
  number,
  numberText,
}: props.IndicatorNumberProps) => (
  <View style={styles.containerNumber}>
    <AnimatedNumber from={0} to={number} duration={4000} />
    <Text style={styles.numberDescription}>{numberText}</Text>
  </View>
);

export const Indicador: React.FC<props.IndicatorProps> = ({
  Icon,
  title,
  description,
  number,
  numberText,
}) => {
  return (
    <View style={styles.container}>
      {renderInfo({ Icon, title, description })}
      {renderNumberInfo({ number, numberText })}
    </View>
  );
};
