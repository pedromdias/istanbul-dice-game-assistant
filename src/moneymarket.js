import React from "react";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
import {ValuedCoin} from "./valuedcoin"; // Import css
//Pictures
const images = require.context('./res', true);

export class MoneyMarket extends React.Component {


    handleClick = () => {
        this.props.onPurchase()
    };

    render() {
        const coinSource = images(`./coin.jpg`);
        const gemSource = images(`./gem.jpg`);
        const remainingGems =  this.props.values.length - this.props.index;
        return (

            <div>
                {/**/}

                <div className="resource-market">
                {/*<div className="resource-market">*/}
                    <div className="resource-market_block __stock">
                        <img  src={gemSource} />
                        <span className="vertical-aligned">({this.props.index } / {this.props.values.length}) </span>
                    </div>
                    <span class="vertical-aligned"> => </span>
                    <div className="resource-market_block __cost __positioned">
                        <ValuedCoin modifier="__large" cost={this.props.values[this.props.index]}/>
                    </div>
                    <button class="vertical-aligned" onClick={() => this.handleClick()} disabled={this.props.index >= this.props.maxIndex}>Buy</button>
                </div>

                {/**/}
                <div>
                <div>

                    {remainingGems > 1 && (
                        <span>
                            <span class="vertical-aligned">Next:</span>
                            <span>
                                <ValuedCoin cost={this.props.values[this.props.index + 1]}/>
                            </span>
                        </span>)
                    }
                    {remainingGems > 2 && (
                        <span>
                            <span> || </span>
                            <span>
                                <ValuedCoin cost={this.props.values[this.props.index + 2]}/>
                            </span>
                        </span>)
                    }
                    {remainingGems > 3 && (<span> ...</span>)}
                </div>
                </div>
            </div>


        );
    }
}