import React, { Component, useRef, useState } from "react";
import "./category.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import MerchantDeal from "../merchantDeal/merchantDeal";
import { getAllJSDocTagsOfKind, StringLiteralType } from "typescript";
import axios from "axios";
import { useNavigate } from "react-router-dom";


type DealMerchant = {
  id: number,
  name: string,
  webUrlName: string
};


// type Merchant = {
//   id: number,
//   name: string,
//   webUrlName: string
// }

type Deal = {
  id: number,
  merchant: DealMerchant,
  bonusValType: string,
  discountPercent: number,
  key: number
  price: number
};

// type Deal = {
//   id: number,
//   merchant: Merchant,
//   bonusValType: string,
//   discountPercent: number,
//   key: number
// }

type CategoryProps = {
  id: number,
  enumValue: string,
  text: string,
  deals: Deal[],
  // toggle: any,
  // selectMerchant: any,
  getMerchant: any
  // setName: any
};


// function getMerchantById(merchantId: number) : any {
//   axios.get(`http://localhost:8080/deals/`+merchantId)
//   // axios.get(`http://localhost:3000/deals`)
//   .then(res => {
//     // setDealsData(res.data)
//     console.log("blah");
//     console.log(res.data);
//     // console.log(res.data.deals.length);
//   })
// }


// class CategoryComponent extends Component<CategoryProps, any> {
function CategoryComponent(categoryProps : CategoryProps) {

  // navigate = useNavigate();

//   merchantClick(merchantId: number) {
//    // function getMerchantById(merchantId: number) : any {
//      axios.get(`http://localhost:8080/deals/`+merchantId)
//      // axios.get(`http://localhost:3000/deals`)
//      .then(res => {
//        // setDealsData(res.data)
//        console.log("blah");
//        console.log(res.data);
//        // console.log(res.data.deals.length);
//      })
//    // }
//  }

//  public render() {
   // function goToInfoPage(arg0: string): React.MouseEventHandler<HTMLParagraphElement> | any {
   //   throw new Error("Function not implemented.");
   // }

   return (
     <div>      
      {/* <h2 onClick={() => {merchantProps.setName("worka?")}}>abc</h2> */}
       <h2 className="d-flex ms-3">{categoryProps.text}</h2>
       {/* <div>{categoryProps.id} || {categoryProps.deals.length} </div>  */}
       <div className="category-row ms-3 me-3">
         <>
           <Swiper
             slidesPerView={5}
             spaceBetween={30}
             pagination={{
               clickable: true,
             }}
             className="mySwiper"
           >
             {
               categoryProps.deals.map((deal: Deal) => {
                 return (
                   // <SwiperSlide key={deal.key}><div>ABC</div></SwiperSlide>
                   <SwiperSlide key={deal.key} >
                     <div onClick={() => categoryProps.getMerchant(deal.merchant.id)}>                      
                       {/* <div onClick={() => this.navigate('/' + deal.merchant.id)}>  */}
                       <MerchantDeal merchantDeal={deal}></MerchantDeal>
                     </div>
                   </SwiperSlide>
                 )
               })
             }
           </Swiper>
         </>
       </div>
     </div>
   );
}

export default CategoryComponent;
