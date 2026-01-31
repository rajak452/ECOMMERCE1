"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const { data } = await supabase.from("products").select("*");
    setProducts(data || []);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>My Ecommerce Store</h1>

      {products.map(p => (
        <div key={p.id} style={{ marginBottom: 20 }}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>
          <img src={p.image} width="150" />
        </div>
      ))}
    </main>
  );
}
