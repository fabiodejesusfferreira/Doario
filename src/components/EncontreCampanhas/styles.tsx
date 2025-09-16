import { StyleSheet } from "react-native";
import { primaryColor } from "../../constants/palletColors";

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 30
  },
  button: {
    backgroundColor: primaryColor,
    width: 250,
    marginVertical: 30,
    borderRadius: 12
  },
  buttonText: {
    fontWeight: "500",
    textAlign: "center",
    color: "#fff",
    padding: 10,
  },
});
