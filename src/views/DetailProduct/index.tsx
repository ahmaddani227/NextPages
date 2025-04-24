import { ProductType } from "@/types/product.type";
import styles from "./DetailProduct.module.scss";

const DetailProduct = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h2 className={styles.title}>Detail Product</h2>
      <div className={styles.productDetail}>
        <div className={styles.productDetail__item__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__item__name}>{product.name}</h4>
        <p className={styles.productDetail__item__category}>
          {product.category}
        </p>
        <p className={styles.productDetail__item__price}>
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};

export default DetailProduct;
