import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css
//Pictures
const images = require.context('./res', true);



export class SingleColorResource extends React.Component {


    handleClick = () => {
        this.props.onPurchase()
    };

    render() {
        const resourceSource = images(`./${this.props.color}-resource.jpg`);
        const gemSource = images(`./gem.jpg`);
        return (
            /*<button onClick={() => this.handleClick()} disabled={this.props.index >= this.values.length}>*/
            <div className="resource-market">
                <div className="resource-market_block __stock">
                    <img src={gemSource}/>
                    <span className="vertical-aligned">({this.props.index } / {this.props.maxIndex}) </span>
                </div>
                <span className="vertical-aligned"> => </span>
                <div className="resource-market_block __cost">
                    <span className="vertical-aligned"> {this.props.cost}</span>
                    <img  src={resourceSource} />
                </div>
                <button className="vertical-aligned" onClick={() => this.handleClick()} disabled={this.props.index >= this.props.maxIndex}>Buy</button>
            </div>
        );
    }
}