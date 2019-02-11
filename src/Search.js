import React, {Component} from 'react';
import "./Search.css"

class Search extends Component {
    render(){
        //api request with the search term
        //promise checks for error and parses json
        //json object, loop over it, create lis
        return(
            <form onSubmit={ this.props.userInput }>
                <label forhtml="search">Search:</label>
                <input name="search" type="search" id="search" placeholder="Fear and Loathing in Las Vegas"/>
                <input name="search-submit" type="submit" value="Search"/>
            </form>
        )
    }
}

export default Search