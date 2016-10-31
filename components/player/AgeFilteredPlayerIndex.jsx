import React from 'react';
import PlayerList from './PlayerList';
import { Grid, Row, Col } from 'react-bootstrap';
import Server from '../../config/server';
import CircularProgressCenter from '../util/CircularProgressCenter'

export default class AgeFilteredPlayerIndex extends React.Component {


  constructor(props) {
    super(props);
    const birthYear = props.params.birthYear;
    this.state = { players: false };
    this.url = Server.API.getPlayersByBirthYear(birthYear);
  }

  componentDidMount() {
    this.fetchPlayers(this.url);
  }

  fetchPlayers(url) {
    $.ajax({
      url: url,
      dataType: 'json',
      cache: true,
      success: (players) => {
        this.setState({ players: players });
      }
    });
  }

  render() {

    return (
      <div>
        {this.state.players ? (
            <PlayerList title={this.props.params.birthYear + '年度生まれのプレイヤー'} players={this.state.players} />
          ) : (
            <CircularProgressCenter />
          )
        }
      </div>
    );

  }
}