import React from 'react';

const  MenuItem = ({item}) => {
    const {name, price, image , recipe} = item
    return (
        <div className='flex gap-4 border p-4'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <h2 className='uppercase text-xl'>{name}---------</h2>
                <p className=''>{recipe}</p>
            </div>
            <p className='text-lg text-yellow-500'>{price}  $</p>
        </div>
    );
};

export default MenuItem;