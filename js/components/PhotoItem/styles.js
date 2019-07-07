import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  outsideContainer: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    padding: 5,
    transform: [{ rotate: "45deg" }],
    backgroundColor: "#fff",
    borderWidth: 5,
    borderColor: "#bbb",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { height: 5, width: 0 }
  }
});
export default styles;
