import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../Componets/SectionTitles/SectionTitles';
import MenuItems from '../../../Shared/MenuItems/MenuItems';

const OurMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const populerItems = data.filter(item => item.category === "popular");
                setMenu(populerItems)
            })
    }, [])

    return (
        <section>
            <SectionTitles
                subHeading={"Check It Out"}
                heading={"From Our Menu"}
            ></SectionTitles>
            <div className=' grid m-3 sm:grid-cols-1 lg:grid-cols-2 gap-4 mb-10'>
                {
                    menu.map(item => <MenuItems
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