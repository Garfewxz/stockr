import { useProductStore } from './store';

export default function ProductList() {
  const products = useProductStore((s) => s.products);

  return (
    <div>
      <h2>รายการสินค้า</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} ({p.sku}) - {p.quantity} ชิ้น @ {p.price} บาท
          </li>
        ))}
      </ul>
    </div>
  );
}
