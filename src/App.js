import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { uid: '', password: '' };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  onFormChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    }

  onFormSubmit(e) {
    e.preventDefault();
   console.log(this.state);

    axios({
    url: this.props.action,
      method: 'post',
      headers: {
        'Accept':'application/json'
        },
      data: {
        uid: this.state.uid,
        password: this.state.password
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    this.setState({ uid: '', password: '' });
  }

    render() {
      return (
        <div className="App">
          <form
            id="main-login"
            action={this.props.action}
            method={this.props.method}
            onSubmit={this.onFormSubmit}>
            <h2>Login Page</h2>
            <div className="container">
              <label><b>Username</b></label><br/>
              <input type="text" placeholder="Enter Username" name="uid"
                required onChange={this.onFormChange}/><br/>

                <label><b>Password</b></label><br/>
                <input type="password" placeholder="Enter Password" name="password"
                  required onChange={this.onFormChange}/><br/>

                  <button type="submit">Login</button>
                </div>

                <div className="container" style={{backgroundColor:"#f1f1f1"}}>
                  <a href=""><span className="psw">Forgot password?</span></a><br></br>
                  New User? <a href="">Create account.</a>
                </div>

              </form>
            </div>
          );
        }
      }

        App.defaultProps = {
          action: 'http://brime.ml/user/login',
        };
