import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../constants/palletColors";
const patternSize = 38;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    overflow: "hidden",
    marginBottom: 20,
  },
  searchBarContainer: {
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: secondaryColor,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    height: patternSize,
    width: 220,
  },
  searchBarInput: {
    marginTop: 1,
    width: "85%",
    fontSize: 16,
    textAlignVertical: "center",
    height: 40,
  },
  searchBarIconContainer: {
    backgroundColor: secondaryColor,
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 35
  },
  filterButtonContainer: {
    backgroundColor: primaryColor,
    borderRadius: 6,
    width: patternSize,
    height: patternSize,
    justifyContent: "center",
    alignItems: "center",
  },
  sortByContainer: {
    backgroundColor: secondaryColor,
    borderRadius: 6,
    width: patternSize,
    height: patternSize,
    justifyContent: "center",
    alignItems: "center",
  },
});
