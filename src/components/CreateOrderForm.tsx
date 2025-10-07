import { useState } from 'react';

export default function CreateOrderForm() {
  const [name, setName] = useState('');
  const [shipping, setShipping] = useState('');

  return (
    <div>
      <h2>สร้างออเดอร์ใหม่</h2>
      <form className="form">
        <label>ชื่อลูกค้า</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>ขนส่ง</label>
        <select value={shipping} onChange={(e) => setShipping(e.target.value)}>
          <option value="">เลือกขนส่ง</option>
          <option value="BEST">BEST</option>
          <option value="Flash">Flash</option>
        </select>
        <button type="submit">บันทึกออเดอร์</button>
      </form>
    </div>
  );
}
