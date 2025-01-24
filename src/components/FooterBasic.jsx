// src/components/Footer.jsx 
import React from 'react';
import '../styles/Fonts.css'
// import { Helmet } from 'react-helmet';

const FooterBasic = () => {

    const buildCount = '04';

    // Create a new Date object
    const currentDate = new Date();

    // Define options for formatting the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    // Format the date to "January 14, 2024"
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    // Format the final string
    const formattedString = `latest@V0.0.3-B${buildCount} ${formattedDate}`;

    return (
        <>
            {/* <Helmet>
                <title>Footer</title>
                <meta name="description" content="Footer For InnovaraShopix" />
            </Helmet> */}
            <footer className='dm-serif-text-regular-italic'>
                <p className='text text-center'>&copy; {new Date().getFullYear()} HashVeno & It's Team. All Rights Reserved. {formattedString}</p>
            </footer>
        </>
    );
};

export default FooterBasic;