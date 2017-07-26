import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { autheticate } from '../actions/sessionAction'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { credentials: { uid: 'peter@klaven', password: 'password' } }
        this.onChange = this.onChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onChange(event) {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState({ credentials: credentials });
    }

    onFormSubmit(event) {
        event.preventDefault();
        const { dispatch } = this.props;
        dispatch(autheticate(this.state.credentials))
    }
    componentWillMount() {
        const { history, session } = this.props;
        if (session) {
            history.push('/dashboard');
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.session) {
            const { history } = nextProps;
            history.push('/dashboard');
        }
    }

    render() {
        console.log(this.props.session);
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
                        <input type="text" value={this.state.credentials.uid} placeholder="Enter Username" name="uid"
                            required onChange={this.onFormChange} /><br />

                        <label><b>Password</b></label><br />
                        <input type="password" placeholder="Enter Password" name="password"
                            required onChange={this.onFormChange} value={this.state.credentials.password} /><br />

                        <button type="submit">Login</button>
                    </div>

                    <div className="container">
                        <Link to="/reset"><span className="psw">Forget Pssword?</span></Link><br></br>
                        New User?<Link to="/signup">Create account</Link>
                    </div>

                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { session } = state;
    return {
        session
    }
}
export default connect(mapStateToProps)(Login);