import React, { Component } from 'react';
import '../register/registerstyles.css'
import axios from 'axios';
import DisplayPets from '../viewpets/Displaypets';
import axiosHoc from '../Hoc/axiosHoc';

class PetsData extends Component {

  handleBuy = (petItems) => {
    console.log("ordered", petItems);
    let petName = petItems.petName;
    let petAge = petItems.petAge;
    let petBreed = petItems.petBreed;
    let petCost = petItems.petCost;
    let petDescription = petItems.petDescription;
    let petAddress = petItems.petAddress;
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
  }
  render() {

    return (<React.Fragment>
      <h1>Pet Details</h1>
      <table>
        <thead>
          <tr><td>Name</td>
            <td>age</td>
            <td>Breed</td>
            <td>price</td>
            <td>Description</td>
            <td>address</td>
            <td>button</td></tr>
        </thead>
        <tbody>
          {
            this.props.data.map((pet, i) => {
              return <DisplayPets key={i} petsdata={pet} handleBuy={this.handleBuy} />
            })
          }
        </tbody>
      </table>

    </React.Fragment>)
  }
}

const viewPetsData=axiosHoc(PetsData,{url:' http://localhost:3001/petsdata'});
export default viewPetsData;