import React ,{Component} from 'react';
import {connect} from 'react-redux';
import FiltersForm from './FiltersValidationForm';
import * as actions from './actions';
import {DEFAULTS_FILTERS} from './constants';
import './searchBar.css';

class SearchBar extends Component{
  render(){
    return ( 
      <FiltersForm onSubmit={this.props.doSearch} />
  );}
}
const mapStateToProps= state => {
    return {filters:state.filters};
  }
export {DEFAULTS_FILTERS};
export default connect(mapStateToProps,actions)(SearchBar);
