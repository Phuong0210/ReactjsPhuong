//import Numberone from './test';
import React, { Component } from 'react';
import './App.css';
import Content from './component/content/content';
//import Content from './component/content/content';

// function App() {
//   return (
//     <div className="App">
//     <div className="container">
//       <div className="row">
//         <Numberone tieude="Sản phẩm 1" linkanh="https://vinatex.com.vn/wp-content/uploads/2020/06/rose-saint-laurent-thu-dong-2020-wireimage-682x1024.jpg"></Numberone>
//         <Numberone tieude="Sản phẩm 2" linkanh="https://vinatex.com.vn/wp-content/uploads/2020/06/rose-saint-laurent-thu-dong-2020-wireimage-682x1024.jpg"></Numberone>
//         <Numberone tieude="Sản phẩm 1" linkanh="https://vinatex.com.vn/wp-content/uploads/2020/06/rose-saint-laurent-thu-dong-2020-wireimage-682x1024.jpg"></Numberone>
//         <Numberone tieude="Sản phẩm 1" linkanh="https://vinatex.com.vn/wp-content/uploads/2020/06/rose-saint-laurent-thu-dong-2020-wireimage-682x1024.jpg"></Numberone>
//       </div>
//     </div>
//   </div>
//   );
// }

// export default App;
function App(){
  return(
    <div id="container">
      <Content></Content>
    </div>
  )
}
export default App;
