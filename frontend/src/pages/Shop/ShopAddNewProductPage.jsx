import React from 'react';
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader';
import AddNewProduct from '../../components/Shop/AddNewProduct';
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';

const ShopAddNewProductPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div className='flex items-start justify-between w-full'>
        <div className='w-[80px] 800px:w-[330px]'>
          <DashboardSideBar active={12} />
        </div>
        <div className='w-full justify-center flex'>
          <AddNewProduct />
        </div>
      </div>
    </div>
  );
};

export default ShopAddNewProductPage;
