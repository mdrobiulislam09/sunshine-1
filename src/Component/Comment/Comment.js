import React from 'react';

const Comment = ({ service, handleDelete }) => {
    const { address, reviewed, seviceimg, servicename, _id } = service;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={seviceimg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{servicename}</div>
                    </div>
                </div>
            </td>
            <td>
                {reviewed}
            </td>
            <td><button onClick={()=>handleDelete(_id)} className='btn btn-warning text-stone-100'>Delte Comment</button></td>
            <th>
                <button>{address}</button>
            </th>
        </tr>
    );
};

export default Comment;