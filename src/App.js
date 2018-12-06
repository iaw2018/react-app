import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import SearchBar  from './SearchBar';
import PlayerTable from './PlayerTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <h4>Site Title</h4>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <h4 className="desciptionApp ml-4"> Football Player Finder </h4>
        <SearchBar />
        <PlayerTable />        

      </div>
    );
  }
}

export default App;
