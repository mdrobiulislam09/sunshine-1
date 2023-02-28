import React from 'react';

const AddService = () => {

    const handeleService = (event) => {
        event.preventDefault();
        const form = event.target;
        const servicename = form.servicename.value;
        const rate = form.rate.value;
        const url = form.url.value;
        const price = form.price.value;
        const details = form.details.value;

        const servicedetails = {
            picture: url,
            rate,
            servicename,
            details,
            price,
        }

        fetch('https://sunshine-1-server.vercel.app/photo-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(servicedetails)
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

    // picture rate servicename details price



    return (
        <div>
            <h2>Add a Service</h2>
            <form onSubmit={handeleService}>
                <div><input type="text" name='servicename' placeholder="Service Name" className="input input-bordered input-accent w-full max-w-xs" required /></div>
                {/* <div><input type="tel" name='rate'  /></div> */}
                <div>
                    <select name="rate" placeholder="Rate in 5" className="input input-bordered input-accent w-full max-w-xs" required>
                        <option placeholder="Rate in 5" required>Rate in 5</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                    </select>
                </div>
                <div><input type="url" name='url' placeholder="Service Image Url" className="input input-bordered input-accent w-full max-w-xs" required /></div>
                <div><input type="tel" name='price' placeholder="Service Price" className="input input-bordered input-accent w-full max-w-xs" required /></div>
                <div><textarea type="text" name='details' placeholder="Service Details" className="input input-bordered input-accent w-full max-w-xs" required /></div>
                <div><input className='btn btn-warning' type="submit" value="Submit"></input></div>
            </form>
        </div>
    );
};

export default AddService;