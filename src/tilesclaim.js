import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
//Pictures
const images = require.context('./res', true);


export class TilesClaim extends React.Component {


    handleClick = () => {
        this.props.onPurchase()
    };

    render() {
        const gemSource = images(`./gem.jpg`);
        const tileSource = images('./tiles.jpg');
        return (
            <div className="resource-market">
                <div className="resource-market_block __stock">
                    <img src={gemSource}/>
                    <span className="vertical-aligned">({this.props.claimed } / {this.props.total}) </span>
                </div>
                <span className="vertical-aligned"> => </span>
                <div className="resource-market_block __cost">
                    <span className="vertical-aligned">5 tiles?</span>
                    <img src={tileSource}/>
                </div>
                <button className="vertical-aligned" onClick={() => this.handleClick()}
                        disabled={this.props.claimed >= this.props.total}>Claim
                </button>
            </div>
        );
    }
}