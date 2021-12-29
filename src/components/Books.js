import React, { Component } from "react";
import request from "superagent";
import BookList from "./BookList";
export default class Books extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      name: "Python",
    };
  }
  Booksdata = (name, res) => {
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: name, maxResults: res, filter: "ebooks" })
      .then((data) => {
        this.setState({
          books: [...data.body.items],
        });
        console.log(this.state.books);
      });
  };
  render() {
    return (
      <div id={this.props.name} className="container">
        <h3 className="mx-3">{this.props.name}</h3>
        <BookList books={this.state.books} />
      </div>
    );
  }
  componentDidMount() {
    // eslint-disable-next-line
    {
      this.Booksdata(this.props.name, this.props.maxResults);
    }
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    // eslint-disable-next-line
    {
      // eslint-disable-next-line
      this.Booksdata(newProps.name, newProps.maxResults);
    }
  }
}
