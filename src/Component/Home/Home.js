import React, { useEffect, useState } from 'react';
import { PhotoView } from 'react-photo-view';
import Gallary from '../Gallary/Gallary';
import Light from '../Light/Light';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    const [all, setall] = useState(true)
    const [loading, setLoading] = useState(false)
    const handleall = () => {
        setall(false)
    }
    const [services, setServices] = useState([]);
    useEffect(() => {
        setLoading(true)
        fetch('https://sunshine-1-server.vercel.app/photo-service')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, []);

    return (
        <div>
            {/* carisel section  */}
            <section className='pding'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <PhotoView src="https://colorfully.eu/wp-content/uploads/2012/09/autumn-fall-photography-dry-leaves-canon-eos-30d-facebook-cover.jpg">
                            <img src="https://colorfully.eu/wp-content/uploads/2012/09/autumn-fall-photography-dry-leaves-canon-eos-30d-facebook-cover.jpg" className="w-full" />
                        </PhotoView>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <PhotoView src="https://t3.ftcdn.net/jpg/02/29/35/78/360_F_229357854_dT6lJS9r5qbPSWPaNoHP5SGfUoFGOa3s.jpg">
                            <img src="https://t3.ftcdn.net/jpg/02/29/35/78/360_F_229357854_dT6lJS9r5qbPSWPaNoHP5SGfUoFGOa3s.jpg" className="w-full" />
                        </PhotoView>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <PhotoView src="https://xeecovers.com/wp-content/uploads/2018/07/Photography-Cover-Photo-for-Facebook.png">
                            <img src="https://xeecovers.com/wp-content/uploads/2018/07/Photography-Cover-Photo-for-Facebook.png" className="w-full" />
                        </PhotoView>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            {/* <section>
                <div className="containe">
                    <div className="wrappe">
                        <img src="https://filmswot.files.wordpress.com/2018/01/coco_dominates_chinese_box_office_.jpg" />
                        <img src="https://www.foundry.com/sites/default/files/inline-images/Images_003_0.jpg" />
                        <img src="https://www.foylefilmfestival.org/sites/default/files/COCO%20main%20image%203.jpg" />
                        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F11%2Fcoco_c330_56b_pub-pub16n-186_rgb-2000.jpg" />
                    </div>
                </div>
            </section> */}
            {/* servicess */}
            <section>
                <div className=' mb-10'>
                    <div>
                        <p className='text-center text-3xl mb-1 text-color'>My Photography Services</p>
                    </div>

                    {
                        loading ? <>
                            <div>
                                <div className='contai'>
                                    <div className='texte'>
                                        <h1>loading....</h1>
                                    </div>
                                    <div className='loading'>
                                        <div className='line-box'>
                                            <div className='line'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                            :
                            <>
                                <div>
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
                            </>
                    }

                </div>
            </section>
            {/* photo collection */}
            <section>
                <div>
                    <h2 className='text-color'>Best Photo Collection</h2>
                    <div className='responsive'>
                        <div className='gallary'>
                            <a><img src='https://www.worldphoto.org/sites/default/files/Bangladesh%2C%20MD%20Tanveer%2C%20Rohan%2C%20Winner%2C%20Bangladesh%20National%20Award%2C%202016%20Sony%20World%20Photography%20Awards.jpg' /></a>
                            <div className='des'>Bangladeshi Madrasa Student</div>
                        </div>
                    </div>
                    <div className='responsive'>
                        <div className='gallary'>
                            <a><img src='https://www.worldphoto.org/sites/default/files/MALAYSIA%2C%20Cheung%20Yin%20Fang%2C%20%202nd%20Place%2C%20Malaysia%20National%20Award%2C%202016%20Sony%20World%20Photography%20Awards.jpg' /></a>
                            <div className='des'>Amazing Natural Picture</div>
                        </div>
                    </div>
                    <div className='responsive'>
                        <div className='gallary'>
                            <a><img src='https://www.worldphoto.org/sites/default/files/Chile%2C%20Tomas%20Fernandez%2C%203rd%20Place%2C%20Chile%20National%20Award%2C%202016%20Sony%20World%20Photography%20Awards.jpg' /></a>
                            <div className='des'>FIFA World Cup</div>
                        </div>
                    </div>
                    <div className='responsive'>
                        <div className='gallary'>
                            <a><img src='https://www.worldphoto.org/sites/default/files/Chile%20Eduardo%20Minte%2C%20Winner%2C%20Chile%20National%20Award%2C%202016%20Sony%20World%20Photography%20Awards.jpg' /></a>
                            <div className='des'>Just Tornado and Haricane</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='invisible'>
                h0
                sh
                <h1>ew</h1>
                <br></br>
            </div>
            <br></br>
            {/* Our collection */}
            <section>
                <h1 className='text-color'>Our Collection</h1>
                <Gallary></Gallary>
            </section>

            <br></br>
            {/* about section */}
            <section>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <PhotoView src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-about-us-wip1.png?format=jpg&quality=90&v=1618511825&width=1024">

                            <img className="max-w-md rounded-lg shadow-2xl" src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-write-an-about-us-wip1.png?format=jpg&quality=90&v=1618511825&width=1024" alt="Logo" />
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
            <section>
                <Light></Light>
            </section>
            {/* team member section */}
            <section>
                <h1 className="text-[24px] font-bold text-center lg:text-[36px] mb-10">Our Team Member</h1>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 mx-10'>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="w-full h-[450px]">
                            <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src='https://media.licdn.com/dms/image/C5103AQFf65mNfXdCGQ/profile-displayphoto-shrink_800_800/0/1521993016527?e=2147483647&v=beta&t=8h77fjEeiGfHyVSpJ9z17w5WV2fThahFscgkyeealPk' alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[46%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 lg:">
                            <h1 className="font-dmserif text-2xl font-bold text-white">MD Siam Ahmed</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Manger</p>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="w-full h-[450px]">
                            <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src='https://m.media-amazon.com/images/I/91NwJRGwr8L.png' alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[46%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 lg:">
                            <h1 className="font-dmserif text-2xl font-bold text-white">Rezvi Ahmed</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Photo-Editor</p>
                        </div>
                    </div>
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="w-full h-[450px]">
                            <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src='https://www.shutterstock.com/image-photo/woman-taking-pictures-outdoors-analog-260nw-1889662681.jpg' alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[46%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 lg:">
                            <h1 className="font-dmserif text-2xl font-bold text-white">Kawser Hossain</h1>
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Camera-Man</p>
                            {/* <div className="flex justify-center">
                            <FaFacebook className="w-6 h-6 text-white mx-2" />
                            <FaWhatsapp className="w-6 h-6 text-white mx-2" />
                            <FaPhone className="w-6 h-6 text-white mx-2" />
                        </div> */}
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            {/* Coustomer Reviews */}
            <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-color">
                                Our Donator Reviews
                            </h2>
                        </div>
                        <div className="text-center lg:max-w-full mt-8 lg:mt-14">

                            <div className=" bg-white  shadow mx-aut0 md:flex justify-around text-center">
                                <div className="px-2 py-5 md:px-5 md:py-8 w-80 h-96 m-1 bg-warning">
                                    <div className="relative w-24 h-24 mx-auto ">
                                        <img
                                            className="relative object-cover w-24 h-24 mx-auto rounded-full"
                                            src="https://media.licdn.com/dms/image/C5103AQFf65mNfXdCGQ/profile-displayphoto-shrink_800_800/0/1521993016527?e=2147483647&v=beta&t=8h77fjEeiGfHyVSpJ9z17w5WV2fThahFscgkyeealPk"
                                            alt="Donator"
                                        />
                                    </div>
                                    <blockquote className="mt-7">
                                        <p className="md:text-lg text-black">“I am happy to donet your company”</p>
                                    </blockquote>
                                    <p className="text-base font-semibold text-black mt-4 md:mt-8">
                                        Rakib talha
                                    </p>
                                    <p className="mt-1 text-base text-gray-600">SVS company Manager</p>
                                </div>
                                <div className="px-2 py-5 md:px-5 md:py-8 w-80 h-96 m-1 bg-warning">
                                    <div className="relative w-24 h-24 mx-auto ">
                                        <img
                                            className="relative object-cover w-24 h-24 mx-auto rounded-full"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRViiZnoOEoMtfE_dS0lJ0osAqH61stnBYRHw&usqp=CAU"
                                            alt="Donator"
                                        />
                                    </div>
                                    <blockquote className="mt-7">
                                        <p className="md:text-lg text-black">“It is a realy good that i was tusted company”</p>
                                    </blockquote>
                                    <p className="text-base font-semibold text-black mt-4 md:mt-8">
                                        Azhom Khan
                                    </p>
                                    <p className="mt-1 text-base text-gray-600">CDE Derector</p>
                                </div>
                                <div className="px-2 py-5 md:px-5 md:py-8 w-80 h-96 m-1 bg-warning">
                                    <div className="relative w-24 h-24 mx-auto ">
                                        <img
                                            className="relative object-cover w-24 h-24 mx-auto rounded-full"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9kv6-KltFRp9864xXUjlPLP7sAddXTZ3QQ&usqp=CAU"
                                            alt="Donator"
                                        />
                                    </div>
                                    <blockquote className="mt-7">
                                        <p className="md:text-lg text-black">“Your company was realy fast and active”</p>
                                    </blockquote>
                                    <p className="text-base font-semibold text-black mt-4 md:mt-8">
                                        Talha Tarik
                                    </p>
                                    <p className="mt-1 text-base text-gray-600">ICC deputy manager</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Our Instument tecnology */}
            <section>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <PhotoView src="https://i.pcmag.com/imagery/roundups/05VXLlOuCyvq8fQnl6W3xsc-31..v1638904093.jpg">
                            <img className="max-w-md rounded-lg shadow-2xl" src="https://i.pcmag.com/imagery/roundups/05VXLlOuCyvq8fQnl6W3xsc-31..v1638904093.jpg" alt="Logo" />
                        </PhotoView>
                        <div>
                            <h1 className="text-3xl font-bold">Latest Camera Tecnology</h1>
                            <p>1. Canon EOS R6 Mark II.</p>
                            <p>2. Canon EOS R7.</p>
                            <p>3. Olympus Tough TG-6.</p>
                            <p>4. Sony Cyber-shot DSC-RX100 VII</p>
                            <p>5. Sony a7 IV</p>
                            <p>6. GoPro Hero11 Black. Best Action Camera</p>
                        </div>
                        <PhotoView src="https://www.iqsdirectory.com/resources/wp-content/uploads/2018/10/mirrorless3.jpg">
                            <img className="max-w-md rounded-lg shadow-2xl" src="https://www.iqsdirectory.com/resources/wp-content/uploads/2018/10/mirrorless3.jpg" alt="Logo" />
                        </PhotoView>
                    </div>
                </div>
            </section>
            <br></br>
            {/* Discount Section */}
            <section>
                <h1 className="text-3xl font-bold">Available Discount Package</h1>
                <div className='flex justify-around mt-4'>
                    <div className="flex gap-4 h-full">
                        <div className='w-48 h-48'>
                            <img src='https://shotkit.com/wp-content/uploads/2021/02/family-photography.jpg' alt="" />
                        </div>
                        <div className="">
                            <h2 className="card-title bold">Family Photography</h2>
                            <h3 className="card-title" style={{ color: 'red' }}>Base Price: 35 $</h3>
                            <h3 className="card-title" style={{ color: 'green' }}>Price: 30 $</h3>
                        </div>
                    </div>
                    <div className="flex gap-4 h-full">
                        <div className='w-48 h-48'>
                            <img src='https://images.pexels.com/photos/1130434/pexels-photo-1130434.jpeg?auto=compress&cs=tinysrgb&w=600' alt="" />
                        </div>
                        <div className="">
                            <h2 className="card-title bold">Wild Photography</h2>
                            <h3 className="card-title" style={{ color: 'red' }}>Base Price: 35 $</h3>
                            <h3 className="card-title" style={{ color: 'green' }}>Price: 30 $</h3>
                        </div>
                    </div>
                </div>
            </section>
            <br></br>
            {/* Extra Section */}
            <section>
                <div className='bg-stone-100 py-2'>
                    <h2 className='text-color mt-5'>Subscribe now for contact us</h2>
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

        </div>
    );
};

export default Home;