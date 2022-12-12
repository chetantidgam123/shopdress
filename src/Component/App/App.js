import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Carddetails from "../PaymentPage/Carddetails";
import { BasicUsage } from "../PaymentPage/PaymentModal";
import PaymentPage from "../PaymentPage/PaymentPage";
import PaymetSuccess from "../PaymentPage/PaymetSuccess";

import Practice from "../PaymentPage/practice";

import ProductDetails from "../ProductDetails/ProductDetails";

import ProductPages from "../ProductPages/ProductPages"

import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "../TESTING/DROP";
import Allroutes from "../AllRoutes/Allroutes";

function App() {
 
  return (
    <div className="App">

   <Navbar/>
   <Cart/>

   <Allroutes/>
    <BasicUsage/>

   {/* <Login/>
    <br/>
   <br/>
   <BasicUsage/>
   <br/>
   <br/>



  
   
   <br/>
   <br/>
  //  <PaymetSuccess/>  */}
  {/* //  <ProductPages/> */}
  {/* <ProductDetails/> */}
  
  {/* {payment===true?<Carddetails/>:<PaymentPage setpayment={setpayment} payment={payment}/>} */}
  {/* {complete===true?<Successfull/>:<Carddetails complete={complete} setcomplete={setcomplete}/>} */}
    
    {/* <PaymentPage/> */}
    <Footer/>

    </div>
  );
}

export default App;