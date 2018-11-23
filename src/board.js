import React from "react";
import {SingleColorResource} from './singleresourcemarket';
// import {_} from 'node_modules/underscore';
import _ from 'lodash';
import {MoneyMarket} from "./moneymarket";
import {MultiResourceMarket} from "./multiresourcemarket";
import {TilesClaim} from "./tilesclaim";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css


export class Board extends React.Component {


    constructor(props) {
        super(props);

        const startingGame = {
            moneyGems: {
                values: [12,14,16,18,20,22,24]
            },
            multiResource: {
                maxRequirement: 5
            },
            singleResource: [
                {
                    color: "red",
                    values: [4,5,6,7]
                },
                {
                    color: "green",
                    values: [4,5,6,7]
                },
                {
                    color: "blue",
                    values: [4,5,6,7]
                },
                {
                    color: "yellow",
                    values: [4,5,6,7]
                }
            ]
        };

        this.state = _.merge(props.gameInformation, startingGame);
        console.log(this.state);
    }

    handleBuy(confirmCallback) {
        //Check How to make own modal
        this.showDialog((playerIndex) => {
            //Update Market
            confirmCallback();
            //Update Players
            this.props.onPurchase(playerIndex);
        });

    };

    showDialog(confirmCallback) {
        const buttons = this.state.players.map((player, playerIndex) => {
            return {
                'label': player.name,
                'onClick': () => confirmCallback(playerIndex)
            }
        });

        buttons[this.state.players.length] = {
            label: 'Cancel'
        };

        confirmAlert({
            title: 'Confirm purchase',
            message: 'Who gets the gem?',
            buttons: buttons
        });
    }

    handleSingleColorPurchase(i) {
        const confirmCallback = () => {
            const copy = this.state.singleResource.slice();
            copy[i].index++;

            this.setState({
                singleResource: copy
            });
        };
        this.handleBuy(confirmCallback);
    }

    handleMoneyPurchase() {
        this.handleBuy(() => this.buyGem('moneyGems', 'index'));
    }

    handleMultiResourcePurchase() {
        this.handleBuy(() => this.buyGem('multiResource', 'extraRequirement'));
    }

    handleTileClaim() {
        this.handleBuy(() => this.buyGem('tiles', 'claimed'));
    }

    buyGem(gemSource, iterator) {
        const copy = Object.assign({}, this.state[gemSource]);
        copy[iterator]++;

        this.setState({
            [gemSource]: copy
        });
    }

    render() {
        const status = 'Istanbul Dice Game';
        return (
            <div>
                <div className="status">{status}</div>
                {this.state.singleResource.map((market, index) =>
                    <SingleColorResource key={index} color={market.color} cost={market.values[market.index]} onPurchase={() => this.handleSingleColorPurchase(index)} index={market.index} maxIndex={market.values.length}/>
                )}
                <div>-------------------------</div>
                <br/>

                <MoneyMarket values={this.state.moneyGems.values} index={this.state.moneyGems.index} onPurchase={() => this.handleMoneyPurchase(this.state.moneyGems.index)}/>
                <div>-------------------------</div>
                <br/>
                <MultiResourceMarket extra={this.state.multiResource.extraRequirement} max={this.state.multiResource.maxRequirement} onPurchase={() => this.handleMultiResourcePurchase(this.state.moneyGems.index)}/>

                <div>-------------------------</div>
                <br/>
                <TilesClaim claimed={this.state.tiles.claimed} total={this.state.tiles.total} onPurchase={() => this.handleTileClaim()}/>

            </div>
        );
    }
}