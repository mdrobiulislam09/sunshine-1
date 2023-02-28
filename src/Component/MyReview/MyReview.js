import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Comment from '../Comment/Comment';

const MyReview = () => {

    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`https://sunshine-1-server.vercel.app/comments?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [user?.email])
    console.log(comments)

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure delete comment')
        if(proceed){
            fetch(`https://sunshine-1-server.vercel.app/comments/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted Succesfully')
                    const remember = comments.filter(odr => odr._id !== id);
                    setComments(remember);
                }
            })
        }
    }

    return (
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comments.map((service)=><Comment
                                key={service._id}
                                service={service}
                                handleDelete={handleDelete}
                            ></Comment>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default MyReview;