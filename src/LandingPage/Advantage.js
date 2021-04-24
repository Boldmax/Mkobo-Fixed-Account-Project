import React from 'react'
import image from '../LandingPage/Layer3.png'

export default function Advantage() {
    return (
        <div className="main">
            <h1>Why Choose us</h1>
            <div className="sub-main">
                <div className="illustration">
                    <img src={image} alt=''></img>
                </div>
                <div className="reasons">
                    <div className="reason-card">
                        <h3>Get started with low entry of just ₦100,000</h3>
                        <p>With as low as ₦100,000, you can take advantage of our investemnt
                             opprtunities and make your money work for you.</p>
                    </div>
                    <div className="reason-card">
                        <h3>Earn as much as 15% per annum</h3>
                        <p>Enjoy our mouth watering ROI. Our rates rante from 5% to 15% per annum
                             depending on the amount and the tenor.</p>

                    </div>
                    <div className="reason-card">
                        <h3>Monitor your investment day and night</h3>
                        <p>You can track and manage your investment at your convenience on our portal day and night. 
                            Receive monthly notifications on your investment performance. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
