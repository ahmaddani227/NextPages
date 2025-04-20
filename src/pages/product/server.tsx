import ProductView from "@/views/Product";
import { ProductType } from "@/types/product.type";

const ProductPage = (props: { products: ProductType[] }) => {
  const { products } = props;

  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductPage;

// Function Next Js For Server Side Rendering
// called every time there is a request
export async function getServerSideProps() {
  // fetch data
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: { products: response.data },
  };
}
