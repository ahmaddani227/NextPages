import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  const { query } = useRouter();

  // CSR
  // const { data, error, isLoading } = useSWR(
  //   `/api/products/${query.product}`,
  //   fetcher
  // );

  return (
    <>
      {/* CSR */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}

      {/* SSR */}
      <DetailProduct product={product} />
    </>
  );
};

export default DetailProductPage;

export async function getServerSideProps({
  params,
}: {
  params: { product: string };
}) {
  console.log(params);
  // fetch data
  const res = await fetch(
    `http://localhost:3000/api/product/${params.product}`
  );
  const response = await res.json();

  return {
    props: { product: response.data },
  };
}

// SSG for Dynemic Routing
// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:3000/product");
//   const response = await res.json();

//   const paths = response.data.map((product: ProductType) => ({
//     params: {
//       product: product.id,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export async function getStaticProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   // fetch data
//   const res = await fetch(`http://localhost:3000/api/product/${params}`);
//   const response = await res.json();

//   return {
//     props: { product: response.data },
//   };
// }
