import React from 'react';
import aboutpicture from '../../images/about1 (1).png'

const About = () => {
    return (
        <div className="container px-4 mt-5">
            <div className="">
                <div>
                    <h2 className='text-center text-success mt-5 pt-4 mb-5'>We Provide You The Best Experience</h2>
                    <div className="p-1 d-flex justify-content-center align-items-center">
                        <img className='w-25 fixed rounded-3' src={aboutpicture} alt="" />
                    </div>
                </div>
                <div>
                    <div className="p-3 text-center">

                        <div>
                            <h4 className='text-success'>Our Goal:</h4>
                            <p className='fs-5'>Our goal is to get best product and deliver our product in such a way that ensure the higest quality.To ensure that we develop a very unique system to maintain our product 24/7.</p>
                        </div>
                        <div>
                            <h4 className='text-success'>Our Commitment:</h4>
                            <p className='fs-5'>we are not only intersted but also commited to give you our best services.</p>
                        </div>
                        <div>
                            <h4 className='text-success'>Contact us at : 01522888888 </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;