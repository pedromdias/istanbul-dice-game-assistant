import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


export class Player extends React.Component {


    render() {
        const styles = {
            background: this.props.player.color
        };

        return (
            <span className="player-score" style={styles}>
                <span>{this.props.player.name}</span>
                <span>: </span>
                <span>{this.props.player.gems}</span>
            </span>
        );
    }
}