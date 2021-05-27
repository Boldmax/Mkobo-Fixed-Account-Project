import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-elastic-carousel'
import image1 from "../LandingPage/Ellipse2.png";
import image2 from "../LandingPage/Ellipse3.png";
import image3 from "../LandingPage/Ellipse4.png";


const testimonies = {
    testimony: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non donec adipiscing a id. Eu, quam duis tellus morbi vitae laoreet. Eget faucibus eget sed vel id scelerisque in mi cursus."
}

export default function Testimonies() {
    const breakpoints = [
        { width: 425, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
    ]
    return (
        <div className="testimony-main">
            <h2>What our investors are saying</h2>
            <div className="content-position">
                <div className="testimony-prop">
                    <Carousel breakPoints={breakpoints}>
                        <div className="testimony">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={image1} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <blockquote className="blockquote">
                                        <p class="card-text"><span>&#8220;</span>{testimonies.testimony}<span>&#8221;</span></p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="testimony">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={image2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <blockquote className="blockquote">
                                        <p class="card-text"><span>&#8220;</span>{testimonies.testimony}<span>&#8221;</span></p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="testimony">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={image3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <blockquote className="blockquote">
                                        <p class="card-text"><span>&#8220;</span>{testimonies.testimony}<span>&#8221;</span></p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="testimony">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={image1} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <blockquote className="blockquote">
                                        <p class="card-text"><span>&#8220;</span>{testimonies.testimony}<span>&#8221;</span></p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="testimony">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={image3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <blockquote className="blockquote">
                                        <p class="card-text"><span>&#8220;</span>{testimonies.testimony}<span>&#8221;</span></p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>



    )
}
