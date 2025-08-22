import React, { Suspense, useEffect, useState } from 'react';
import './App.css';
import Marketplace from './components/marketplace/marketplace';
import { fetchCategories } from './actions/categoryActions';
import axios from './axios';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MerchantDetail from './components/merchantDetail/merchantDetail';
// import axios from "../../axios";

function App() {
  const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   fetchCategories()
  // }, [])

  const fetchCategories = async () => {
    // const response = await fetch('http://localhost:8080/deals');

    // setCategory(await response.json())

  //       axios.get(`http://localhost:8080/deals`)
  //     .then(res => {
  //       console.log(res.data);
  // //       const dealCategoryData = res.data;
  // //       this.setState({ dealCategoryData });
  // //       this.dealCategoryData = dealCategoryData;
  // //       console.log(dealCategoryData);
  //     })
  }

  // return (
  //   // <Provider store={store}>
  //       // <BrowserRouter>
  //         <div className="App">
  //           {/* {!isLoading ? (
  //             <Marketplace bisCategories={bisCategories} deals={deals} loading={isLoading}/>
  //           ) : <div></div>} */}

  //           <Marketplace />
  //           <ol className="list-group list-group-numbered">
  //             {/* {category.} */}
  //           </ol>
  //         </div>
  //       // </BrowserRouter>
  //     // </Provider>
  // );
  
  
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/:id" element={<MerchantDetail />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
