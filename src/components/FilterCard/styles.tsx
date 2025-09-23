import { StyleSheet } from "react-native";
import { secondaryColor } from "../../constants/palletColors";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 20,
    alignItems: "center",
    width: "100%",
    height: "90%",
    borderRadius: 40,
    borderColor: "gray",
    backgroundColor: "#cececeff",
  },

  horizontalLine: {
    width: "30%",
    marginBottom: 20,
    height: 3,
    borderRadius: 5,
    backgroundColor: secondaryColor,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold"
  },

  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  sectionContainerText: {
    fontSize: 18,
    fontWeight: "500",
  },

  locationSectionContainer: {
    width: "85%"
  },
  locationSectionInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  locationSectionInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    width: "45%",
    height: 40,
  },
  locationSectionTextInput: {
    fontSize: 16,
    width: "80%"
  }
});
