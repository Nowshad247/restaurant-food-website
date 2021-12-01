import React from 'react';
import './Feturd.css';
import { FaCarAlt } from "react-icons/fa";
import { FcAdvance } from "react-icons/fc";
import img from './img/img1.png';
import img3 from './img/architecture-building-city-2047397.png';
import img1 from './img/chef-cook-food-33614.png';

const Feturd = () => {
    return (
        <div className="container">
            <div className="row m-5">
                <div className="col-md-6">
                    <h1>Why You Choose Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto!
                    </p>
                </div>
            </div>
            <div className="row m-5">
                <div className="col-md-4">
                    <div className='feturd-img'>
                        <img src={img} alt="" className='img-fluid' />
                    </div>
                    <div className='feturd-content'>
                        <div className='fetued-icon'>
                            <FaCarAlt />
                        </div>
                        <div className='feturd-contents'>
                            <h3>Fast Dalivary</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, incidunt?</p>
                            <a href=""><FcAdvance /> See More</a>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className='feturd-img'>
                        <img src={img1} alt="" className='img-fluid' />
                    </div>
                    <div className='feturd-content'>
                        <div className='fetued-icon'>
                            <FaCarAlt />
                        </div>
                        <div className='feturd-contents'>
                            <h3>Fast Dalivary</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, incidunt?</p>
                            <a href=""><FcAdvance /> See More</a>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    <div className='feturd-img'>
                        <img src={img3} alt="" className='img-fluid' />
                    </div>
                    <div className='feturd-content'>
                        <div className='fetued-icon'>
                            <FaCarAlt />
                        </div>
                        <div className='feturd-contents'>
                            <h3>Fast Dalivary</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, incidunt?</p>
                            <a href=""><FcAdvance /> See More</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feturd;