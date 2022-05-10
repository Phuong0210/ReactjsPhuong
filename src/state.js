import React, {Component} from "react";
import getData from './data'
import One from './One'
class State extends Component {
    constructor(){
      super();
      this.state =getData();
      
    }
    render(){
        // var rows=[];
        // for ( var i =0; i< products_data().length;i++){
        //     rows.push(
        //         <One
        //         tenSP={products_data()[i].name}
        //         anh={products_data()[i].image}
        //         chitiet={products_data()[i].detail}>
        //         </One>
        //     );
        // }
        return(
            <div>
                {this.state.map(value=>{
                    return(<One image={value.image} name={value.name}></One>)
                })
                }
            </div>
        //     <div>
        //             <div id="right-content">
                     
        //                 <h2>Product: </h2>
        //                 <div id="products">
        // {rows}
        //                      <div style={{clear:'both'}} />
        //                      </div>
        //                      <div style={{clear:'both'}} />
        //                      </div>
        //                      <div style={{clear:'both'}} />
        //                     </div>
           
            
        );
        
    }
}

export default State;