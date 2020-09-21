import React, { Component } from "react";
import "./App.css";
import { CartList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://portaltlt.azurewebsites.net/api/customer")
      .then((respone) => respone.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  handlechange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handlechange={(e) => {
            this.handlechange(e);
          }}
        />
        <CartList monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;
