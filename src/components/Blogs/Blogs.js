import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5 pt-4'>
            <div>
                <h4>1. Difference between javascript and nodejs?</h4>
                <p className='fs-5 fst-italic'>Ans :</p>
                <p className='fs-5 fst-italic'>a) Javascript is a programming language that is used for writing scripts on the website on the other hand NodeJS is a Javascript runtime environment.</p>
                <p className='fs-5 fst-italic'>b) Javascript can only be run in the browsers but we can run Javascript outside the browser with the help of NodeJS.</p>
                <p className='fs-5 fst-italic'>c) It is basically used on the client-side on the other hand it is mostly used on the server-side.</p>
                <p className='fs-5 fst-italic'>d) Javascript is capable enough to add HTML and play with the DOM but Nodejs does not have capability to add HTML tags.</p>
                <p className='fs-5 fst-italic'>e) Example of the javascript frameworks are RamdaJS, TypedJS etc. on the other Some of the Nodejs modules are Lodash, express etc.</p>
            </div>
            <div>
                <h4>2. When should you use nodejs and when should you use mongodb?</h4>
                <p className='fs-5 fst-italic'>a) Ans : Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p>
                <p className='fs-5 fst-italic'>b) Ans : MongoDB are a good choice when my data is document-centric and doesn't fit well into the schema of a relational database, when i need to accommodate massive scale, when i am rapidly prototyping, and a few other use cases.</p>
            </div>
            <div>
                <h4>1. Differences between sql and nosql databases?</h4>
                <p className='fs-5 fst-italic'>Ans :</p>
                <p className='fs-5 fst-italic'>a) The full form of SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM on the other hand NoSQL is Non-relational or distributed database system.</p>
                <p className='fs-5 fst-italic'>b) SQL databases have fixed or static or predefined schema on the other hand NoSQL have dynamic schema.</p>
                <p className='fs-5 fst-italic'>c) SQL databases are best suited for complex queries but NoSQL databases are not so good for complex queries</p>
                <p className='fs-5 fst-italic'>d) SQL databases are Vertically Scalable but NoSQL databases are Horizontally scalable</p>
            </div>
            <div>
                <h4>2. What is the purpose of jwt and how does it work?</h4>
                <p className='fs-5 fst-italic'>a) Ans : JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. In short, JWTs are used as a secure way to authenticate users and share information. Each JWT contains encoded JSON objects, including a set of claims. Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn't been altered after it was signed by the issuer.</p>
            </div>

        </div>
    );
};

export default Blogs;