import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../Shared/NavHeader/NavHeader';
import Footers from '../Shared/Footers/Footers';

const Main = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default Main;