import React,{Component} from "react";
import Item from "./item/item";
import products_data from "../../../data";
class RightContent extends Component {
    render() {
        var dis_products = products_data("products");// Các sản phẩm
        var dis_categories = products_data("categories");// Các danh mục
        var items =[];// Các component
        for (var i = 0; i < dis_products.length;i++){
            items[i]= <Item chitiet = {dis_products[i].detail} tenSP = {dis_products[i].name}></Item>
        }
        return (
            <div id="right-content">
               <h2>Product:</h2>
               <div id="products">
                   {items}
                   <div style={{clear: "both"}} />
               </div> 
               <div style={{clear: "both"}} />
            </div>  
        );
    }
}
export default RightContent;
// class RightContent extends Component {
//     render() {
//         var rows=[];
//         for ( var i =0; i< products_data().length;i++){
//             rows.push(
//                 <Item
//                 tenSP={products_data()[i].name}
//                 anh={products_data()[i].image}
//                 chitiet={products_data()[i].detail}>
//                 </Item>
//             );
//         }
//         return (
//                 <div>
//                     <div id="right-content">
                     
//                         <h2>Product: </h2>
//                         <div id="products">
//         {rows}
//                              <div style={{clear:'both'}} />
//                              </div>
//                              <div style={{clear:'both'}} />
//                              </div>
//                              <div style={{clear:'both'}} />
//                             </div>
           
//         );
//     }
// }
// export default RightContent;
