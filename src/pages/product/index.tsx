import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product: productType, i) => (
        <div key={i}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductPage;
