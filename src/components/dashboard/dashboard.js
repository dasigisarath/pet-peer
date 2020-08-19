import React, { Component } from 'react';
import '../register/registerstyles.css'
import styles from '../styles/samestyle.module.css'
import axios from "axios";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PetsData from '../viewpets/Petdata';
import { Logout } from '../register/Register'
import OrderHistory from '../orderhistory/OrderHistory';
import Pets from '../pets/Pets';
import OrderhistoryCart from '../cart/OrderhistoryCart';

export const Welcome = () => {
  return (
    <h2 >
      Welcome To Pet-Peer
    </h2>
  )
}

class AddPet extends Component {
  constructor() {
    super();
    this.state = {
      petData: {
        petName: '',
        petAge: '',
        petBreed: '',
        petCost: '',
        petDescription: '',
        petAddress: ''
      }
    }
  }

  handleChange = (event) => {
    let petData = this.state.petData;
    petData[event.target.name] = event.target.value;
    this.setState({ petData })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.petData);
    let petName = this.state.petData.petName;
    let petAge = this.state.petData.petAge;
    let petBreed = this.state.petData.petBreed;
    let petCost = this.state.petData.petCost;
    let petDescription = this.state.petData.petDescription;
    let petAddress = this.state.petData.petAddress;
    if (petName.length != 0 & petAge.length != 0 & petBreed.length != 0 & petCost.length != 0 & petDescription.length != 0 & petAddress.length != 0) {
      axios.post('http://localhost:3001/petsdata', {
        petName: petName,
        petAge: petAge,
        petBreed: petBreed,
        petCost: petCost,
        petDescription: petDescription,
        petAddress: petAddress
      })
        .then(function (response) {
          console.log(response);
          window.alert('New Pet Added');
        })
        .catch(function (error) {
          console.log('Something went wrong');
          console.log(error);
        });
    }
    else {
      window.alert('Please Enter Pet Details and Try')
    }
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <Link to="/PetsData"><pre>VIEW PETS</pre></Link><br />
            <Link to="/OrderHistory"><pre>VIEW ORDERS</pre></Link><br /> */}
            <Link to="/pets"><pre>VIEW PETS</pre></Link>
            <Link to="/orderhistory"><pre>VIEW ORDERS</pre></Link>
            <Link to="/Logout"><pre>LOGOUT</pre></Link>
          </div>
          <Switch>
            {/* <Route path="/PetsData" component={PetsData} />
            <Route path="/OrderHistory" component={OrderHistory} /> */}
            <Route path="/pets" component={Pets}/>
            <Route path="/orderhistory" component={OrderhistoryCart}/>
              <Route path="/Logout" component={Logout} />
          </Switch>
        </BrowserRouter>

          <div className={styles.container}>
            <form id="contact" >
              <h3 style={{ fontFamily: "monospace" }}>Add Pet Form</h3>
              <fieldset>
                <input placeholder="Enter Name" type="text" name="petName" tabindex="1" onChange={this.handleChange} required />
              </fieldset>
              <fieldset>
                <input placeholder="Enter Age" type="text" name="petAge" tabindex="2" onChange={this.handleChange} required />
              </fieldset>
              <fieldset>
                <input placeholder="Enter Breed" type="text" name="petBreed" tabindex="2" onChange={this.handleChange} required />
              </fieldset>
              <fieldset>
                <input placeholder="Enter Cost" type="text" name="petCost" tabindex="4" onChange={this.handleChange} required />
              </fieldset>
              <fieldset>
                <input placeholder="About your Pet" type="text" name="petDescription" tabindex="4" onChange={this.handleChange} required />
              </fieldset>
              <fieldset>
                <input placeholder=" Enter Address" type="text" name="petAddress" tabindex="4" onChange={this.handleChange} required />
              </fieldset>
              <fieldset>
                <button style={{ padding: "10px" }} onClick={this.handleSubmit}>Add Pet</button>
              </fieldset>
            </form>
          </div>
      </div>
    )
  }
}



export default AddPet; 