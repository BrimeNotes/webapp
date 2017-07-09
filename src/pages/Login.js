import React from "react";
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <label><b>Username</b></label><br />
                        <input type="text" placeholder="Enter Username" name="uid"
                            required onChange={this.onFormChange} /><br />

                        <label><b>Password</b></label><br />
                        <input type="password" placeholder="Enter Password" name="password"
                            required onChange={this.onFormChange} /><br />

                        <button type="submit">Login</button>
                    </div>

                    <div className="container">
                        <a href=""><span className="psw"><Link to="/reset">Forget Pssword?</Link></span></a><br></br>
                        New User? <a href=""><Link to="/signup">Create account</Link></a>.
                    </div>

                </form>
            </div>
        );
    }
}
