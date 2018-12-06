import React, { Component } from 'react';
import { Navbar,Row} from 'react-bootstrap';
import SearchBar  from './SearchBar';
import PlayerTable from './PlayersTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <h4 id="Brand">Site Title</h4>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <div className="container">
          <Row>
            <h4 className="desciptionApp ml-4"> Football Player Finder </h4>
          </Row>
          <Row>      
            <SearchBar />
          </Row>
          <Row>     
            <PlayerTable />      
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
