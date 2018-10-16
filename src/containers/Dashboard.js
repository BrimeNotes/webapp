import React from "react";
import { connect } from "react-redux";
import { logOutUser } from "../actions/sessionAction";
import { addNotes, removeNotes } from "../actions/notesAction";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";
class Dashboard extends React.Component {
  state = {
    note: undefined
  };
  handleLogout() {
    this.props.logOutUser();
  }
  componentWillMount() {
    const { history, session } = this.props;
    if (!session) {
      history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.session) {
      const { history } = nextProps;
      history.push("/");
    }
  }
  onChange = e => {
    this.setState({
      note: e.target.value
    });
  };
  onAdd = () => {
    if (!this.state.note) return;
    this.props.addNotes(this.state.note);
    this.setState({
      note: ""
    });
  };
  onRemove = id => {
    this.props.removeNotes(id);
  };
  render() {
    const { notes } = this.props;
    return (
      <div className="brime-layout">
        <div className="header">
          <div className="left">
            <Link to="/dashboard">
              <img
                src="https://github.com/BrimeNotes/android/raw/master/Logo-branding/logo_0.5x.png?raw=true"
                style={{ height: 50 }}
                alt="logo"
              />
            </Link>
            <h1 style={{ color: "#fb6737" }}>Brime Notes</h1>
          </div>
          <div className="right">
            <button onClick={this.handleLogout.bind(this)}>Logout</button>
          </div>
        </div>
        <div className="content flex flex--center">
          <div className="notes-input">
            <input
              value={this.state.note}
              onChange={this.onChange}
              placeholder="Add Note"
              required={true}
            />
            <button onClick={this.onAdd}>+ Add</button>
          </div>
          <div className="notes-list">
            {notes.map((note, index) => (
              <div key={index} className="note-card">
                <div className="value">{note}</div>
                <div className="action">
                  <i
                    className="material-icons"
                    onClick={() => this.onRemove(index)}
                  >
                    close
                  </i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { session, notes } = state;
  return {
    session,
    notes
  };
};
const mapDispatchToProps = dispatch => ({
  addNotes: data => dispatch(addNotes(data)),
  removeNotes: index => dispatch(removeNotes(index)),
  logOutUser: () => dispatch(logOutUser())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
