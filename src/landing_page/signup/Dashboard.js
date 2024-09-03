
import React from "react";

function Dashboard(){
    return(
        <div className="container text-center">
           <div >
            <img style={{width:"20%"}} src="https://as1.ftcdn.net/v2/jpg/03/45/63/64/1000_F_345636439_ejSSimOdYlqo4SznKC55zJJTmgnsgX1B.jpg"/>
            <img className="pt-5" src="media\images\growth-3078543_1920.png" style={{width:"60%"}}/>
            </div>  
            <div className="mb-5 p-4">
              <button className="px-5"><a style={{textDecoration:"none" ,color:"black"}} href="https://zerodhadashboard001.netlify.app/">Continue...→</a></button>
            </div>
        </div>
    )
}

export default Dashboard;