import React, {Component} from 'react';
import Search from './Search.js';
import List from './List.js';
import Filter from './Filter.js';
import { all } from 'q';


class App extends Component {
  
  state = {
    searchTerm: null,
    bookList: [], 
    printType: 'all',
    bookType: 'full' 
  }

  userInput = (event) => {
    event.preventDefault() 
    const searchValue = event.currentTarget.search.value;  
    this.setState({
      searchTerm: searchValue, 
    })
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyBVwHBPcyE5hwVtKaWt-L250MlbWHbgs5Q`)
      .then(res => res.json())
      .then(responseJson => responseJson.items.map(item => {
        let salePrice = "Free";
        if (item.saleInfo.listPrice){
          salePrice = item.saleInfo.listPrice.amount;
        }
        return {
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          image: item.volumeInfo.imageLinks.thumbnail,
          price: salePrice
        }
      }))
      .then(data => this.setState({
        bookList: data,
      }));

}
  
  render(){
    return (
      <main className='App'>
        <Search userInput={this.userInput}></Search>
        <Filter />
        <List bookList={this.state.bookList} />
      </main>
    );
  }
}

export default App;