import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Platform,ActivityIndicator } from "react-native";
import styles from "./styles";
import PhotoItem from "../../components/PhotoItem";
let RNFS = require("react-native-fs");
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.data,
      cachedItems: [],
      isLoadingCache: true
    };
    this.getCachedItems();
  }

  reorder = () => {
    const currentArr = this.state.dataSource;
    this.randomizeArray(currentArr, currentArr.length);
    this.setState({
      dataSource: currentArr
    });
  };
  randomizeArray = (array, n) => {
    if (n <= 1) {
      return;
    }
    const index = Math.floor(Math.random() * n);
    const tmp = array[n - 1];
    array[n - 1] = array[index];
    array[index] = tmp;
    this.randomizeArray(array, n - 1);
  };
  getCachedItems = () => {
    RNFS.readdir(RNFS.CachesDirectoryPath)
      .then(result => {
        return this.setState({ cachedItems: result, isLoadingCache: false });
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };
  downloadFile = (url, id) => {
    const extension = Platform.OS === "android" ? "file://" : "";
    const path = `${extension}${RNFS.CachesDirectoryPath}/${id}.png`;
    RNFS.downloadFile({ fromUrl: url, toFile: path })
      .promise.then(res => this.state.cachedItems.push(`${id}.png`))
      .then(() => {
        console.log("Downloaded a new image.");
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };
  render() {
    const extension = Platform.OS === "android" ? "file://" : "";
    const { cachedItems, isLoadingCache } = this.state;
    console.log("cachedItems", cachedItems);
    return (
      <View>
        <Text style={styles.heading}>---> Scroll ---></Text>
        {isLoadingCache ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator />
            <Text>Reading cache...</Text>
          </View>
        ) : (
          <FlatList
            style={styles.list}
            horizontal={true}
            data={this.state.dataSource}
            initialNumToRender={20}
            maxToRenderPerBatch={20}
            updateCellsBatchingPeriod={30}
            getItemLayout={(data, index) => ({
              length: 200,
              offset: 200 * index,
              index
            })}
            renderItem={({ item }) => {
              let path = "";
              cachedItems.includes(`${item.id}.png`)
                ? (path = `${extension}${RNFS.CachesDirectoryPath}/${
                    item.id
                  }.png`)
                : (path = item.url);
              path === item.url ? this.downloadFile(item.url, item.id) : null;
              return <PhotoItem url={path} title={item.title} />;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        )}

        <TouchableOpacity style={styles.button} onPress={this.reorder}>
          <Text style={styles.buttonText}>Reorder the list</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
