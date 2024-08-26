import React from "react";
import Hero from "./Hero";
import Brokerange from "./Brokerange";
import OpenAccount from "../OpenAccount";
import BrokerangeList from "./BrokerangList";

function PricingPage(){
    return(
        <>
            <Hero/>
            <Brokerange/>
            <OpenAccount/>
            <BrokerangeList/>
        </>
    )
}

export default PricingPage;