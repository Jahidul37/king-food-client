import React from 'react';

const SectionTitles = ({ heading, subHeading }) => {
    return (
        <div className=' lg:w-3/12 mx-auto my-8'>
            <p className=' text-center text-yellow-600 '>--- {subHeading} ---</p>
            <p className='  text-center lg:border-y-2 py-2 text-3xl'>{heading}</p>
        </div>
    );
};

export default SectionTitles;