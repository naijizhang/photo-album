import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles";
import PhotoItem from "../../components/PhotoItem";
//import * as RNFS from 'react-native-fs';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.data
    };
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
  render() {
      //console.log(RNFS.CachesDirectoryPath);
    return (
      <View>
        <Text style={styles.heading}>---> Scroll ---></Text>
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
          renderItem={({ item }) => (
            <PhotoItem url={item.url} title={item.title} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={this.reorder}>
          <Text style={styles.buttonText}>Reorder the list</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
