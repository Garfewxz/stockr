import { useState } from 'react';
import { useProductStore } from './store';

export default function ProductForm() {
  const addProduct = useProductStore((s) => s.addProduct);
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    addProduct({ name, sku, quantity, price });
    setName('');
    setSku('');
    setQuantity(0);
    setPrice(0);
  };

  return (
    <div>
      <h2>เพิ่มสินค้า</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อสินค้า" />
      <input value={sku} onChange={(e) => setSku(e.target.value)} placeholder="SKU" />
      <input type="number" value={quantity} onChange={(e) => setQuantity(+e.target.value)} placeholder="จำนวน" />
      <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} placeholder="ราคา" />
      <button onClick={handleSubmit}>เพิ่ม</button>
    </div>
  );
}
