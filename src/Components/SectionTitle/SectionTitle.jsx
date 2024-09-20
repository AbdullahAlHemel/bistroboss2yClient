import React from 'react';

const SectionTitle = ({Heading,subHeading}) => {
    return (
        <div className='border-2 w-2/5 mx-auto mb-4 mt-4'>
            <h2 className='text-center uppercase text-2xl text-red-400'>{Heading}</h2>
            <h2 className='text-center text-xl'>{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;