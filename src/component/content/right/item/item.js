import React, { Component } from 'react';
class Item extends Component {
    render() {
        return (
            <div className="product">
                <div className ="text">
                    <div className="p-name">
                        { /*<a href="item,html"></a>*/}

                        <a href="item.html">{this.props.tenSP}</a>
                    </div>
                </div>
                <div className="p-img">
                    <img src= {this.props.anh} width={200} height={200}/>
                </div>
                <div className="text">
                    <div className="p-cat">{this.props.chiTiet}</div>
                    <div className="p-price">Please call</div>
                    <input
                    type="button"
                    className="button"
                    name="add"
                    defaultValue="Add to cart"></input>
                </div>
            </div>
        );
    }
}
export default Item;

// class Item extends Component {
//     render() {
       
//         const affterClick = (tenSP) => {
//             alert("Order Succesfull " + this.props.tenSP)           
//         }
//         return (
//             <div className="product">
//                 <div className="text">
//                     <div className="p-name">
//                         {/*<a href="item.html>LUMIX DCM-G2</a>*/} 
//                         <a href="item.html">{this.props.tenSP}</a> 
//                     </div>
//                 </div>
//                 <div className="p-img">
//                     <img src={this.props.anh} width={200} height={200} />
//                 </div>
//                 <div className="text">
//                     <div className="p-cat">{this.props.chitiet}</div>
//                     <div className="p-price">Please call</div>
//                     <input 
//                         type="button"
//                         className="button"
//                         name="add"
//                         defaultValue="Add to cart"
//                         onClick={affterClick}
//                     />
//                 </div>
//                 <div className="clear" />  
//             </div>
//         

//         );
//     }
// }

// export default Item;
