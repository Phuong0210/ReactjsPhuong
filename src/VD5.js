import React, {Component} from "react";
import products_data from "./data";
import Output from "./Vd55";
class Vd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: <div>Trang chủ</div>
        };
    }
    Nam=()=>{
        let data= products_data('products');
        data = data['Nam'].map(element=>{
            // eslint-disable-next-line react/jsx-no-undef
            return <Output name={element.name} price={element.price} detail={element.detail} discount={element.discount} image={element.image}></Output>
            })
        this.setState({home:data})
    }
    Nu=()=>{
        let data= products_data('products');
        data = data['Nu'].map(element=>{
            // eslint-disable-next-line react/jsx-no-undef
            return <Output name={element.name} price={element.price} detail={element.detail} discount={element.discount} image={element.image}></Output>
            })
        this.setState({home:data})
    }
    Home=()=>{
        this.setState({home:<div>Trang chủ</div>})
    }
    Treem=()=>{
        let data= products_data('products');
        data = data['Treem'].map(element=>{
            // eslint-disable-next-line react/jsx-no-undef
            return <Output name={element.name} price={element.price} detail={element.detail} discount={element.discount} image={element.image}></Output>
            })
        this.setState({home:data})
    }
}
export default Vd;
