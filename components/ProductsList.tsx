// Theirs
import Image from "next/image";
import Link from "next/link";

// Ours
import type { ProductListProps as Props } from "@/types";


export function ProductsList({ products }: Props) {
  return (
    <section>

      {products.map(product => (
        <article key={product._id.toString()}>
          <Image
            src={`/images/${product.imageUrl}`}
            alt=""
            width={150}
            height={150}
          />
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <Link href={`/products/${product.name}`}>View More</Link>
        </article>
      ))}

    </section>
  );
}
