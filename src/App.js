import React from 'react';
import './App.css';
import PokeList from './PokeList.js';
import pokeData from './data.js';
import Searchbar from './Searchbar.js';
import Sort from './Sort.js';

export default class App extends React.Component {
  state = {
    filter: '',
    sortType: '',
    sortOrder: '',
    form: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      form: this.state.form
    });
  }
  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  }
  handleSortType = e => {
    this.setState({
      sortType: e.target.value
    });
  }
  handleSortOrder = e => {
    this.setState({
      sortOrder: e.target.value
    });
  }

render() {
  return (
    <div className="App">
      <Searchbar 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleChangeAttack={this.handleChangeAttack}
        handleChangeDefense={this.handleChangeDefense}
      />
      <Sort 
        handleSortType={this.handleSortType}
        handleSortOrder={this.handleSortOrder} />
      <PokeList 
        pokeDataProp={pokeData}
        filter={this.state.filter}
        sortType={this.state.sortType}
        sortOrder={this.state.sortOrder}
      />
    </div>
  );
}
}

