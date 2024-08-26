import React from "react";

function Left_img({imageURl,productName,productDescription, link_1,link_2, googlePlay,appStore}){
    return(
        <div className="container">
            <div className="row p-5">
               
                <div className="col-7 px-5">
                    <img src={imageURl}  />
                </div>
                <div className="col-4">
                <h1 className="my-5 ">{productName}</h1>
                <p className="mb-4 ">{productDescription}</p>
                <a href="" style={{textDecoration:"none" }} className="fs-6">{link_1}</a>
                
                <a href="" style={{textDecoration:"none"}} className="fs-6 px-3"> {link_2}</a>

                <p className="mb-2 mt-4">
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/> </a>
                    <a href={appStore}><img src="media/images/appStoreBadge.svg"/></a>
                </p>
               
                </div>
            </div>
        </div>
    )
}

export default Left_img;