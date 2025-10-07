import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import OrderTable from './components/OrderTable';
import AllOrders from './components/AllOrders';
import CreateOrderForm from './components/CreateOrderForm';
import ShopSettings from './components/ShopSettings';

export default function App() {
  const [activeMenu, setActiveMenu] = useState('ออเดอร์รอจัดส่ง');

  const renderContent = () => {
    switch (activeMenu) {
      case 'ออเดอร์รอจัดส่ง':
        return <OrderTable />;
      case 'ออเดอร์ทั้งหมด':
        return <AllOrders />;
      case 'สร้างออเดอร์':
        return <CreateOrderForm />;
      case 'ตั้งค่าร้านค้า':
        return <ShopSettings />;
      case 'ออกจากระบบ':
        return (
          <div style={{ padding: '20px' }}>
            <h2>ออกจากระบบ</h2>
            <p>ให้กดตรงนี้เพื่อออกระบบ</p>
            <button
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
              onClick={() => alert('คุณได้ออกจากระบบแล้ว')}
            >
              ออกจากระบบ
            </button>
          </div>
        );
      default:
        return <h2>ไม่พบเมนู</h2>;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <main className="main-content">{renderContent()}</main>
    </div>
  );
}
