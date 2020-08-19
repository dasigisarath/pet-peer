import React, { Component } from 'react';
import '../register/registerstyles.css'
import styles from '../styles/samestyle.module.css'
import axios from "axios";

class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email: this.email.value, password: this.password.value });
    let email = this.email.value;
    let password = this.password.value;
    if (email.length != 0 && password.length != 0) {
      axios.get('http://localhost:3001/storeuserdata?email=' + email + '&password=' + password).then((response) => {
        console.log(response.data)
        let data = response.data;
        if (data.length > 0) {
          sessionStorage.setItem('userEmail',email);
          window.alert("login successfull")
          this.props.history.push("/AddPet");
        }
        else {
          window.alert("Invaid user")
        }

      }).catch((error) => {
        window.alert("Wrong Url")

      })

    }

    else {
      window.alert("Enter All Fields")
    }
  }




  render() {
    return (
      <div className={styles.container}>
        <form id="contact" >
          <h3 style={{ fontFamily: "monospace" }}>Login</h3>
          <h4 style={{ fontFamily: "monospace" }}>Welcome to Pet Shop</h4>
          <fieldset>
            <input placeholder="Enter email" type="email" name="email" ref={email => this.email = email} tabindex="1" required />
          </fieldset>
          <fieldset>
            <input placeholder="Enter Password" type="password" name="password" ref={(password) => this.password = password} tabindex="2" />
          </fieldset>
          <fieldset>
            <button style={{ padding: "10px" }} onClick={this.handleSubmit}>Login</button>
          </fieldset>
        </form>
        {/* <BrowserRouter>
        <Route path="/AddPet" component={AddPet}/>
        </BrowserRouter> */}
      </div>
    )
  }
}



export default Login;