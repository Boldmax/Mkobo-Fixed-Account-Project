import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../LandingPage/Ellipse2.png";
import image2 from "../LandingPage/Ellipse3.png";
import image3 from "../LandingPage/Ellipse4.png";

export default function Testimonies() {
    return (
        <div className="testimony-main">
            <h2>What our investors are saying</h2>
            <div className="content-position">
                <div className="testimony-prop">
                    <div className="testimony">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={image1} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <blockquote className="blockquote">
                                    <p class="card-text"><span>&#8220;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non donec adipiscing a id. Eu, quam duis tellus morbi vitae laoreet. Eget faucibus eget sed vel id scelerisque in mi cursus. <span>&#8221;</span></p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={image2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <blockquote className="blockquote">
                                    <p class="card-text"><span>&#8220;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non donec adipiscing a id. Eu, quam duis tellus morbi vitae laoreet. Eget faucibus eget sed vel id scelerisque in mi cursus. <span>&#8221;</span></p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="testimony">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={image3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <blockquote className="blockquote">
                                    <p class="card-text"><span>&#8220;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non donec adipiscing a id. Eu, quam duis tellus morbi vitae laoreet. Eget faucibus eget sed vel id scelerisque in mi cursus. <span>&#8221;</span></p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
