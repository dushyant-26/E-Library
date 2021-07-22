import React, { Component } from 'react'
import Nav1 from './Nav1';
import { BrowserRouter as Router } from 'react-router-dom';

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    render() {
        const search = (Sname) => {
            this.setState({
                name: Sname
            })

        }
        return (
            <Router>


                <Nav1 name={this.state.name} search={search} />

            </Router>
        )
    }
}
