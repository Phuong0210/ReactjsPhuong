import React, {Component} from "react";
import products_data from '../src/data'
import ReactDOM from 'react-dom';

// eslint-disable-next-line no-undef
// class Car extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year :1964
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}
//         </p>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Car/>, document.getElementById('root'));
class App2 extends Component {
  constructor(props){
      var arr =  products_data();
    super(props);
    this.state = {arr}
    
  }
  
  render() {
    return (
      <div>{
        this.state.arr.map(key=>
            <div> 
                <img src="{key.image}" alt=""/>
                <h2>{key.name}</h2>
              <h2>{key.detail}</h2>
              </div>
              ) 
                 }
      </div>
    );
  
}
}
export default App2;

// import ReactDOM from 'react-dom/client';
//         function Avatar(props){
//             return(
//                 <div className="avatar">
//                     <img src={props.info.path} alt=""/>
//                 </div>
//             )
//         }
//         function MemberInfo(props){
//             return(
//                 <div className="info">
//                     <h2>{props.info.name}</h2>
//                     <p>Tuổi: {props.info.age}</p>
//                 </div>
//             )
//         }
//         function Comment(props){
//             return (
//                 <div className="comment">
//                     {props.text}
//                 </div>
//             )
//         }
//         function Member(){
//             return (
//                 <div className="member">
//                     <Avatar info={member.info}/>
//                     <MemberInfo info={member.info}/>
//                     <Comment text={member.text} />
//                 </div>
//             )
//         }
//         const member={
//             text:'Lorem ipsum sit amet, consectetur adipiscing elit proin sit amet neque.',
//             info:{
//                 path:'https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg',
//                 name:'Nguyễn Văn A',
//                 age:20
//             }
//         }
//         ReactDOM.render(
//             <Member/>,
//             document.getElementById('member')
//         );
