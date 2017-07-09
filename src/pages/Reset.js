import React from "react";
import { Link } from 'react-router-dom';

export default class Reset extends React.Component {
    render() {
        return (
            <div>
                <h1>Reset Password</h1>
                <form
                    id="main-login"
                    action={this.props.action}
                    method={this.props.method}
                    onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <label><b>Username</b></label><br />
                        <input type="text" placeholder="Enter registered Username" name="uid"
                            required onChange={this.onFormChange} /><br />

                        <label><b>Email</b></label><br/>
                        <input type="email" placeholder="Enter registered email" name="eid"
                            required /><br/>

                        <label><b>New Password</b></label><br />
                        <input type="password" placeholder="Enter Password" name="password"
                            required onChange={this.onFormChange} /><br />

                        <label><b>Confirm Password</b></label><br />
                        <input type="password" placeholder="ReEnter Password" name="password"
                            required onChange={this.onFormChange} /><br />

                        <button type="submit">Save</button>
                    </div>

                </form>
            </div>
        );
    }
}
