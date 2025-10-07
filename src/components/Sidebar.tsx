import React from 'react';
import './Sidebar.css';

const menuItems = [
  'ออเดอร์รอจัดส่ง',
  'ออเดอร์ทั้งหมด',
  'สร้างออเดอร์',
  'ตั้งค่าร้านค้า',
  'ออกจากระบบ',
];

export default function Sidebar({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}) {
  return (
    <aside className="sidebar">
      <div className="profile">
        <div className="avatar">
  <img src="logo192.jpg" alt="โลโก้ร้าน oasys_shop" />
</div>
        <div className="username">oasys_shop</div>
        <div className="credit">974,657.05 เครดิต</div>
        <button className="btn-green">เติมเครดิต</button>
        <button className="btn-gray">ประวัติการเติม</button>
      </div>
      <nav className="menu">
        {menuItems.map((item) => (
          <div
            key={item}
            className={`menu-item ${activeMenu === item ? 'active' : ''}`}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
