import ProductsAll from "@/components/ProductsAll";
import { getData } from "@/lib/data";

export default function Home() {
  const data = getData();
  const { products } = data;

  return (
    <div className=" px-5  mx-auto">
      <ProductsAll products={products} />
    </div>
  );
}
