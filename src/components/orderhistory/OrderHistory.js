import React, { Component } from 'react';
import '../register/registerstyles.css'
import Displayorders from '../orderhistory/Displayorders';
import axiosHoc from '../Hoc/axiosHoc';


class OrderHistory extends Component {

  render() {

    return (<React.Fragment>
      <h1>OrderHistory</h1>
      <table>
        <thead>
          <tr><td>Name</td>
            <td>age</td>
            <td>Breed</td>
            <td>price</td>
            <td>Description</td>
            <td>address</td>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map((order, i) => {
              return <Displayorders key={i} orderdata={order} />
            })
          }
        </tbody>
      </table>

    </React.Fragment>)
  }

}
const OrderHistoryData = axiosHoc(OrderHistory, { url: 'http://localhost:3001/orderdata?userEmail=' + sessionStorage.getItem("userEmail") });

export default OrderHistoryData;