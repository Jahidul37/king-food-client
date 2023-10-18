import React from 'react';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import Cover from '../../../Shared/Cover/Cover';

const MenuCategory = ({ items, title, coverimages }) => {
    return (
        <div>
            {title && <Cover
                coverimages={coverimages}
                title={title}
            ></Cover>}
            <div className=' grid m-3 sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-10 mt-10'>
                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;