import React, { } from 'react';
import SectionTitles from '../../../Componets/SectionTitles/SectionTitles';
import MenuItems from '../../../Shared/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';

const OurMenu = () => {
    // useMenu hooks use and call useMenu hook here
    const [menu] = useMenu()
    // menu item gula k filter kora hoice
    const populerItem = menu.filter(items => items.category === "popular")

    return (
        <section>
            <SectionTitles
                subHeading={"Check It Out"}
                heading={"From Our Menu"}
            ></SectionTitles>
            <div className=' grid m-3 sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
                {
                    populerItem.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>

            <div className=' text-center'>
                <button className=' btn btn-outline border-0 border-b-4'>View all Menu</button>
            </div>

        </section>
    );
};

export default OurMenu;