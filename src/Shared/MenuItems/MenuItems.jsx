import React from 'react';

const MenuItems = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (

        <div className='flex items-center gap-2'>
            <img className=' w-24 rounded-lg' src={image} alt="" />
            <div>
                <h4 className='text-xl font-semibold'>{name}</h4>
                <p>{recipe}</p>
            </div>
            <p className='text-xl font-semibold text-orange-300'>${price}</p>
        </div>

    );
};

export default MenuItems;