import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";

const ProductPage = () => {
  // const [products, setProducts] = useState([]);
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((response) => setProducts(response.data));
  // }, []);

  return <ProductView products={isLoading ? [] : data.data} />;
};

export default ProductPage;
