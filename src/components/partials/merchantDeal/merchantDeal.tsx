import React, { Component } from 'react';
import "./merchantDeal.css";

type DealMerchant = {
   id: number,
   name: string,
   webUrlName: string
 };
 
 type Deal = {
   id: number,
   merchant: DealMerchant,
   bonusValType: string,
   discountPercent: number,
   key: number,
   price: number
 };

interface MerchantProps {
   merchantDeal: Deal
}


function MerchantDeal(merchantProps : MerchantProps) {
   const merchant = merchantProps.merchantDeal.merchant;
   const deal = merchantProps.merchantDeal

    return (
      <div id='merchant-deal'>
        <div className="deal-item-image"><div style={{width: "150px", height: "150px", backgroundColor: "green"}}></div></div>
        <div className="card-body">
          {merchantProps.merchantDeal.merchant && merchantProps.merchantDeal.merchant.name && (
              <h3>{merchantProps.merchantDeal.merchant.name}</h3>
          )}
          {deal && merchant.name && deal.discountPercent > 0 && (
            <h3>{deal.discountPercent}% Off</h3>
          )}
          <h3>${(deal.price / 100).toFixed(2)}</h3>
        </div>
      </div>
    );
  }

export default MerchantDeal;
