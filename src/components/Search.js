import React, { Component } from 'react'
import Books from './Books'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: 40
        }
    }

    render() {
        let run = (this.props.name) ? this.props.name : 'Python';
        const change = (e) => {
            this.setState({
                result: e.target.value
            }, () => console.log(this.state.result))
        }
        return (
            <div className="searchList">
                <div className="d-flex justify-content-center">
                    <h4 className='me-3'>No. of Results </h4>
                    <select onChange={change}>
                        <option>40</option>
                        <option>30</option>
                        <option>20</option>
                        <option>10</option>
                    </select>
                </div>
                <Books name={run} maxResults={this.state.result} />

            </div>
        )
    }
}

