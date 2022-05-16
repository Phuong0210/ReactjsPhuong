import React, { Component } from 'react';
import ContVd3 from './vd33';

class Vd3 extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:'Hồ Thị Phượng....'
        }
        this.updataState =  this.updataState.bind(this);
    };

updataState(e)
{
    this.setState({data:e.target.value})
}
    render() {
        return (
            <div>
                <ContVd3 myDataProp = {this.state.data}
                updataStateProp = {this.updataState}></ContVd3>
            </div>
        );
    }
}

export default Vd3;