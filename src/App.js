import React, {Component} from 'react';
import Search from './Search.js';
import List from './List.js';
import Filter from './Filter.js';



class App extends Component {
  
  state = {
    searchTerm: null,
    bookList: [], 
    printType: 'all',
    bookType:  'full', 
  }

  userInput = (event) => {
    event.preventDefault() 
    const searchValue = event.currentTarget.search.value;  
    this.setState({
      searchTerm: searchValue, 
    })
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&printType=${this.state.printType}&filter=${this.state.bookType}&key=AIzaSyBVwHBPcyE5hwVtKaWt-L250MlbWHbgs5Q`)
      .then(res => res.json())
      .then(responseJson => responseJson.items.map(item => {
        return {
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors,
          description: item.volumeInfo.description,
          image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "", 
          price: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 'Free'
        }
      }))
      .then(data => this.setState({
        bookList: data,
      }));
}
  
  handlePrintType = (event) => {
    const printTypeValue  = event.currentTarget.value; 
    this.setState({
      printType: printTypeValue
    })
  }

  handleBookType = (event) => {
    const bookTypeValue = event.currentTarget.value;
    this.setState({
      bookType: bookTypeValue
    })
  }

  render(){
    return (
      <main className='App'>
        <Search userInput={this.userInput}></Search>
        <Filter printType={this.handlePrintType} bookType={this.handleBookType}/>
        <List bookList={this.state.bookList} />
      </main>
    );
  }
}

export default App;