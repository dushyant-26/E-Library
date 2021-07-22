import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: 'Guest',
      search: ''
    }
  }
  func() {
    var a = window.localStorage.getItem('name');
    var b;
    if (a === null || a === '')
      b = "Guest";
    else
      b = a;
    this.setState({
      user: b
    })
  }
  render() {


    const Logout = () => {
      window.localStorage.removeItem('name');
      { this.func() }
    }
    const change = (e) => {
      console.log(this.state.search)
      this.setState({
        search: e.target.value
      })
    }
    const clicked = (e) => {

      this.props.search(this.state.search);
    }
    let login, logout;
    if (this.state.user === 'Guest')
      logout = { visibility: 'hidden' }
    else
      login = { visibility: 'hidden' }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mx-5" href="/">E-Library</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mid" id="navbarSupportedContent">
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={change} id='inp' />
              <Link to='/search'>
                <button className="btn" type="submit" onClick={clicked} >Search</button>
              </Link>
            </form>
            <div className="loginUser ms-auto">
              <Link to='/login'>
                <button className="btn" type="submit" style={login} >Login/SignUp</button>
              </Link>
              <h2 className="text-white mx-3" id='log'>Welcome,{this.state.user}</h2>
              <button className="btn me-3" type="submit" style={logout} onClick={Logout}>Logout</button>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  componentDidMount() {
    { this.func() }
  }
}
