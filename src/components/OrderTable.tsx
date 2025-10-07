import React, { useState } from 'react';
import './OrderTable.css';

export default function OrderTable() {
  const [filters, setFilters] = useState({
    shippingStatus: '',
    channel: '',
    customerName: '',
    codStatus: '',
    orderDate: '',
    orderId: '',
    paymentDate: '',
    email: '',
  });

  const orders = [
    {
      id: 'PA2301994',
      date: '01 กันยายน 2566 เวลา 15.03 น.',
      customer: 'Facebook Live',
      shipping: 'รับสินค้าด้วยตัวเอง',
      status: 'shoeka',
      total: 148.0,
    },
    {
      id: 'PA2302006',
      date: '01 กันยายน 2566 เวลา 10.43 น.',
      customer: 'Facebook Live',
      shipping: 'รับสินค้าด้วยตัวเอง',
      status: '',
      total: 148.0,
    },
  ];

  return (
    <div className="order-table-wrapper">
      <h2>ออเดอร์รอจัดส่ง</h2>

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
        <button className="btn-search">Search</button>
        <button className="btn-reset">Reset</button>
      </div>

      {/* 📊 กล่องสถานะ */}
      <div className="status-boxes">
        <StatusBox label="พลังธรรมดา" value="0" color="#2196f3" />
        <StatusBox label="พลัง COD" value="0" color="#f44336" />
        <StatusBox label="รอโอน" value="0" color="#9e9e9e" />
        <StatusBox label="โอนไลน" value="0.00" color="#4caf50" />
        <StatusBox label="shipping" value="0" color="#9c27b0" />
        <StatusBox label="ตีกลับ" value="0" color="#ff9800" />
        <StatusBox label="%ขำเร็จ" value="8.00%" color="#2e7d32" />
      </div>

      {/* 📋 สรุปจำนวนออเดอร์ */}
      <div className="summary">
        10 เปิดออเดอร์ | 71 รอสั่งออเดอร์ | 14 รอแพ็ค | 8 ค้างเส้นทาง | 9 รอเตรียมส่ง | 9 ขำบจบ
      </div>

      {/* 📋 ตารางออเดอร์ */}
      <table className="order-table">
        <thead>
          <tr>
            <th>ออเดอร์</th>
            <th>วัน-เวลาสั่งซื้อ</th>
            <th>ชื่อผู้รับ - ช่องทาง</th>
            <th>ขนส่ง - หมายเลขจัดส่ง</th>
            <th>สถานะ</th>
            <th>ยอดรวม (บาท)</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.date}</td>
              <td>{o.customer}</td>
              <td>{o.shipping}</td>
              <td>
                {o.status ? (
                  <span className="status-tag">{o.status}</span>
                ) : (
                  '-'
                )}
              </td>
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
