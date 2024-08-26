import React from "react";

function Brokerange(){
    return(
        <div className="container">
             <div className="row text-center mt-5 mx-5 p-5 border-top border-bottom">
                <div className=""></div>
                <div className="col-4 ">
                      <img src="media/images/pricing0.svg" style={{width:"85%"}}/>
                      <h3 className="mb-3">Free equity delivery</h3>
                      <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4">
                      <img src="media/images/intradayTrades.svg" style={{width:"85%"}}/>
                      <h3 className="mb-3">Intraday and F&O trades</h3>
                      <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

                </div>
                <div className="col-4">
                      <img src="media/images/pricing0.svg" style={{width:"85%"}}/>
                      <h3 className="mb-3">Free direct MF</h3>
                      <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
             </div>
            
        </div>
    )
}

export default Brokerange;