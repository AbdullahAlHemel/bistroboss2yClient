import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';

const UpdateItem = () => {
    const item = useLoaderData()
    console.log(item);
    
    return (
        <div>
            <SectionTitle Heading={'Update An Item'} subHeading={'Refresh Info'}></SectionTitle>
        </div>
    );
};

export default UpdateItem;