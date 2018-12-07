import React from 'react';
import ReactTable from 'react-table'
import {connect} from 'react-redux';
import SelectedPlayersSelector	from './selector';
import 'react-table/react-table.css'
import './playersTable.css';

const columns = [
  {    Header: 'Name',    accessor: 'name' ,      headerClassName:'HeaderTable'  }, 
  {    Header: 'Position',accessor: 'position' ,  headerClassName:'HeaderTable'  },
  {    Header: 'Team',    accessor: 'team',       headerClassName:'HeaderTable'  }, 
  {    Header: 'Age',     accessor: 'age',        headerClassName:'HeaderTable'  }];

const PlayersTable = (props) => {
  return(

    <ReactTable className="-striped reactTable"
    data={props.players}
    columns={columns}
    showPagination={false}
    minRows={0}
  />
  );

}
const mapStateToProps= state => {
  return {players:SelectedPlayersSelector(state)};
}

export default connect(mapStateToProps)(PlayersTable);
