import React from "react";
import { Link } from "react-router-dom";

export default class Landing extends React.Component {
  render() {
    return (
      <div style={{ textAllign: "center" }}>
        <Link to="/">
          <img
            src="https://github.com/BrimeNotes/android/raw/master/Logo-branding/logo_0.5x.png?raw=true"
            style={{ maxWidth: "10%" }}
            alt="logo"
          />
        </Link>
        <h1 style={{ color: "#fb6737" }}>Brime Notes</h1>
        <p>Notes Like Never Before</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}
