import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
     <Footer />
    </div>
  );
};

export default Layout;
