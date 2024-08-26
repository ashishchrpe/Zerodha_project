import React from "react";

function Hero(){
    return(
        <div className="container " style={{margin:0,padding:0}} >

          <div className="row pt-5" style={{backgroundColor:"#478DF7",width:"115%"}}>
           
            <div className="col-4" style={{display:"flex",justifyContent:"space-between", color:"#fff", width:"80%", marginLeft:"8%"}}>
                
                <div><h4 className="">Support Portal </h4></div>
                <div className=""><a href="" style={{color:"#fff"}}>Track tickets</a></div>
            </div>
            
            <div className="row mt-5 mb-5 pb-5" style={{color:"#fff"}}>
                <div className="col-1"></div>
               <div className="col-6">
                 
                 <h4 className="mb-5">Search for an answer or browse help topics to create a ticket </h4>
                 <input style={{width:"90%" ,margin:"0 auto"}} className="p-3" placeholder="Eg: how do i activate F&O, why is my order gatting rejected ... "/>
                 <p className="mt-3" style={{fontSize :"19px"}}>
                    
                    <a href="" style={{color:"#fff"}} className="mr-3">Track account opening</a>
                    <a href="" style={{color:"#fff"}} className="mx-3">Track segment activation</a>
                    <a href="" style={{color:"#fff"}} className="mx5 " >Intraday margins   </a>
                    <br/>
                    <a href="" style={{color:"#fff"}} className="mx-2">Kite user manual</a>
                 </p>
                 
               </div>
               <div className="col-5 pt-5 ">
                  <h4 className="mb-3">Featured</h4>
                  <ol className="mt-3" style={{fontSize :"17px"}}>
                    <li className="mb-3"><a href="" style={{color:"#fff"}}>Surveillance measure on scrips - August 2024</a></li>
                    <li><a href="" style={{color:"#fff"}}>Latest Intraday leverages and Square-off timings</a></li>
                  </ol>
               </div>
            </div>
         </div>
        </div>
    )
}

export default Hero;