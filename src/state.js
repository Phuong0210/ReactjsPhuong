import React, {Component} from "react";
import products_data from "./data";
import One from './One'
class State extends Component {
    constructor(props) {
        super(props);
        this.state = products_data('products')

    }

    render() {
        return (
            <div id='products'>
                {this.state.map(value => {
                    return(<One image={value.image} name={value.name}></One>)
                })}
            </div>
        );
    }
    }


export default State;