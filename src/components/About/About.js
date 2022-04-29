import React from 'react';
import aboutpicture from '../../images/about1.png'
import '../About/About.css'

const About = () => {
    return (
        <div className="container px-4 mt-5">
            <div className="row gx-5">
                <div className="col">
                    <div className="p-1 d-flex justify-content-center align-items-center">
                        <img className='img-size' src={aboutpicture} alt="" />
                    </div>
                    {/* img-fluid */}
                </div>
                <div className="col">
                    <div className="p-3 text-center">
                        <h2 className='text-primary'>We Provide You The Best Experience</h2>
                        <div>
                            <h4>Our Goal:</h4>
                            <p>Our goal is to provide you the best product.To ensure that we develop a very unique system to maintain our product 24/7.</p>
                        </div>
                        <div>
                            <h4>Our Commitment:</h4>
                            <p>we are not only intersted but also commited to give you our best services.</p>
                        </div>
                        <div>
                            <h4>Contact us at : <span className='text-primary'>01522888888</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;