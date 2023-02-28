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

        fetch('https://sunshine-1-server.vercel.app/photo-service')
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
            <section className='mb-5'>
                <div className=' mb-10'>
                    <div>
                        <p className='text-center text-3xl mb-1 text-color'>My Photography Services</p>
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
                                <button className='burttoncolor' onClick={handleall}>
                                    See All Service
                                </button>
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
                    <h2 className='text-color'>Subscribe now for contact us</h2>
                    <form className='md:flex justify-center my-5'>
                        <div>
                            <input style={{
                                padding: "7px 20px",
                                border: "6px solid #555",
                                backgroundColor: "white",
                                backgroundPosition: "10px 10px",
                                paddingLeft: "30px",
                                boxSizing: "border-box"
                            }} type="text" value="" name="NAME" className="m-2" id="mc-name" placeholder="Your Name" required="" />
                        </div>
                        <div>
                            <input style={{
                                padding: "7px 20px",
                                border: "6px solid #555",
                                backgroundColor: "white",
                                backgroundPosition: "10px 10px",
                                paddingLeft: "30px",
                                boxSizing: "border-box"
                            }} type="email" value="" name="EMAIL" className="m-2" id="mc-email" placeholder="Email Address" required="" />
                        </div>
                        <div>
                            <input className="btn btn-collor m-2" type="submit" name="subscribe" value="Subscribe Now"></input>
                        </div>
                    </form>
                    <small class="text-dark">Get started for 1 Month free trial</small>
                </div>
            </section>
            <br></br>
            <br></br>
            <section className='my-4'>
                <div>
                    <h2 className='text-color'>Best Photo Collection</h2>
                    <div className='responsive'>
                        <div className='gallary'>
                            <a><img src='https://www.worldphoto.org/sites/default/files/Bangladesh%2C%20MD%20Tanveer%2C%20Rohan%2C%20Winner%2C%20Bangladesh%20National%20Award%2C%202016%20Sony%20World%20Photography%20Awards.jpg' /></a>
                            <div className='des'>Image Description</div>
                        </div>
                    </div>
                    <div className='responsive'>
                        <div className='gallary'>
                            <a><img src='https://www.worldphoto.org/sites/default/files/Bangladesh%2C%20MD%20Tanveer%2C%20Rohan%2C%20Winner%2C%20Bangladesh%20National%20Award%2C%202016%20Sony%20World%20Photography%20Awards.jpg' /></a>
                            <div className='des'>Image Description</div>
                        </div>
                    </div>
                    <div className='responsive'>
                        <div className='gallary'>
                            <a><img src='https://www.worldphoto.org/sites/default/files/Bangladesh%2C%20MD%20Tanveer%2C%20Rohan%2C%20Winner%2C%20Bangladesh%20National%20Award%2C%202016%20Sony%20World%20Photography%20Awards.jpg' /></a>
                            <div className='des'>Image Description</div>
                        </div>
                    </div>
                    <div className='responsive'>
                        <div className='gallary'>
                            <a><img src='https://www.worldphoto.org/sites/default/files/Bangladesh%2C%20MD%20Tanveer%2C%20Rohan%2C%20Winner%2C%20Bangladesh%20National%20Award%2C%202016%20Sony%20World%20Photography%20Awards.jpg' /></a>
                            <div className='des'>Image Description</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section */}
    
            <section>
                <h1 className='text-color'>Know About Us</h1>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <PhotoView src="https://dreamweaver.com.bd/wp-content/uploads/2017/11/slide3.jpg">
                            <img src="https://dreamweaver.com.bd/wp-content/uploads/2017/11/slide3.jpg" className="max-w-md rounded-lg shadow-2xl" />
                        </PhotoView>
                        <div>
                            <h1 className="text-5xl font-bold">About us!</h1>
                            <p className="py-6">Darren, Sophie and Daniela at Hands on History: Mudlarking at St Paul's Cathedral with Sean T Ross from Tide Changers
                                You can call us on 020 7928 8998. As we work remotely part of the week, the best way to contact the team is via their emails below or to email contact@thamesfestival.org for general enquiries..</p>
                            <button className="btn btn-primary">Explore More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;