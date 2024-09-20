import React from 'react';
import { Helmet } from 'react-helmet-async';

import coverImg from '../../assets/menu/banner3.jpg'
import coverImg2 from '../../assets/menu/dessert-bg.jpeg'
import coverImg3 from '../../assets/menu/salad-bg.jpg'
import coverImg4 from '../../assets/menu/soup-bg.jpg'

import useMenu from '../../Hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const salad =  menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro || menu</title>
            </Helmet>
            <MenuCategory img={coverImg} title={'Order NOW'} items={pizza}></MenuCategory>
            <MenuCategory img={coverImg2} title={'dessert'} items={dessert}></MenuCategory>
            <MenuCategory items={salad}  img={coverImg3} title={'salad'}></MenuCategory>
            <MenuCategory title={'soup'} img={coverImg4} items={soup}></MenuCategory>
        </div>
    );
};

export default Menu;