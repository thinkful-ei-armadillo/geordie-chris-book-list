import React, {Component} from 'react';
import Search from './Search.js'


class App extends Component {
  
  state = {
    searchTerm: null,
    bookList: [],  
  }

  userInput = (event) => {
    event.preventDefault() 
    const searchValue = event.currentTarget.search.value;  
    this.setState({
      searchTerm: searchValue, 
    })
}
  componentDidMount(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&key="AIzaSyBVwHBPcyE5hwVtKaWt-L250MlbWHbgs5Q"`)
      .then(res => console.log(res)); 
  }
  
  render(){
    return (
      <main className='App'>
        <Search userInput={this.userInput}></Search>
      </main>
    );
  }
}

export default App;