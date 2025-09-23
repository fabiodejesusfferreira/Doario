import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: height,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    marginVertical: 10,
  },
});
