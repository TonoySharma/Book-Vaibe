import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Navber/NavBar';
import Footer1 from '../components/footer/footer1';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer1></Footer1>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;