import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import * as orderActions from '../actions/OrderHistoryCartActions';
import {bindActionCreators} from 'redux';

class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [{
        petName: '',
        petAge: '',
        petBreed: '',
        petCost: '',
        petDescription: '',
        petAddress: ''
      }]
    }
  }

  componentWillMount() {
    axios.get(' http://localhost:3001/petsdata', {}).then((response) => {
      console.log(response.data);
      this.setState({ pets: response.data });
    }).catch((error) => {
      console.log(error);
    })
  }
  addPet = (pet) => {

    console.log(pet,this.props);

    let petName = pet.petName;
    let petAge = pet.petAge;
    let petBreed = pet.petBreed;
    let petCost = pet.petCost;
    let petDescription = pet.petDescription;
    let petAddress = pet.petAddress;
    let userEmail = sessionStorage.getItem('userEmail');


    if (petName.length != 0 & petAge.length != 0 & petBreed.length != 0 & petCost.length != 0 & petDescription.length != 0 & petAddress.length != 0) {
      axios.post('http://localhost:3001/orderdata', {
        petName: petName,
        petAge: petAge,
        petBreed: petBreed,
        petCost: petCost,
        petDescription: petDescription,
        petAddress: petAddress,
        userEmail: userEmail
      })
        .then(function (response) {
          console.log(response);
          window.alert('Congrats Bought This Pet');
        })
        .catch(function (error) {
          console.log('Something went wrong');
          console.log(error);
        });
    }
    else {
      console.log('did not receive pet data properly from child to parent');
    }

    this.props.actions.addToOrderHistory(pet);

  }


  render() {
    return (
      <div>
        <h2>List Of Pets</h2>
        <table>
          <thead>
            <tr><td>Name</td>
              <td>age</td>
              <td>Breed</td>
              <td>price</td>
              <td>Description</td>
              <td>address</td>
              <td>Buy</td></tr>
          </thead>
          <tbody>
            {
              this.state.pets.map((pet, i) => {
                return (
                  <tr key={i}>
                    <td>{pet.petName}</td>
                    <td>{pet.petAge}</td>
                    <td>{pet.petBreed}</td>
                    <td>{pet.petCost}</td>
                    <td>{pet.petDescription}</td>
                    <td>{pet.petAddress}</td>
                    <td><button onClick={() => this.addPet(pet)}>Buy Pet</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
const mapStateToprops = (state, nextprops) => {
  console.log("In Map", state, nextprops);
  return {
    myorders: state.myorders
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(orderActions,dispatch)
  }
}
export default connect(mapStateToprops,mapDispatchToProps)(Pets);