import React from 'react';
import Footer from '../footer/Footer';
import Grid from '../grid/Grid';
import Navbar from '../navbar/Navbar';
import Pagination from '../pagination/Pagination';
import Tag from '../tags/Tag';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Tag/>
            <Grid/>
            <Pagination/>
            <Footer/>
        </div>
    );
};

export default Home;