import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import logo from '../../images/warehouse-logo2 .png'
import banner1 from '../../images/banner2.png';
import banner2 from '../../images/banner3.png';
import banner3 from '../../images/banner1.png';
import '../Banner/Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='container mt-3' >
            <div className='d-flex justify-content-center align-items-center gap-3'>
                <div>
                    <img height={70} src={logo} alt="logo" />
                </div>
                <div>
                    <h1 className='text-warning'>Groxi warehouse</h1>
                    <h5>A grocery warehouse provided by JR Tanmoy</h5>
                </div>
            </div>
            <div className='mt-3 mb-3'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4 className='text-design'>Happiness is a freshly clean warehouse.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h4 className='text-design'>Trade isn't about goods. Trade is about information. Goods sit in the warehouse until information moves them.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h4 className='text-design'>
                                Freshness is essential. That makes all the difference.
                            </h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;