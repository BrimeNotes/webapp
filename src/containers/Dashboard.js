import React from "react";
import { connect } from 'react-redux';
import { logOutUser } from '../actions/sessionAction';

class Dashboard extends React.Component {
    handleLogout() {
        const { dispatch } = this.props;
        dispatch(logOutUser())
    }
    componentWillMount() {
        const { history, session } = this.props;
        if (!session) {
            history.push('/');
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.session) {
            const { history } = nextProps;
            history.push('/');
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleLogout.bind(this)}>Logout</button>

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
export default connect(mapStateToProps)(Dashboard);