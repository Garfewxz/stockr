import React, { useState } from 'react';
import './AllOrders.css';

export default function AllOrders() {
  const [filters, setFilters] = useState({
    status: '',
    channel: '',
    customer: '',
    codStatus: '',
    platform: '',
    orderId: '',
    paymentStatus: '',
    orderDate: '',
    paymentDate: '',
  });

  const orders = [
    {
      id: 'PA2301994',
      date: '01 กันยายน 2566 เวลา 15.03 น.',
      customer: 'รับออเดอร์อัตโนมัติ',
      channel: 'Facebook Live',
      shipping: 'รับสินค้าด้วยตัวเอง',
      status: 'ยังไม่ชำระเงิน',
      total: 148.0,
    },
    {
      id: 'PA2302006',
      date: '01 กันยายน 2566 เวลา 10.43 น.',
      customer: 'รับออเดอร์อัตโนมัติ',
      channel: 'Facebook Live',
      shipping: 'รับสินค้าด้วยตัวเอง',
      status: 'ยังไม่ชำระเงิน',
      total: 148.0,
    },
  ];

  return (
    <div className="all-orders">
      <h2>ออเดอร์ทั้งหมด</h2>

      {/* 🔍 ฟิลเตอร์ */}
      <div className="filters">
        {Object.keys(filters).map((key) => (
          <input
            key={key}
            placeholder={key}
            value={(filters as any)[key]}
            onChange={(e) =>
              setFilters({ ...filters, [key]: e.target.value })
            }
          />
        ))}
        <button className="btn-search">ค้นหา</button>
        <button className="btn-reset">รีเซ็ต</button>
      </div>

      {/* 📊 กล่องสรุปสถานะ */}
      <div className="status-boxes">
        <StatusBox label="ทั้งหมด" value="2" color="#00bcd4" />
        <StatusBox label="รอตรวจสอบ" value="0" color="#ff9800" />
        <StatusBox label="COD" value="0" color="#f44336" />
        <StatusBox label="ชำระเงินแล้ว" value="0" color="#4caf50" />
        <StatusBox label="ยังไม่ชำระเงิน" value="2" color="#9e9e9e" />
        <StatusBox label="จัดส่งแล้ว" value="0" color="#3f51b5" />
        <StatusBox label="จัดส่งสำเร็จ" value="0" color="#8bc34a" />
        <StatusBox label="ยกเลิก" value="0" color="#e91e63" />
      </div>

      {/* 📋 ตารางออเดอร์ */}
      <table className="order-table">
        <thead>
          <tr>
            <th>ออเดอร์</th>
            <th>วัน-เวลาสั่งซื้อ</th>
            <th>ชื่อผู้รับ - ช่องทาง</th>
            <th>ขนส่ง</th>
            <th>สถานะ</th>
            <th>ยอดรวม (บาท)</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.date}</td>
              <td>{o.customer} - {o.channel}</td>
              <td>{o.shipping}</td>
              <td>{o.status}</td>
              <td className="price">{o.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusBox({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="status-box" style={{ backgroundColor: color }}>
      <div className="status-value">{value}</div>
      <div className="status-label">{label}</div>
    </div>
  );
}
