import { StyleSheet, Dimensions } from "react-native";
import { blue } from "ansi-colors";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  heading: {
    marginTop: 0.3 * height,
    marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  list: {
    height: 200
  },
  image: {
    width: 200,
    height: 200
  },
  button: {
    backgroundColor: "#79b6cf",
    width: 0.5 * width,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttonText: {
    color: "#fff"
  }
});
export default styles;
