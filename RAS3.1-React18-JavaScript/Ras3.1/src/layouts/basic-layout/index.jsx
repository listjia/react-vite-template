import React from 'react';
import MainLayoutContent from './content';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainLayoutContent>{children}</MainLayoutContent>
    </div>
  );
};

export default MainLayout;
