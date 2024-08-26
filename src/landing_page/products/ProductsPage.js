import React from "react";
import Hero from "./Hero";
import Left_img from "./Left_img";
import Right_img from "./Right_img";
import Universe from "./Universe";


function ProductsPage(){
    return(
       <>
           <Hero/>
           <Left_img  imageURl= "media/images/kite.png" 
           productName ="Kite" productDescription ="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
           link_1= "Try demo →" link_2 ="Learn more →" googlePlay ="" appStore="" />
           
           <Right_img imageURl="media/images/console.png"
            productName="Console"
            productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
            link_1="Learn more →"/>

           <Left_img  imageURl= "media/images/coin.png" 
           productName ="Coin" productDescription ="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
           link_1= "Coin →" link_2 ="" googlePlay ="" appStore="" />
            
           <Right_img imageURl="media/images/kiteconnect.png"
            productName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
            link_1="Kite Connect →"/>

           <Left_img  imageURl= "media/images/varsity.png" 
           productName ="Varsity" productDescription ="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
           link_1= "" link_2 ="" googlePlay ="" appStore="" />
           <Universe/>
       </>
    )
}

export default ProductsPage;