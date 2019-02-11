import React, {Component} from 'react';
import "./List.css"

class List extends Component {
    render() {
        return (
            <ul>
                {this.props.bookList.map(book =>
                <li>
                    {book.title} <br />
                    Author: {book.author} <br />
                    Price: ${book.price} <br />
                    <img src={book.image} alt="cover"></img> <br />
                    {book.description}
                </li>)}
            </ul>
        )
    }
}

export default List;