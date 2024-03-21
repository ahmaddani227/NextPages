import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  // console.log(query);
  return (
    <>
      <h2>Detail Product</h2>
      <p>Product = {query.product} </p>
    </>
  );
};

export default DetailProductPage;
