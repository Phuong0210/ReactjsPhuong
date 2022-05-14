import React, {Component} from "react";
class VdForm extends Component {
        constructor(props){
            super(props);
            this.state={username: ''};
        }
        mySubmitHandler=(event)=>{
            event.preventDefault();
            alert("You are submitting" + this.state.username);
        }
        mySubmitHandler=(event)=>{
            this.seState({username: event.target.value});
        }
        render(){
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name, and submit:</p>
                <input
                type='submit'/>
            </form>
        );
    }
}
export default VdForm;

            
        