import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters: [],
      searchField:''
    };
    //Setting the context of this keyword in method or use arrow functions  
    // this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(error => console.log('I have errored'))
  }
  // Arrow functions bind this keyword to the context where it was defined and binds automatically.
  handleChange = e =>{
    this.setState({ searchField: e.target.value})
  }
  
  render(){
    const {monsters,searchField }=this.state;
    const filteredMonsters = monsters.filter(i =>
      i.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}>  
        </CardList>
      </div>
    );
  }
}
export default App;
