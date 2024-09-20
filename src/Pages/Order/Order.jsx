import React, { useState } from 'react';
import Cover from '../Shared/Cover/Cover';
import coverImg from '../../assets/home/featured.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['dessert', 'salad', 'soup', 'pizza', 'offered']
    const {category} =  useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const salad =  menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Cover img={coverImg} title={'Order Now'}></Cover>
            
            <Tabs defaultIndex={tabIndex } onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={dessert}></OrderTab>  
                </TabPanel>
                <TabPanel>
                   <OrderTab items={salad}></OrderTab>            
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>               
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>      
                </TabPanel>
                <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;