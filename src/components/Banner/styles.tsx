import { StyleSheet } from 'react-native';
import { primaryColor } from '../../constants/palletColors';

export const styles = StyleSheet.create({
  container: {
    width: "95%",
    height: 200,
    borderRadius: 12,
    flexDirection: "row",
    alignSelf: "center",
  },
  textNButton: {
    justifyContent: "space-between"
  },
  text: {
    fontWeight: "bold",
    fontSize: 28,
    padding: 12,
    color: "#fff"
  },
  button: {
    backgroundColor: "#fff",
    padding: 5,
    margin: 12,
    width: 170,
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: primaryColor,
    textAlign: "center"
  },
  imageContainer: {
    width: 130,
    height: "95%",
    alignSelf: "flex-end"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});