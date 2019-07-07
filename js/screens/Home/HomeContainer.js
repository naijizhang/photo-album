import React, { Component } from "react";
import Home from "./Home";
import Loader from "../../components/Loader";
export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    };
  }

  componentDidMount() {
    return fetch("http://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(necessaryData =>
        necessaryData.map(item => ({
          id: item.id,
          title: item.title,
          url: item.url
        }))
      )
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }
    return <Home data={this.state.dataSource} />;
  }
}
