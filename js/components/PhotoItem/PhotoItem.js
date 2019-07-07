import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
const PhotoItem = ({ url, title }) => {
  return (
    <View>
      <Image
        source={{
          uri: url,
          cache: "force-cache"
        }}
        style={styles.image}
      />
      <View style={styles.outsideContainer}>
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
      </View>
    </View>
  );
};

export default PhotoItem;
