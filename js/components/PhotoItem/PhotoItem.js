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
     <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PhotoItem;
