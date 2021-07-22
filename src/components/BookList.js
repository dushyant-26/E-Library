import React, { Component } from 'react'
import BookCard1 from './BookCard1'
export default class BookList extends Component {
    render() {
        return (
            <div className="d-flex flex-wrap">
                {
                    this.props.books.map((item, i) => {
                        return <BookCard1 key={i}
                            thumbnail={item.volumeInfo.imageLinks.thumbnail}
                            title={item.volumeInfo.title}
                            pageCount={item.volumeInfo.pageCount}
                            language={item.volumeInfo.language}
                            authors={item.volumeInfo.authors}
                            publisher={item.volumeInfo.publisher}
                            description={item.volumeInfo.description}
                            previewLink={item.volumeInfo.previewLink}
                        />
                    })
                }
            </div>
        )
    }
}
