import React from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            pass: ''
        }
    }

    render() {
        var mystyle = {
            fontFamily: "Algerian",
            marginTop: 50,
            marginLeft: 40,
            color: "white",
        }
        var c = {
            marginLeft: 40,
            color: "white",
            fontWeight: "bold",
        }
        var d = {

            width: 1100,
            marginLeft: 100,
            backgroundImage: "url(login.jpeg)",
            backgroundSize: "cover",
            marginTop: 50,
            borderRadius: 25,
            marginBottom: 100,
        }
        return (
            <div className="block-example border border-light mb-0 mx-auto container" style={d} >
                <h1 style={mystyle}>Welcome to<pre style={{ fontFamily: "Algerian", marginLeft: 0, color: "white" }}>
                    Your Personal Learning Space</pre></h1>
                <p style={c}>Its great to have you back!</p>
                <label style={{ marginLeft: 40, color: "white", fontWeight: "bold" }}>First Name<FontAwesomeIcon icon={faUser} /></label><br />
                <input style={{ marginLeft: 40 }} type="text" maxLength="100" size="50" /><br />
                <label style={{ marginLeft: 40, color: "white", fontWeight: "bold" }}>Last Name<FontAwesomeIcon icon={faUser} /></label><br />
                <input style={{ marginLeft: 40 }} type="text" maxLength="100" size="50" /><br />
                <label style={{ marginLeft: 40, color: "white", fontWeight: "bold" }}>Email<FontAwesomeIcon icon={faEnvelope} /></label><br />
                <input style={{ marginLeft: 40 }} type="text" size="50" /><br />
                <label style={{ marginLeft: 40, color: "white", fontWeight: "bold" }}>Password<FontAwesomeIcon icon={faKey} /></label><br />
                <input style={{ marginLeft: 40 }} type="password" maxLength="8" size="50" /><br />
                <label style={{ marginLeft: 40, color: "white", fontWeight: "bold" }}>Confirm Email<FontAwesomeIcon icon={faEnvelope} /></label><br />
                <input style={{ marginLeft: 40 }} type="text" size="50" /><br />
                <label style={{ marginLeft: 40, color: "white", fontWeight: "bold" }}>Confirm Password<FontAwesomeIcon icon={faKey} /></label><br />
                <input style={{ marginLeft: 40 }} type="password" maxLength="8" size="50" /><br /><br />
                <div><button className="bg-dark" style={{ marginLeft: 40, fontWeight: "bold", width: 200, borderRadius: 5, color: "white" }}>Sign Up</button>
                </div><br />
                <p style={{ marginLeft: 220, color: "white", fontWeight: "bold" }}>Or Signup with</p>
                {<label><a style={{ textDecoration: "none", marginLeft: "300px", fontWeight: "bold", fontSize: "1.3em" }} href="https://www.facebook.com/">Facebook</a></label>}
            </div>
        );
    }
}

export default Signup;