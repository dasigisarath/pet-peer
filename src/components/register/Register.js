import React, { Component } from 'react';
import './registerstyles.css'
import styles from '../styles/samestyle.module.css'
import axios from "axios";


export const Welcome = () => {
  return (
    <h2 >
      Welcome To Pet-Peer
    </h2>
  )
}

class Register extends Component {
  constructor() {
    super();
    this.state = {
      userData: {
        userName: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
      }
    }
  }

  handleChange = (event) => {
    let userData = this.state.userData;
    userData[event.target.name] = event.target.value;
    this.setState({ userData })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userData);
    let userName = this.state.userData.userName;
    let email = this.state.userData.email;
    let password = this.state.userData.password;
    let phoneNumber = this.state.userData.phoneNumber;
    let address = this.state.userData.address;
    if (userName.length != 0 & email.length != 0 & password.length != 0 & phoneNumber.length != 0 & address.length != 0) {
      axios.post('http://localhost:3001/storeuserdata', {
        userName: userName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
        address: address
      })
        .then(function (response) {
          console.log(response);
          window.alert('Registered Successfully');
          window.location.reload();
        })
        .catch(function (error) {
          console.log('Something went wrong');
          console.log(error);
        });
        
    }
    else {
      window.alert('Please Enter values in Fields')
    }
  }

  render() {
    return (

      <div className={styles.container}>

        <form id="contact" >
          <h3 style={{ fontFamily: "monospace" }}>Sign up Form</h3>
          <h4 style={{ fontFamily: "monospace" }}>Welcome to Pet Shop</h4>
          <fieldset>
            <input placeholder="UserName" type="text" name="userName" tabindex="1" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <input placeholder="Enter Email" type="email" name="email" tabindex="2" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <input placeholder="Set Password" type="password" name="password" tabindex="2" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <input placeholder="Mobile Number" type="text" name="phoneNumber" tabindex="4" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <input placeholder="Address" type="text" name="address" tabindex="4" onChange={this.handleChange} required />
          </fieldset>
          <fieldset>
            <button style={{ padding: "10px" }} onClick={this.handleSubmit}>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export class Logout extends Component {

  constructor(){
    super();
    console.log('inside logout');
   sessionStorage.removeItem('userEmail');
   //this.props.history.push('/Login');
   window.location="/Login";
  }

}



export default Register; 