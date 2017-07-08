import React from "react";

export default class Signup extends React.Component {
    render() {
      return (
        <div className="App">
          <form
            id="main-login"
            // action={this.props.action}
            // method={this.props.method}
            // onSubmit={this.onFormSubmit}
            >
            <h2>Signup Page</h2>
            <div className="container">
              <label><b>Username</b></label><br/>
              <input type="text" placeholder="Enter Username" name="uid"
                required /><br/>

                <label><b>Email</b></label><br/>
                <input type="email" placeholder="Enter email" name="eid"
                  required /><br/>

                <label><b>Password</b></label><br/>
                <input type="password" placeholder="Enter Password" name="password"
                  required/><br/>

                  <label><b>ReEnter Password</b></label><br/>
                  <input type="password" placeholder="ReEnter Password" name="password"
                    required/><br/>

                  <button type="submit">Signup</button>
                </div>

              </form>
            </div>
      );
    }
}
