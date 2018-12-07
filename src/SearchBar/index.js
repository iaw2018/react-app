import React ,{Component} from 'react';
import { Form,FormGroup,FormControl, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from './actions';
import {DEFAULTS_FILTERS} from './constants';
import './searchBar.css';

const positions=[DEFAULTS_FILTERS.position,"Attacking Midfield",
  "Central Midfield","Centre-Back","Centre-Forward","Defensive Midfield",
  "Keeper","Left Midfield","Left Wing","Left-Back","Right-Back"];
class SearchBar extends Component{
  render()
  {
    return (
      <Form inline>
          <FormGroup controlId="formName" className="col-md-3 col-xs-12">
              <FormControl type="text" placeholder="Player Name" 
              className="filterField" onChange={this.props.doNewName}/>
          </FormGroup>
          <FormGroup controlId="formPosition" className="col-md-3 col-xs-12">
              <FormControl componentClass="select" placeholder="Position" 
              className="filterField" onChange={this.props.doNewPosition}>
                {positions.map(position =>
                  <option value={position}>{position}</option>
                )}
              </FormControl>
          </FormGroup>
          <FormGroup controlId="formAge" className="col-md-3 col-xs-12">
              <FormControl type="text" placeholder="Age" 
              className="filterField" onChange={this.props.doNewAge}/>
          </FormGroup>
          <FormGroup controlId="formAge" className="col-md-3 col-xs-12">
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
export {DEFAULTS_FILTERS};
export default connect(mapStateToProps,actions)(SearchBar);
