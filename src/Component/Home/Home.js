import React, { useEffect, useState } from 'react';
import { PhotoView } from 'react-photo-view';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [all, setall] = useState(true)
    const handleall = () => {
        setall(false)
    }
    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/photo-service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <div className=''>
            {/* carisel section  */}
            <section>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <PhotoView src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg">
                        <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                        </PhotoView>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <PhotoView src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg">
                        <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                        </PhotoView>
                        
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                    <PhotoView >
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    </PhotoView>
                        
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                    <PhotoView></PhotoView>
                        <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            <br></br>
            {/* servicess */}
            <section className='mb-5 ml-6'>
                <div className=' mb-10'>
                    <div>
                        <p className='text-center text-3xl text-orange-600 mb-1 text-color'>My Photography Services</p>
                    </div>
                    {
                        <div>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-10'>
                                {


                                    all ? <>
                                        {
                                            services?.slice(0, 3).map((service) => <Service
                                                key={service._id}
                                                service={service}
                                            ></Service>)
                                        }
                                    </>
                                        :
                                        <>
                                            {
                                                services.map((service) => <Service
                                                    key={service._id}
                                                    service={service}
                                                ></Service>)
                                            }
                                        </>
                                }
                            </div>
                        </div>
                    }
                </div>
                <div>
                    {

                        all ? <>
                            {
                                <button className='burttoncolor' onClick={handleall}>See All Service</button>
                            }
                        </>
                            :
                            <>
                                {
                                    <></>
                                }
                            </>

                    }
                </div>
            </section>
            {/* Extra Section */}
            <section className='my-5 mb-0'>
                <div className='bg-stone-100 py-2'>
                    <h2><span>Subscribe </span> now for contact us</h2>
                    <form className='md:flex justify-center my-5'>
                        <div>
                            <input style={{
                                padding: "7px 20px",
                                border: "6px solid #555",
                                backgroundColor: "white",
                                backgroundPosition: "10px 10px",
                                paddingLeft: "30px",
                                boxSizing: "border-box"
                            }} type="text" value="" name="NAME" className="m-2" id="mc-name" placeholder="Your Name" required=""/>
                        </div>
                        <div>
                            <input style={{
                                padding: "7px 20px",
                                border: "6px solid #555",
                                backgroundColor: "white",
                                backgroundPosition: "10px 10px",
                                paddingLeft: "30px",
                                boxSizing: "border-box"
                            }} type="email" value="" name="EMAIL" className="m-2" id="mc-email" placeholder="Email Address" required=""/>
                        </div>
                        <div>
                            <input className="btn btn-dark m-2" type="submit" name="subscribe" value="Subscribe Now"></input>
                        </div>
                    </form>
                    <small class="text-dark">Get started for 1 Month free trial</small>
                </div>
            </section>
            <section>

            </section>
        </div>
    );
};

export default Home;