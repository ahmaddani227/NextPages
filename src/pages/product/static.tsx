import ProductView from "@/views/Product";
import { ProductType } from "@/types/product.type";

// default nya static site generation jika tidak fetch data
const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

export async function getStaticProps() {
  // fetch data
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: { products: response.data },
    // revalidate: 10
  };
}
