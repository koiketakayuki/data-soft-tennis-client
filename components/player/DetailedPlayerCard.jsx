import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { Link } from 'react-router'

export default class DetailedPlayerCard extends React.Component {

  render() {
    const player = this.props.player;

    return (
        <Grid>
          <h3>プロフィール</h3>
          <Table>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>利き腕</TableRowColumn>
                <TableRowColumn>{player.is_lefty ? '左' : '右'}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>所属</TableRowColumn>
                <TableRowColumn><Link to={"team/" + player.current_team_id}>{player.current_team_name}</Link></TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>世代</TableRowColumn>
                <TableRowColumn><Link to={"player/birth-year/" + player.birth_year}>{player.birth_year}年生まれ</Link></TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>中学校</TableRowColumn>
                <TableRowColumn><Link to={"team/" + player.junior_high_team_id}>{player.junior_high_team_name}</Link></TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>高校</TableRowColumn>
                <TableRowColumn><Link to={"team/" + player.high_school_team_id}>{player.high_school_team_name}</Link></TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>大学</TableRowColumn>
                <TableRowColumn><Link to={"team/" + player.university_team_id}>{player.university_team_name}</Link></TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
    );
  }
}