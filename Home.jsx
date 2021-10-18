import React from 'react'
import Slider from './../../compnents/Slider/Slider';
import FlashSale from './../../compnents/FlashSale/FlashSale';
import Collections from './../../compnents/Collections/Collections';
import Aboutus from './../../compnents/Aboutus/Aboutus';


const Home = () => {

    return (
        <div>
             <Slider/>
            <FlashSale />
            <Collections />
            <Aboutus />
        </div>
    )
}

export default Home
