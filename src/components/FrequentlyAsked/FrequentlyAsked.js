import React from 'react';
import { Accordion } from 'react-bootstrap';
import faq1 from "../../images/faq1.png"

const FrequentlyAsked = () => {
    return (
        <div className='mt-4 pt-5'>
            <section className="container my-2 py-1">
                <h2 className="display-5 text-success fw-bold text-center mb-5 pb-4">Frequently Asked Questions</h2>
                <div className="row d-flex justify-content-center align-items-center  mt-4 pt-2 px-4">
                    <div className="col-md-6 col-lg-6 order-1 order-sm-1 order-md-1 order-lg-1">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How much experience do you have?</Accordion.Header>
                                <Accordion.Body>
                                    My years of experience have prepared me well for this position. I have been learning warehouse maintenance for seven years now. I spent three years working in a warehouse, gathering some valuable experiences.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Why do you feel customer service is so important?</Accordion.Header>
                                <Accordion.Body>
                                    Great customer service can increase customer loyalty, grow the amount of money each customer spends per visit increase how often a customer buys from you and Generate positive word-of-mouth about your business
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How Big is the Warehouse?</Accordion.Header>
                                <Accordion.Body>
                                    It's an average size Warehouse.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How do you collaborate with others?</Accordion.Header>
                                <Accordion.Body>
                                    I collaborate with others professionaly.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How much safe is your warehouse?</Accordion.Header>
                                <Accordion.Body>
                                    It is built with all the safety measures and regularly checkd by an expert.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="col-md-6 col-lg-6 d-flex justify-content-center align-items-center mt-5 mb-4  pb-4 order-2 order-sm-2 order-md-2 order-lg-2">
                        <img className="w-100 fixed rounded-3" src={faq1} alt="" />

                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrequentlyAsked;