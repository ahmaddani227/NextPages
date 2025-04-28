import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { data }: any = useSession();

  return (
    <div className={styles.navbar}>
      <div>Navbar</div>
      <div className={styles.profile}>
        {data?.user?.image && (
          <img
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
