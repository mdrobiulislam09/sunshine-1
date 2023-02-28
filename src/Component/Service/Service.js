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
                    <h3 className="card-title text-emerald-500">Price: {price}</h3>
                    <p className='text-left'>{details?.slice(0, 100)}...</p>
                    <div className="card-actions">
                        <Link to={`/photo-service/${_id}`}><span className='fontsizee'>See Details</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;