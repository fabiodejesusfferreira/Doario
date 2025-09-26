import { StyleSheet } from "react-native";
import { primaryColor, secondaryColor } from "../../constants/palletColors";

export const styles = StyleSheet.create({
  scrollViewContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "90%",
  },
  container: {
    paddingBottom: 80,
    paddingTop: 20,
    alignItems: "center",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
    fontWeight: "bold",
  },
  divisor: {
    width: "85%",
    marginVertical: 20,
    height: 1,
    backgroundColor: secondaryColor,
  },

  buttonsContainer: {
    width: "85%",
    marginTop: 40,
  },
  confirmButtonContainer: {
    height: 50,
    backgroundColor: primaryColor,
    borderRadius: 8,
    justifyContent: "center",
    boxShadow: "0px 0px 3px #000000be",
  },
  confirmButtonDisabled: {
    opacity: 0.4,
    boxShadow: "0px 0px 3px #00000045",
  },
  confirmButtonText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  clearButtonContainer: {
    marginTop: 10,
    height: 50,
    justifyContent: "center",
  },
  clearButtonContainerDisable: {
    opacity: 0.4
  },
  clearButtonText: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});
