import React ,{Component} from 'react';
import { Form,FormGroup,FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from './actions';
import './searchBar.css';

class SearchBar extends Component{
  render()
  {
    return (
      <Form inline>
          <FormGroup controlId="formName">
              <FormControl type="text" placeholder="Player Name" 
              className="filterField" onChange={this.props.doNewName}/>
          </FormGroup>
          <FormGroup controlId="formPosition">
              <FormControl componentClass="select" placeholder="Position" 
              className="filterField" onChange={this.props.doNewPosition}>
                <option value="Position">Position</option>
                <option value="Attacking Midfield">Attacking Midfield</option>
                <option value="Central Midfield">Central Midfield</option>
                <option value="Centre-Back">Centre-Back</option>
                <option value="Centre-Forward">Centre-Forward</option>
                <option value="Defensive Midfield">Defensive Midfield</option>
                <option value="Keeper">Keeper</option>
                <option value="Left Midfield">Left Midfield</option>
                <option value="Left Wing">Left Wing</option>
                <option value="Left-Back">Left-Back</option>
                <option value="Right-Back">Right-Back</option>
              </FormControl>
          </FormGroup>
          <FormGroup controlId="formAge">
              <FormControl type="text" placeholder="Age" 
              className="filterField" onChange={this.props.doNewAge}/>
          </FormGroup>
          <FormGroup controlId="formAge">
              <Button type="submit" 
              className="filterField" 
              bsSize="large">
                Search
              </Button>
          </FormGroup>
      </Form>
  );  
}
}
const mapStateToProps= state => {
    return {filters:state.filters};
  }
export default connect(mapStateToProps,actions)(SearchBar);
