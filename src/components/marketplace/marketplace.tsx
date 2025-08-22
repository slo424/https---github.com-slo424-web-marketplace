import { Suspense, useEffect, useRef, useState } from "react";
// import {useRef, useState} from "react";
import "./marketplace.css";
import FooterComponent from "../partials/footer/footer";
// import Catergories from "../partials/catergories/catergories";
import CategoryComponent from "../partials/category/category";
import { useNavigate } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';

type Category = {
  id: number,
  enumValue: string,
  text: string,
  dealIds: [number],
  // deals: [];
  deals : Deal[]
};

type Merchant = {
  id: number,
  name: string,
  webUrlName: string
}

type Deal = {
  id: number,
  merchant: Merchant,
  bonusValType: string,
  discountPercent: number,
  key: number,
  price: number
}

function Marketplace() {
  const navigate = useNavigate();
    
  // dealCategoryData : { bisCategories: any[]; campaigns: any[]; deals: any[] } | undefined;
   const [dealsData, setDealsData ] = useState({
          bisCategories: [],
          campaigns: [{}],
          deals:  []
        });

    const [merchantID, setMerchantId] = useState(-1);
    const [dataLoaded, setDataLoaded] = useState(false);


    useEffect(() => {
      async function getCategoriesData() {
        fetch(`http://localhost:8080/deals`)
      // axios.get(`http://localhost:3000/deals`)
      .then((res) => res.json())
      .then((data) => {
        setDealsData(data)
        console.log('deals data obtained!');
        setDataLoaded(true);
        setupDeals(data);
      })
      }
    
      getCategoriesData();
      return () => {
        // code want to run on unmount
      }
    }, []) //<-- dependency array

    
      function setupDeals(dealsData : {bisCategories: [], campaigns: [{}], deals:  []}) {
        
        if (dealsData != null && dealsData.bisCategories != null && dealsData.bisCategories.length > 1) {
          dealsData.bisCategories.forEach((category : Category) => {
            // console.log(category);
            const deals = dealsData.deals.filter(function(deal:Deal){
              return category.dealIds.indexOf(deal.id) < 0;
            });
            category.deals = deals;
          })
        }
      }

    function getCategoryDeals(dealIds: [number]) : Deal[] {
      return dealsData.deals.filter((deal:Deal) => dealIds.includes(deal.id));
    }
    
    // function getMerchantById(merchantId: number) {
    //   return axios.get(`http://localhost:8080/deals/`+merchantId)
    //   // axios.get(`http://localhost:3000/deals`)
    //   .then(res => {
    //     if (res != null) {
    //       // setDealsData(res.data)
    //       console.log(res.data);
    //       // if (res != null && res.data != null)
    //       return res.data;
    //       // console.log(res.data.deals.length);
    //       // return null;
    //     }
    //   })
    // }
    // useEffect(() => {
    //   async function getMerchantById() {
    //     if (merchantID > -1) {
    //       fetch(`http://localhost:8080/deals/`+merchantID)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         // setDealsData(data)
    //         console.log('deal data obtained!');
    //         console.log(data);
    //         return data != null ? data : null;
    //       })
    //     }
    //   }
    
    //   getMerchantById();
    // }, [merchantID]) //<-- dependency array

    function showMarketPlace() : any {
      // this.router.navigate([AppRoutes.MARKETPLACE]);
      // navigate("/")
      // return <Navigate to="/" />;
    }

    const inputRef = useRef<HTMLInputElement | null>(null);
    let ifShow = false;
    const [isShown, setIsShown] = useState(false);

    function toggleShow() {
      ifShow = true;
      setIsShown((isShownn => !isShownn));
    }

    // async function checkOutMerchant(merchantId : number) {
    //   console.log("M ID:" + " " + merchantId);
    //   let merchant = await getMerchantById(merchantId);
    //   if (merchant != null) {
    //     console.log('Merchant found!');
    //     console.log(merchant);
    //     navigate('/' + merchantId, {state:{merchant:merchant}});
    //   }
    // }
    async function checkOutMerchant(merchantId : number) {

    }  
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function updateName(event : any): void {
    setName(event.target.value)
  }

  function updateAge(event: any): void {
    setAge(event.target.value);
  }

  function submitForm(){
    const postBody = {
      name: name,
      age: age    
    };
    fetch('http://localhost:8080/deals/data', {
      method: 'POST',      
      headers: {      
        'Content-Type': 'application/json'      
      },      
      body: JSON.stringify(postBody)      
    });
  }

  

    return (
      <Suspense fallback={<div>Loading...</div>}>
      {
        dealsData.bisCategories.map((merchantProps: Category) => {
          return (
            <CategoryComponent id={merchantProps.id} enumValue={merchantProps.enumValue} text={merchantProps.text} getMerchant={setMerchantId} deals={merchantProps.deals}></CategoryComponent>
          )
        })
      }
      </Suspense>
    );
  // }
}

export default Marketplace;