import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";
import Script from "next/script";
import Image from "next/image";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <div className={styles.navbar}>
      <div id="title"></div>
      <Script id="script.titl" strategy="lazyOnload">
        {`document.getElementById("title").innerHTML = "Navbar";`}
      </Script>
      <div className={styles.profile}>
        {data?.user?.image && (
          <Image
            width={30}
            height={30}
            src={data.user.image}
            alt={data.user.fullname}
            className={styles.avatar}
          />
        )}
        {data && data.user.fullname}
        {data ? (
          <button onClick={() => signOut()} className={styles.button}>
            Sign Out
          </button>
        ) : (
          <button onClick={() => signIn()} className={styles.button}>
            SignIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
