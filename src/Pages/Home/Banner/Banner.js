import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full mt-8  mb-0">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/3 left-24">
                    <h1 className='text-6xl font-bold text-white'>
                        Affrodable <br />
                        Price for Car <br />
                        Servicing
                    </h1>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/2 left-24">
                    <p className=' font-bold text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam.
                    </p>

                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5  top-3/4 left-24">
                    <button className='btn btn-warning'>Discover More</button>
                    <button className='btn btn-warning btn-outline'>Last Project</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/3 left-24">
                    <h1 className='text-6xl font-bold text-white'>
                        Affrodable <br />
                        Price for Car <br />
                        Servicing
                    </h1>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/2 left-24">
                    <p className=' font-bold text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam.
                    </p>

                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5  top-3/4 left-24">
                    <button className='btn btn-warning'>Discover More</button>
                    <button className='btn btn-warning btn-outline'>Last Project</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/3 left-24">
                    <h1 className='text-6xl font-bold text-white'>
                        Affrodable <br />
                        Price for Car <br />
                        Servicing
                    </h1>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/2 left-24">
                    <p className=' font-bold text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam.
                    </p>

                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5  top-3/4 left-24">
                    <button className='btn btn-warning'>Discover More</button>
                    <button className='btn btn-warning btn-outline'>Last Project</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/3 left-24">
                    <h1 className='text-6xl font-bold text-white'>
                        Affrodable <br />
                        Price for Car <br />
                        Servicing
                    </h1>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/2 left-24">
                    <p className=' font-bold text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam.
                    </p>

                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5  top-3/4 left-24">
                    <button className='btn btn-warning'>Discover More</button>
                    <button className='btn btn-warning btn-outline'>Last Project</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/3 left-24">
                    <h1 className='text-6xl font-bold text-white'>
                        Affrodable <br />
                        Price for Car <br />
                        Servicing
                    </h1>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/2 left-24">
                    <p className=' font-bold text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam.
                    </p>

                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5  top-3/4 left-24">
                    <button className='btn btn-warning'>Discover More</button>
                    <button className='btn btn-warning btn-outline'>Last Project</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/3 left-24">
                    <h1 className='text-6xl font-bold text-white'>
                        Affrodable <br />
                        Price for Car <br />
                        Servicing
                    </h1>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/2 left-24">
                    <p className=' font-bold text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam.
                    </p>

                </div>
                <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5  top-3/4 left-24">
                    <button className='btn btn-warning'>Discover More</button>
                    <button className='btn btn-warning btn-outline'>Last Project</button>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;