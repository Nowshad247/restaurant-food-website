import React from 'react';
import Feturd from '../Feturd/Feturd';
import ServicesManu from '../ServicesManu/ServicesManu';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServicesManu></ServicesManu>
            <Feturd></Feturd>
        </div>
    );
};

export default Home;