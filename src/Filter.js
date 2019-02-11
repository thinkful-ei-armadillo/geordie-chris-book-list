import React, {Component} from 'react';

class Filter extends Component {
    render () {
        return (
            <div>
                <label forhtml="print-type">Print Type:</label>
                <select id="print-type">
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazine">Magazine</option>
                </select>
                <label forhtml="book-type">Book Type:</label>
                <select id="book-type">
                    <option value="full">Full Books</option>
                    <option value="free-ebooks">Free E-Books</option>
                    <option value="paid-ebooks">Paid E-Books</option>
                    <option value="ebooks">All E-Books</option>
                </select>
            </div>
        )
    }
}

export default Filter;