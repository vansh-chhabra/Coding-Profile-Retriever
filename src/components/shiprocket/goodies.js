import React from "react";
import shiprocket from "../../API-Get/shiprocket";
import './Goodies.css'

function Goodies(){
    // console.log("hello");
    shiprocket('191686343');
    
    return (
        <React.Fragment>
            <div className='goodies-wrapper'>
                <div className='goodies-img-container'>
                    <img src='https://cdn.shopify.com/s/files/1/0035/1309/0115/products/Organic-Cotton-Hoodie-Jade-Green-1.jpg?v=1632498845'/>
                </div>
                <div className='goodies-data-container'>
                    <div className='goodies-title'>
                        Green Hoodie
                    </div>
                    <div className='goodies-number'>
                        AWB Code: <span id="sr-awb-code">Loading</span>
                    </div>
                    <div className='goodies-consignee'>
                        Consignee Name: <span id="sr-consignee-name"></span>
                    </div>
                    <div className='goodies-address'>
                        <div className='goodies-from'>
                            From : <span id="sr-origin"></span>
                        </div>
                        <div className='goodies-to'>
                            To : <span id="sr-destination"></span>
                        </div>
                    </div>
                </div>
                <div className='goodies-status'>
                    <span id="sr-current-status"></span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Goodies;