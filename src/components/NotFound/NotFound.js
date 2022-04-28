import React from 'react';
import { Link } from 'react-router-dom';
import notFoundLogo from '../../images/NotFound1.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <section className='container text-center'>
                <div className=''>
                    <div>
                        <h1>
                            Oops! The page you're looking for isn't here.
                        </h1>
                        <p className=''>
                            You might have the wrong address, or the page may have moved.
                        </p>

                    </div>
                    <div>
                        <div className='error-img'>
                            <img height={180} src={notFoundLogo} alt="" />
                        </div>
                        <span className='around-link'>
                            <Link
                                to='/'
                                className='homepage-link'
                            >
                                Back to homepage
                            </Link>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;