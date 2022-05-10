function products_data(dataName){
    switch(dataName){
        case "products":
        const products=[
            {
                id: "1",
                name:"LUMIA 1",
                image: "https://vn.canon/media/image/2019/07/08/8d0db401031e4decbdf0d82dce54c796_G7+X+mkIII+BK+Front.png",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"2"
            },
            {
                id: "2",
                name:"LUMIA 1",
                image: "https://vn.canon/media/image/2019/07/08/8d0db401031e4decbdf0d82dce54c796_G7+X+mkIII+BK+Front.png",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"22"
            },
            {
                id: "12",
                name:"LUMIA 1",
                image: "https://vn.canon/media/image/2019/07/08/8d0db401031e4decbdf0d82dce54c796_G7+X+mkIII+BK+Front.png",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"24"
            },
            {
                id: "15",
                name:"LUMIA 1",
                image: "https://vn.canon/media/image/2019/07/08/8d0db401031e4decbdf0d82dce54c796_G7+X+mkIII+BK+Front.png",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"26"
            },{
                id: "17",
                name:"LUMIA 1",
                image: "https://vn.canon/media/image/2019/07/08/8d0db401031e4decbdf0d82dce54c796_G7+X+mkIII+BK+Front.png",
                detail:"DIGITAL CAMERA NEW",
                id_cate:"28"
            }
     
        ]
        return products;
      case "categories":
        const categories=[
            {
                id_cate:"26",
                title:"LUMIA 1",
                description:"DIGITAL CAMERA NEW",
            },
            {
                id_cate:"28",
                title:"LUMIA 1",
                description:"DIGITAL CAMERA NEW",
            },
            {
                id_cate:"24",
                title:"LUMIA 1",
                description:"DIGITAL CAMERA NEW",
            },
            {
                id_cate:"22",
                title:"LUMIA 1",
                description:"DIGITAL CAMERA NEW",
            },{
                id_cate:"2",
                title:"LUMIA 1",
                description:"DIGITAL CAMERA NEW",
            }
     
        ]
        return categories;  
    }
  
}
export default products_data;
