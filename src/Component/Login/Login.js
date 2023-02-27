import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import './Login.css';

const Login = () => {
    const { logIn, googleSignIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => console.error(error))
    }
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero py-10">
            <div className="hero-content grid md:grid-cols-2 lg:grid-cols-1 flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold p-4">Login now!</h1>
                    <form onSubmit={handleLogin} className="cady">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Email</span></label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered"
                            /></div>
                        <div className="form-control">
                            <label className="label"><span className="label-text">Password</span></label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Login' />
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn btn-secondary mt-6">SignUp With Google</button>
                    <p className="p-4 text-center">new this page please <Link className="text-orange-600 font-bold" to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;