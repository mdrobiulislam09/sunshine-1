import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // if (loading) {
    //     return <div className='min-h-screen hero-content text-center'>
    //         <div>
    //             <h1 className='text-3xl'>Without Login You Can not go to this page</h1>
    //             <span>Please Login</span>
    //             <br></br>
    //             <div><Link className='btn btn-primary' to='/login'>Login From</Link></div>
    //         </div>
    //     </div>
    // }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace> </Navigate>

};

export default PrivateRouter;