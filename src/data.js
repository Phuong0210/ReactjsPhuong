
function products_data(dataName){
    switch(dataName){
        case "products":
        const products=[
            {
                id: "1",
                name:"LUMIA 1",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCctGTxMI7cOkhs1M0C41LbQ5V4cLX8qllbQ&usqp=CAU",
                price:"12000",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"26"
            },
            {
                id: "2",
                name:"LUMIA 1",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnc-zPHEtwD3LjcknsjyC5FOW7Z-oHyS2VJAknDZFu0M2eFQgKmHHdEFjiPJVF5DghHM&usqp=CAU",
                price:"12000",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"24"
            },
            {
                id: "12",
                name:"LUMIA 1",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnc-zPHEtwD3LjcknsjyC5FOW7Z-oHyS2VJAknDZFu0M2eFQgKmHHdEFjiPJVF5DghHM&usqp=CAU",
                price:"12000",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"24"
            },
            {
                id: "15",
                name:"LUMIA 1",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrO3Vi97PSsHobRLyBgZWE4B5sdoSPcFImw&usqp=CAU",
                price:"12000",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"26"
            },{
                id: "17",
                name:"LUMIA 1",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrO3Vi97PSsHobRLyBgZWE4B5sdoSPcFImw&usqp=CAU",
                price:"12000",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"28"
            }
     
        ]
        return products;
      case "categories":
        const categories=[
            {
                id_cate:"26",
                title:"Nam",
                description:"DIGITAL CAMERA NEW 1",
            },
            {
                id_cate:"28",
                title:"Nu",
                description:"DIGITAL CAMERA NEW 2",
            },
            {
                id_cate:"24",
                title:"Treem",
                description:"DIGITAL CAMERA NEW 3",
            }
            
     
        ]
        return categories;  
    }
  
}
export default products_data;
