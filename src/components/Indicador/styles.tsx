import { StyleSheet } from "react-native";
import { primaryColor, shadowBoxColor } from "../../constants/palletColors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  containerInfo: {
    boxShadow: `1px 1px 2px ${shadowBoxColor}`,
    borderWidth: 2,
    borderColor: primaryColor,
    borderRadius: 12,
    alignItems: "center",
    padding: 7,
    width: "52%",
  },
  containerNumber: {
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    width: "44%",
  },
  infoTitle: {
    color: primaryColor,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  infoDescription: {
    flex: 1,
    fontSize: 12,
    overflow: "hidden",
    textAlignVertical: "center",
    textAlign: "center",
  },
  numberDescription: {
    textAlign: "center",
    fontSize: 16,
  },
});
