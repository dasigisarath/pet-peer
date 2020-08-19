import React, { Component } from 'react';
import axios from 'axios';


function axiosHoc(WrapperComponent, input) {
  return class HOC extends Component {
    constructor() {
      super();
      this.state = {
        pets: [

        ]
      }
    }
    componentDidMount() {
      console.log(input.url);
      axios.get(input.url, {}).then((response) => {
        console.log(response.data);
        this.setState({ pets: response.data });
      }).catch((error) => {
        console.log(error);
      })
    }
  render() {
    return (
      <WrapperComponent pets={this.state.pets} />

    )
  }
}
}

export default axiosHoc;