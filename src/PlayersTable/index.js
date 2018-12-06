import React from 'react';
import { Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import SelectedPlayersSelector	from './selector';

const PlayersTable = (props) => {
  return (
      <Table striped bordered condensed >
      	<thead>
      		<tr>
      			<th>Player</th>
      			<th>Position</th>
      			<th>Team</th>
      			<th>Age</th>
      		</tr>
      	</thead>
        <tbody>
          {props.players.map(player =>
            <tr key={player.id}>
              <td>{player.name}</td>
              <td className="text-right">{player.position}</td>
              <td className="text-right">{player.team}</td>
              <td className="text-right">{player.age}</td>
            </tr>
          )}
        </tbody>
      </Table>
  )
}
const mapStateToProps= state => {
  return {players:SelectedPlayersSelector(state)};
}

export default connect(mapStateToProps)(PlayersTable);
