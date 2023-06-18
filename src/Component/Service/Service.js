import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, picture, servicename, price, details } = service;
    return (
        <div>
            <div className="card w-96 h-full">
                <figure className="px-1 pt-1">
                    <PhotoView src={picture}>
                        <img src={picture} alt="" />
                    </PhotoView>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{servicename}</h2>
                    <h3 className="card-title" style={{color: '#2196f3'}}>Price: {price}</h3>
                    <p className='text-left'>{details?.slice(0, 100)}...</p>
                    <div className="card-actions">
                        <Link className='flex' to={`/photo-service/${_id}`}>
                            <span className='fontsizee'>See Details</span>
                            <span className='px-6 py-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;