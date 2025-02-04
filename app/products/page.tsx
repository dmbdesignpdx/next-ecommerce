// Ours
import { ProductsList } from "@/components/ProductsList";
import { useMongoCollections } from "@/lib/database";


export default async function ProductsPage() {
  const { products } = await useMongoCollections();
  const list = await products().find({}).toArray();

  return (
    <section>
      <h1>Products Page</h1>
      <ProductsList products={list} />

      {/* TODO: Test removing item */}
      <form>
        <input type="submit" value="Remove" />
      </form>
    </section>
  );
}
