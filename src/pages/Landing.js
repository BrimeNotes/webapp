import React from "react";
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
    render() {
        return (
            <div style={{ textAllign: "center" , marginTop: "2em"}}>
                <a href="#" ><img src="https://octodex.github.com/images/minion.png" style={{maxWidth:"10%"}} alt="logo"/></a>
                <h1 style={{color: "#fb6737"}}>Github Web</h1>
                <p>Description Here</p>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}
