import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginView = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p>
        Belum punya akun ? <Link href={"/auth/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginView;
