// Ours
import type { Dynamic } from "@/types";
import { products } from "@/data";
import NotFoundPage from "@/app/404";
import styles from "./name.module.css";


export default async function CheckoutPage({ params }: Dynamic ) {
  const { name } = (await params);
  const product = products.find(item => item.name === name);

  if (!product) return <NotFoundPage />;

  return (
    <section className={styles.root} data-wrap="">
      <img src={`/images/${product.imageUrl}`} alt="" />
      <div className={styles.content}>
        <h1>{product.name}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>
      </div>
    </section>
  );
}
