import { StyleSheet } from "react-native";
import { footerBackgroundColor, footerSecondaryColor } from "../../constants/palletColors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: footerBackgroundColor
  },
});

export const stylesHeader = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center"
  },
  imageContainer: {
    width: 200,
    height: 41,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    color: "#fff"
  }
});

export const stylesLinks = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  sectionText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff"
  },
  itemText: {
    marginVertical: 8,
    fontSize: 15,
    textDecorationLine: "underline",
    color: footerSecondaryColor,
  },
});

export const stylesCredits = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 50
  },
  verticalLine: {
    marginVertical: 20,
    backgroundColor: footerSecondaryColor,
    height: 1,
    width: "88%"
  },
  textCopyRight: {
    color: footerSecondaryColor
  },
  credits: {
    color: footerSecondaryColor
  }
});
