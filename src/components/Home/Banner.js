import React from 'react';
import './Banners.css'
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-content'>
                <h1>Best food wating for your belly</h1>
                <div className='inputfrom'>
                    <input type="text" placeholder='Search Food Items' class="form-label" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;