import React from 'react';

const Blog = () => {
    return (
        <div className='pding'>
            <div>
            <div className='m-10'>
                <h1 className='text-3xl text-blue-600 '>1. Difference Between SQL and NOSQL</h1>
                <p>a. SQL databases are primarily called as Relational Databases (RDBMS);
                    whereas NoSQL database are primarily called as non-relational or distributed database. <br />
                    b. SQL databases defines and manipulates data based structured query language (SQL).
                    Seeing from a side this language is extremely powerful. A NoSQL database has dynamic
                    schema for unstructured data. Data is stored in many ways which means it can
                    be document-oriented, column-oriented, graph-based or organized as a KeyValue store.
                    c.A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways
                    which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store
                </p>
            </div>
            <div className='m-10'>
                <h1 className='text-3xl text-blue-600 '>2. What is JWT? How does it work?</h1>
                <p>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client
                    and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a
                    cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit
                    information between two parties. What these claims are depends on the use case at hand. For example,
                    a claim may assert who issued the token, how long it is valid for, or what permissions the client
                    has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized
                    using base64. In the most common serialization format, compact serialization, the JWT looks something
                    like this: xxxxx.yyyyy.zzzzz.
                </p>
            </div>
            <div className='m-10'>
                <h1 className='text-3xl text-blue-600 '>3. What is difference between JS and NodeJS ?</h1>
                <p>
                    a. Javascript is a programming language that is used for writing scripts on the website. <br />
                    NodeJS is a Javascript runtime environment. <br />
                    b. Javascript can only be run in the browsers. <br />
                    We can run Javascript outside the browser with the help of NodeJS. <br />
                    c. It is basically used on the client-side. <br /> 	It is mostly used on the server-side. <br />

                    d. Javascript is capable enough to add HTML and play with the DOM. <br />
                    Nodejs does not have capability to add HTML tags.
                </p>
            </div>
            <div className='m-10'>
                <h1 className='text-3xl text-blue-600 '>4. How does NodeJS handle multiple request at the same time ?</h1>
                <p>
                    How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places
                    them into EventQueue. NodeJS is built with the concept of event-driven architecture.
                    NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them
                </p>
            </div>
        </div>
        </div>
    );
};

export default Blog;