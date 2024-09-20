import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const PopularItems = data.filter(item => item.category === 'popular')
            setMenu(PopularItems)})
    },[])

    return (
        <div>
            <section>
                <SectionTitle
                    Heading={'This is on discount'}
                    subHeading={'8:00 - 12:00'}
                ></SectionTitle>
            </section>
            <div className='grid-cols-2 grid gap-4 mb-4'>
                { menu.map(item=> <MenuItem
                  key={item._id}
                  item={item}
                 ></MenuItem>) }    
            </div>
        </div>
    );
};

export default PopularMenu;