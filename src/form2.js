/* eslint-disable react/jsx-no-undef */
import React, {Component} from "react";
class Form2 extends Component {
    constructor(props){
        super(props);
        this.state={
            data:'Initial data...'
        }
        this.updateState=this.updateState.blind(this);
    };
    updateState(e)
{
    this.setState({data: e.tartget.value});
}    render() {
        return (
            <div>
            // eslint-disable-next-line react/jsx-no-undef
            <Content myDataProp={this.state.data}
            updateStateProp={this.updateState}>
            </Content>
            </div>
        );
    }
}
class Content extends React.Component{
    render(){
        return(
            <div>
                <input type ="text" value ={this.props.myDataProp}
                onChange={this.props.updateStateProp}/>
                <h3>{this.props.myDataProp}</h3>
            </div>
        );

    }
}
export default Form2;