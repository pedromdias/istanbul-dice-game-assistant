import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
import './valued-coin.scss' // Import css
//Pictures
const images = require.context('./res', true);

export class ValuedCoin extends React.Component {

    handleClick = () => {
        this.props.onPurchase()
    };

    render() {
        const modifier = this.props.modifier || '';
        const className = `valued-coin ${modifier}`;
        const coinSource = images(`./coin.jpg`);
        return (
            <div className={className}>
                <img src={coinSource}/>
                <span>{this.props.cost}</span>
            </div>


        );
    }
}