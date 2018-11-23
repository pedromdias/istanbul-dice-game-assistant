import React from "react";
import {SingleColorResource} from './singleresourcemarket';
// import {_} from 'node_modules/underscore';
import _ from 'lodash';
import {MoneyMarket} from "./moneymarket";
import {MultiResourceMarket} from "./multiresourcemarket";
// import './myindex.scss';
import './game-board.scss';
import './game-info.scss';
import './react-confirm-alert.scss';
import {Board} from './board';
import {Player} from './player';
import {confirmAlert} from "react-confirm-alert";

export class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            players: [
                {
                    name: "Player A",
                    color: "#E72A2A",
                    gems: 0
                },
                {
                    name: "Player B",
                    color: "#6377F3",
                    gems: 0
                }
            ],
            targetGems: 6, // 5 with 4 players,
            gameInformation: {
                moneyGems: {
                    index: 0
                },
                multiResource: {
                    extraRequirement: 0
                },
                singleResource: [
                    {
                        color: "red",
                        index: 0
                    },
                    {
                        color: "green",
                        index: 0
                    },
                    {
                        color: "blue",
                        index: 0
                    },
                    {
                        color: "yellow",
                        index: 0
                    }
                ],
                tiles: {
                    claimed: 0,
                    total: 3 // # of players
                },
                players: [
                    {
                        name: "Player A",
                        color: "#E72A2A",
                        gems: 0
                    },
                    {
                        name: "Player B",
                        color: "#6377F3",
                        gems: 0
                    }
                ]
            }
        };
    }

    addGemToPlayer(playerIndex) {
        let players = this.state.players;
        let player = players[playerIndex];
        player.gems = player.gems + 1;
        console.log('gem', players[playerIndex]);
        this.setState({
            players: players
        });
        if(player.gems >= this.state.targetGems) {
            this.showWinnerDialog(player);
        }
    }

    showWinnerDialog(winner) {
        confirmAlert({
            title: 'Game Over',
            message: winner.name +" won with " + winner.gems + " Gems",
            buttons: [{'label': "Ok"}]
        });
    }

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board gameInformation={this.state.gameInformation} onPurchase={(index) => this.addGemToPlayer(index)} />
                </div>
                <div className="game-info">
                    {this.state.players.map(player =>
                        <Player player={player} key={player.name} />
                    )}
                </div>
            </div>
        );
    }
}
