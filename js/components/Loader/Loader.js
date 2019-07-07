import React from "react";
import { ActivityIndicator, Text,View } from "react-native";
import styles from "./styles";

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator />
      <Text>Loading...</Text>
    </View>
  );
};

export default Loader;
