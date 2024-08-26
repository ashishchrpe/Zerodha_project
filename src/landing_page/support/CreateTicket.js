import React from "react";

function CreateTicket(){
    return(
        <div className="container">
        <div className="row mx-5 px-5 mt-4">
            
           <div className="my-5"> 
             <h4>To create a ticket, select a relevant topic</h4>
            
            </div>

           <div className="col-4  ">
                 <h4 className="mb-3"><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                
                 <p  className="px-3"><a href="" style={{textDecoration:"none" }}> Getting started</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}>Online </a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Offline</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Charges</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Company, Partnership and HUF</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}>Non Resident Indian (NRI) </a> </p>
                 
           </div>
           <div className="col-4">
                 
                 <h4 className="mb-3"><i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account</h4>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Login credentials</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Your Profile</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Account modification and segment addition </a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> CMR & DP ID</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}>Nomination </a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}>Transfer and conversion of shares </a> </p>

           </div>
           <div className="col-4">
                 
                 <h4 className="mb-3 "> <i class="fa fa-bar-chart" aria-hidden="true"></i>Trading and Markets</h4>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}>Trading FAQs </a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}>Kite </a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Margins</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Product and order types</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Corporate actions</a> </p>
                 <p className="px-3"><a href="" style={{textDecoration:"none" }}> Kite features</a> </p>
           </div>
           <div className="row py-5">
            <div className="col-4">
                    
                    <h4 className="mb-3 "> <i class="fa fa-credit-card" aria-hidden="true"></i> Funds</h4>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}>Fund withdrawal </a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}> Adding funds</a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}>Adding bank accounts </a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}>eMandates </a> </p>
            </div>
            <div className="col-4">
                    
                    <h4 className="mb-3 "> <i class="fa fa-at" aria-hidden="true"></i> Console</h4>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}>IPO</a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}> Portfolio</a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}> Funds statement</a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}> Profile</a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}> Reports</a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}>Referral program </a> </p>
            </div>
                <div className="col-4">
                    
                    <h4 className="mb-3 "> <i class="fa fa-ravelry" aria-hidden="true"></i> Coin</h4>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}> Understanding mutual funds and Coin</a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}>Coin app </a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}> Coin web</a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}> Transactions and reports</a> </p>
                    <p className="px-3"><a href="" style={{textDecoration:"none" }}>National Pension Scheme (NPS) </a> </p>
            </div>
         </div>
            
        </div>
       
   </div>
    )
}

export default CreateTicket;