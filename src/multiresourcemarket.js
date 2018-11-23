import React from "react";
//Pictures
const images = require.context('./res', true);


export class MultiResourceMarket extends React.Component {


    handleClick = () => {
        this.props.onPurchase()
    };

    render() {
        const blueGem = images('./blue-resource.jpg');
        const greenGem = images('./green-resource.jpg');
        const redGem = images('./red-resource.jpg');
        const yellowGem = images('./yellow-resource.jpg');
        const anyGem = images('./any-resource.jpg');
        const gemSource = images(`./gem.jpg`);
        return (
            <div className="resource-market">
                <div className="resource-market_block __stock">
                    <img src={gemSource}/>
                    <span className="vertical-aligned">({this.props.extra } / {this.props.max}) </span>
                </div>
                <span className="vertical-aligned"> => </span>
                <div className="resource-market_block __cost">
                    {this.props.extra > 0 && (<span>
                        {this.props.extra}
                        <img src={anyGem}/>
                        <span>+</span>
                    </span>)}
                    <span>
                        <img src={blueGem}/>
                        <span>+</span>
                    </span>
                    <span>
                        <img src={greenGem}/>
                        <span>+</span>
                    </span>
                    <span>
                        <img src={redGem}/>
                        <span>+</span>
                    </span>
                    <span>
                        <img src={yellowGem}/>
                    </span>
                </div>
                <button className="vertical-aligned" onClick={() => this.handleClick()}
                        disabled={this.props.index >= this.props.maxIndex}>Buy
                </button>
            </div>
        );
    }
}