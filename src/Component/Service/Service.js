import React from 'react';
import { PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, picture, servicename, price, details } = service;
    return (
        <div className='text-slate-300'>
            <div className="card rounded w-96 bg-base-300 bg-black shadow-xl h-full">
                <figure className="px-1 pt-1">
                    <PhotoView src={picture}>
                        <img className='rounded' src={picture} alt="" />
                    </PhotoView>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{servicename}</h2>
                    <h3 className="card-title text-emerald-500">{price}</h3>
                    <p>{details?.slice(0, 100)}</p>
                    <p></p>
                    <div className="card-actions">
                        <Link to={`/photo-service/${_id}`}><button className='btn btn-primary'>See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;