import React from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
        }
    }

    render() {
        const login = () => {
            window.localStorage.setItem('name', this.state.name)
            console.log('hello')
        }

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
            width: 1200,
            marginLeft: 100,
            marginTop: 50,
            borderRadius: 25,
            backgroundImage: "url(login.jpeg)",
            backgroundSize: "cover",
            height: 700,
            marginBottom: 100,
        }
        const change = (e) => {
            this.setState({
                name: e.target.value
            })
        }
        return (

            <div className="block-example border border-dark mb-0 mx-auto container" style={d}>
                <h1 style={mystyle}>Welcome back to<pre style={{ fontFamily: "Algerian", marginLeft: 0 }}>
                    Your Personal Learning Space</pre></h1>
                <p style={c}>Its great to have you back!</p>
                <label style={{ marginLeft: 40, color: "white", fontWeight: "bold" }} >Username<FontAwesomeIcon icon={faUser} /></label><br />
                <input style={{ marginLeft: 40, borderRadius: '10px' }} type="text" maxLength="100" size="50" onChange={change} placeholder="&nbsp;Enter Username" /><br /><br />
                <label style={{ marginLeft: 40, color: "white", fontWeight: "bold" }}>Password<FontAwesomeIcon icon={faKey} /></label><br />
                <input style={{ marginLeft: 40, borderRadius: '10px' }} type="password" size="50" placeholder="&nbsp;Enter Password" /><br /><br />
                <div><input type="checkbox" style={{ marginLeft: 40 }} /><label style={{ color: "white", fontWeight: "bold" }}> Remember me?</label>
                    <label style={{ marginLeft: 180, color: "white", fontWeight: "bold" }}>Forgot password?</label></div><br /><br />
                <a className="btn bg-info" style={{ marginLeft: 40, fontWeight: "bold", width: 200, borderRadius: 5, color: "white" }} onClick={login} href='/'>Login</a>
                <a href="/signup" className="btn bg-dark" style={{ marginLeft: 50, fontWeight: "bold", width: 200, borderRadius: 5, color: "white" }}>Create Account</a>
                <br /><br />
                <p style={{ marginLeft: 200, color: "white", fontWeight: "bold", fontSize: "1.1em" }}>Or login with</p>
                <div><label style={{ marginLeft: 110, color: "white", fontWeight: "bold" }}><a href="https://www.facebook.com/" style={{ textDecoration: 'none', fontSize: '1.3em' }}>Facebook</a></label>
                    <label style={{ marginLeft: 110, color: "white", fontWeight: "bold" }}><a href="https://www.gmail.com/" style={{  textDecoration: 'none', fontSize: '1.3em' }}>Gmail</a></label>
                </div>

            </div>

        );
    }
}

export default Login;