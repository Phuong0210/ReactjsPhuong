import React,{Component} from "react";
import RightContent from "./right/right";
class Content extends Component {
    render() {
        return (
            <div id="content">
                <RightContent></RightContent>
                <div style={{clear: 'both'}}/>
            </div>
        );
    }
}
export default Content;
