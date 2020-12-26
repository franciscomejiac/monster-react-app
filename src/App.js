import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchQuery: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchQuery } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
      <div className="App">
        <h1> Monsters Roldex </h1>
        <SearchBox placeholder='search monsters' handleChange={e => this.setState({ searchQuery: e.target.value })}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
  
}

export default App;
