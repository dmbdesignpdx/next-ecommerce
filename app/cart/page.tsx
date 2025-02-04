"use client";

// Theirs
import { useState } from "react";


export default function CartPage() {
  const [ids] = useState(["123", "234"]);

  return (
    <section>
      <h1>Cart</h1>
      <ul>
        {ids.map(id => (
          <li key={id}>id</li>
        ))}
      </ul>
    </section>
  );
}
