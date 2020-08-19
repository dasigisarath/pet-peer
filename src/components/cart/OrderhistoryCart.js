import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../register/registerstyles.css';
import {bindActionCreators} from 'redux';
import * as orderActions from '../actions/OrderHistoryCartActions';

class OrderhistoryCart extends Component{
  constructor(props){
    super(props);
  
  }
  clear=()=>{
    this.props.actions.clearMyOrders();
  }

  render(){
    return(
      <div>
       {
         (this.props.myorders.length>0) ? <React.Fragment>
                  <h2>Order History</h2>
           {
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
                    this.props.myorders.map((pet,i)=>{
                      return (
                        <tr key={i}>
                        <td>{pet.petName}</td>
                        <td>{pet.petAge}</td>
                        <td>{pet.petBreed}</td>
                        <td>{pet.petCost}</td>
                        <td>{pet.petDescription}</td>
                        <td>{pet.petAddress}</td>
                        </tr>
                      )
                    })
                  }
                     </tbody>
              </table>
              
           }
           <button style={{backgroundColor: "red",color :'white',padding :'15px'}} onClick={this.clear}>Clear My Orders</button>
         </React.Fragment>: <h2>Your Orders is Empty</h2>
       }
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    myorders:state.myorders
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(orderActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderhistoryCart);