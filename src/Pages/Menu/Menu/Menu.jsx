import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';

import coverimages from "./../../../assets/menu/banner3.jpg"
import dessertimages from "./../../../assets/menu/dessert-bg.jpeg"
import pizzaimages from "./../../../assets/menu/pizza-bg.jpg"
import soupimages from "./../../../assets/menu/soup-bg.jpg"
import saladimages from "./../../../assets/menu/salad-bg.jpg"

import useMenu from '../../../hooks/useMenu';
import SectionTitles from '../../../Componets/SectionTitles/SectionTitles';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    // useMenu hooks use and call useMenu hook here
    const [menu] = useMenu()
    // menu item gula k filter kora hoice
    const offered = menu.filter(items => items.category === "offered")
    const dessert = menu.filter(items => items.category === "dessert")
    const soup = menu.filter(items => items.category === "soup")
    const salad = menu.filter(items => items.category === "salad")
    const pizza = menu.filter(items => items.category === "pizza")


    return (
        <div>
            <Helmet>
                <title> King Food | Menu</title>
            </Helmet>

            {/* Main Cover */}
            <Cover
                coverimages={coverimages}
                title="Our Menu"
            ></Cover>
            {/* section titles */}
            <SectionTitles
                subHeading={"Don't Miss"}
                heading={"TODAY'S OFFER"}
            ></SectionTitles>
            {/* offered Menu Items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory items={dessert} title="Desserts" coverimages={dessertimages} ></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory items={pizza} title="Pizza" coverimages={pizzaimages} ></MenuCategory>
            {/* pizza menu items */}

            <MenuCategory items={salad} title="Salad" coverimages={saladimages} ></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={soup} title="Soup" coverimages={soupimages} ></MenuCategory>

        </div>
    );
};

export default Menu;