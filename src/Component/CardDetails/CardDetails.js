import React, { useContext } from 'react';
import { PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const CardDetails = () => {
    const { user } = useContext(AuthContext)
    const { details, picture, price, rate, servicename, _id } = useLoaderData();
    // console.log(user)

    const handeleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;


        const reviewing = {
            name: user.displayName,
            address: user.email,
            photo: user.photoURL,
            reviewed: review,
            location: _id,
            seviceimg: picture,
            servicename: servicename  
        }
        // console.log(reviewing)

        fetch('https://sunshine-1-server.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewing)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div className='pding'>
            {/* card Details */}
            <div className=" w-full bg-base-100 shadow-xl">
                <figure className='flex justify-center'>
                    <PhotoView src={picture}>
                        <img src={picture} alt="phot" />
                    </PhotoView>
                    {/* <img src={picture} alt="imag" /> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{servicename}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <h2 className="card-title">Rate: {rate}</h2>
                    <p>{details}</p>
                </div>
            </div>
            {/* service Comment */}
            <div>
                <div>
                    <h2>Type Your review</h2>
                    <form onSubmit={handeleReview}>
                        <input type="text" name='review' placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;