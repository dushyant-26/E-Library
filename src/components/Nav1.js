import React, { Component } from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar';
import Footer from './Footer'
import Nav2 from './Nav2'
import Books from './Books';
import {Route } from 'react-router-dom';
import Search from './Search';
import Login from './Login';
import Signup from './Signup';
import Payment from './Payment';
import About from './About';
export default class Nav1 extends Component {
    render() {



        return (
            <div className="text-white">
                <Route path='/' exact>
                    <Navbar search={this.props.search} />
                    <Nav2 />
                    <Carousel />
                    <Books name="JavaScript" maxResults="5" />
                    <Books name="HTML" maxResults="5" />
                    <Books name="Java" maxResults="5" />
                    <Footer />
                </Route>

                <Route path='/search' exact>
                    <Navbar search={this.props.search} />
                    <div className="my-3 container">
                        <Search name={this.props.name} />
                    </div>
                    <Footer />
                </Route>
                <Route path='/login' exact>
                    <Navbar search={this.props.search} />
                    <Login login={this.props.login} />
                </Route>
                <Route path='/signup' exact>
                    <Navbar search={this.props.search} />
                    <Signup />
                </Route>
                <Route path='/pay' exact>
                    <Payment />
                </Route>
                <Route path='/about' exact>
                    <About />
                </Route>

            </div>
        )
    }
}
