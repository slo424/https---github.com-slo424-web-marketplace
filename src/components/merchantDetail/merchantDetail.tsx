import React, { Component, FC, useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import MerchantDealsType from '../../types/merchantDealsType';
import { Swiper, SwiperSlide } from 'swiper/react';
import MerchantDeal from '../partials/merchantDeal/merchantDeal';
import HeaderComponent from '../partials/header/header';
import FooterComponent from '../partials/footer/footer';

// type DealMerchant = {
//    id: number,
//    name: string,
//    webUrlName: string
//  };
 
//  type Deal = {
//    id: number,
//    merchant: DealMerchant,
//    bonusValType: string,
//    discountPercent: number,
//    key: number
//  };

// interface MerchantProps {
//    merchantDeal: Deal
// }
// class CategoryComponent extends Component<CategoryProps, any> {
// function CategoryComponent(merchantProps : CategoryProps) {
// const merchantDetail: FC<MerchantProps> = (merchantProps) => (
//    <div>
//    <h3>
//     merchantDetail Component
//    </h3>
//    <h1>
//       {merchantProps.merchantDeal.merchant.name}
//    </h1>
//    </div>
// );

// export default merchantDetail;

// class MerchantDetail extends Component<any> {
function MerchantDetail() {
   const location = useLocation();

   const [merchant, setMerchant] = useState({
      name: [],
      id: [],
      deals: []
   });

  useEffect(() => {
   fetch(`http://localhost:8080/deals/${location.state.merchantId}`, {
      method: "GET"
    })
   //  fetch("http://localhost:8080/deals/"+location.state.merchantId)
      .then((res) => res.json())
      .then((data) => {
        setMerchant(data)
      })
  }, []);

   return (
      <div>
         <div id="marketplace-wrapper" className="page-wrapper w-100">
            <HeaderComponent />
            <div id="marketplace-header" style={{ /*backgroundImage: `url(${Background})`, */backgroundRepeat: "no-repeat", backgroundPosition: "center center", backgroundSize: 'cover', color: 'blue', lineHeight : 10}}>
               <h1 className="mt-5 mb-2 d-flex h1 justify-content-center mainTitle text-white">{merchant.name}</h1>
            </div>
         </div>
         <div className="category-row mt-3 ms-3 me-3">
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
                  merchant.deals.map((deal: any) => {
                  return (
                     <SwiperSlide key={deal.key} >
                        <div>
                           <MerchantDeal merchantDeal={deal}></MerchantDeal>
                        </div>
                     </SwiperSlide>
                  )
                  })
               }
            </Swiper>
            </>
         </div>         
        <FooterComponent />


         {/* <h2 className="d-flex ms-3">{this.props.name}</h2>
         // <div>{this.props.id} || {this.props.deals.length} </div> 
         <div className="category-row">
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
                  this.props.deals.map((deal: Deal) => {
                  return (
                     // <SwiperSlide key={deal.key}><div>ABC</div></SwiperSlide>
                     <SwiperSlide key={deal.key} >
                        <div onClick={() => this.props.selectMerchant(deal.merchant.id)}>                      
                        //  <div onClick={() => this.navigate('/' + deal.merchant.id)}> *
                        <MerchantDeal merchantDeal={deal}></MerchantDeal>
                        </div>
                     </SwiperSlide>
                  )
                  })
               }
            </Swiper>
            </>
         </div> */}
      </div>
   );
}
export default MerchantDetail;