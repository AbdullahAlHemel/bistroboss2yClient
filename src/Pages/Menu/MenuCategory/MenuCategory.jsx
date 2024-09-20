import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,img,title}) => {
    return (
        <div>
             <Cover img={img} title={title}></Cover>
            <div className='grid-cols-2 grid gap-4 mb-4'>
              {
                items.map(item => <MenuItem
                   key={item._id}
                   item={item}
                ></MenuItem>)
              }
            </div>
            <div className='justify-center card-actions'>
              <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 mb-8 mt-4 '>Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;