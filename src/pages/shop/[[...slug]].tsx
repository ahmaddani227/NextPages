import { useRouter } from "next/router";

const ShopPage = () => {
  const { query } = useRouter();

  return (
    <>
      <h2>Shop Page</h2>
      <p>
        Product : {`${query.slug && query.slug[0] + " - " + query.slug[1]}`}
      </p>
    </>
  );
};

export default ShopPage;
